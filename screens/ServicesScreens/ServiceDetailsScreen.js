import React, {useState, useEffect} from 'react';
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
  StatusBar,
} from 'react-native';
import global from '../globalSytle';
import {Icon} from 'react-native-elements';

import {Container, Content, Header, Body, Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

import {API_SERVICES_BY_CATEGORY, HOST, CORS_ANYWHERE} from '../api/config';


export default function ServiceDetailsScreen({route, navigation}) {
  const [service, setService] = useState(route.params.service);
  const [serviceLoaded, setServiceLoaded] = useState(false);
  const [subServices, setSubServices] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {

    AsyncStorage.getItem('USER_TOKEN').then(token => {
      setToken(token);
      fetch(API_SERVICES_BY_CATEGORY + '?category=' + service.id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
      })
        .then(response => response.json())
        .then(json => {
          setSubServices(json.data);
          setServiceLoaded(true);
        })
        .catch(error => {
          console.error(error);
        });
    });
  }, [subServices]);

  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ServiceDetailDescription',{service:item})}>
        <ImageBackground
          source={{uri: HOST + '/images/services/' + item.thumbnail}}
          style={[styles.subServiceBackground]}
          imageStyle={{borderRadius: 6}}>
          <View style={styles.subServiceNameContainer}>
            <LinearGradient
              colors={['#30336b10', service.color]}
              start={{x: 0.9, y: 0}}>
              <Text style={styles.subServiceName}>{item.name} </Text>
            </LinearGradient>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.detailsHeaderBackground}>
        <View style={styles.detailsHeaderInner}>
          <Icon
            type="material-community"
            name={service.icon}
            size={34}
            style={{alignSelf: 'flex-start'}}
            color="white"
          />
          <Text type="bold" style={[styles.detailsHeaderName]}>
            {service.name}
          </Text>
        </View>
      </View>
    );
  };

  return serviceLoaded && subServices.length > 0 ? (
    <Container>
      <StatusBar backgroundColor="#242c62" />

      <Content
        style={[
          global.container,
          global.paddingContainer,
          {paddingBottom: 20},
        ]}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <FlatList
            data={subServices}
            renderItem={({item}) => renderItem(item)}
            stickyHeaderIndices={[0]}
          />
        </View>
      </Content>
    </Container>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator
        style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
        color="#f6d147"
        size={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  subServiceBackground: {width: '100%', height: 200},
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
    backgroundColor: '#242c62',
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
    color: '#fff',
    marginTop: 3,
    textTransform: 'uppercase',
  },
  optionsButton: {position: 'absolute', right: 10, bottom: 10},
});
