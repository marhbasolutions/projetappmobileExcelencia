import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {API_GET_CATEGORIES, HOST} from '../api/config';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

const ServicesScreen = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('USER_TOKEN').then(token => {
      setToken(token);
      fetch(API_GET_CATEGORIES, {
        method: 'get',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
      })
        .then(response => response.json())
        .then(json => {
          setCategories(json.data);
          setCategoriesLoaded(true);
        })
        .catch(error => {
          console.error(error);
        });
    });
  }, [categories]);

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {categoriesLoaded ? (
          categories.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('ServiceDetails', {service: item})
                }>
                <ImageBackground
                  source={{
                    uri: HOST + '/images/services/category/' + item.thumbnail,
                  }}
                  style={[styles.ServiceContainerBackground]}
                  imageStyle={{borderRadius: 6}}>
                  <LinearGradient
                    colors={['#30336b10', item.color]}
                    start={{x: 0.7, y: 0}}
                    style={[styles.backgroundGradient]}>
                    <View style={[styles.textContainerService]}>
                      <View>
                        <Icon
                          type="material-community"
                          name={item.icon}
                          size={34}
                          style={{alignSelf: 'flex-start'}}
                          color="white"
                        />
                      </View>
                      <LinearGradient
                        style={{borderRadius: 8}}
                        colors={['#30336b10', '#30336b']}
                        start={{x: 0.9, y: 0}}>
                        <Text type="bold" style={[styles.serviceText]}>
                          {item.name}
                        </Text>
                      </LinearGradient>
                    </View>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            );
          })
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator
              style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
              color="#f6d147"
              size={50}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingVertical: 10,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    paddingVertical: 5,
  },
  image: {
    justifyContent: 'flex-end',
    height: 100,
    resizeMode: 'cover',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  text: {
    backgroundColor: '#242c62',
    color: '#fff',
    padding: 6,
    borderRadius: 6,
    width: '80%',
  },
  ServiceContainerBackground: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
  backgroundGradient: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    height: '100%',
  },
  textContainerService: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: '90%',
    justifyContent: 'center',
  },
  serviceText: {
    fontSize: 17,
    padding: 7,
    paddingLeft: 14,
    color: 'white',
    marginTop: 3,
    textTransform: 'uppercase',
  },
  subServiceBackground: {width: '100%', height: 200, marginTop: 10},
  subServiceNameContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: '80%',
    justifyContent: 'center',
  },
  subServiceName: {
    fontSize: 17,
    padding: 7,
    paddingLeft: 14,
    color: '#30336b',
    marginTop: 3,
    textTransform: 'uppercase',
  },
  detailsHeaderBackground: {
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  detailsHeaderInner: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  detailsHeaderName: {
    fontSize: 17,
    padding: 7,
    paddingLeft: 14,
    color: '#242c62',
    marginTop: 3,
    textTransform: 'uppercase',
  },
  optionsButton: {position: 'absolute', right: 10, bottom: 10},
});
