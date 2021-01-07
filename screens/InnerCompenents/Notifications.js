import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {ActivityIndicator} from 'react-native-paper';
import {
  dissmissNotification,
  fetchNotifications,
} from '../utils/notificationsFunctions';

export default function Notifications({notifications, loadingNotif}) {
  const [notifs, setNotifs] = React.useState([]);
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    
    AsyncStorage.getItem('USER_TOKEN').then(token => {
      setToken(token);
    });

    setNotifs(notifications);
  }, [notifications]);

  const renderItem = item => {
    return (
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          paddingVertical: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{maxWidth: '92%'}}>
          <Text style={{fontSize: 14, paddingHorizontal: 5}}>{item.title}</Text>
          <Text style={{fontSize: 12, paddingHorizontal: 5}}>
            {item.content}
          </Text>
        </View>
        <Icon
          type="font-awesome"
          color={'red'}
          name="close"
          size={16}
          onPress={() => {
            dissmissNotification(item.id,token).then(async res => {
              if (res.success) {
                await AsyncStorage.getItem('USER_ID').then(userId => {
                  fetchNotifications(userId).then(res => {
                    if (res.success) {
                      setNotifs(res.notifications);
                    }
                  });
                });
              }
            });
          }}
        />
      </View>
    );
  };

  const renderData = () => {
    if (notifs.length > 0) {
      return (
        <FlatList
          style={{flex: 1}}
          data={notifs}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={(item, index) => index}
        />
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text>Vous n'avez aucune notification.</Text>
        </View>
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
      }}>
      <Text
        style={{
          backgroundColor: 'white',
          borderRadius: 12,
          paddingVertical: 12,
          color: '#242c62',
          textAlign: 'center',
          textDecorationLine: 'underline',
          textDecorationColor: '#242c62',
          marginBottom: 5,
        }}>
        Les notifications
      </Text>
      {loadingNotif ? (
        <ActivityIndicator
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            flex: 1,
          }}
          color="#f6d147"
          size={30}
        />
      ) : (
        renderData()
      )}
    </View>
  );
}
