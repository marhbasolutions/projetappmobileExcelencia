import React, {useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {View, Text} from 'react-native';

import HomeScreen from '../HomeScreen';
import AboutScreen from '../AboutScreen';

import SupportScreen from '../SupportScreen';
import ContractsScreen from '../ContractsScreen';
import WeatherScreen from '../WeatherScreen';
import NumbersScreen from '../NumbersScreen';
import {AuthContext} from '../../components/context';
import NotificationBudge from '../utils/notificationBudge';

const HomeStack = createStackNavigator();

export default (HomeStackScreen = ({navigation}) => {
  const {openNotification} = useContext(AuthContext);

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerRight: () => (
          <Icon.Button
            name="ios-notifications"
            size={25}
            backgroundColor="#242c62"
            onPress={openNotification}>
            <NotificationBudge />
          </Icon.Button>
        ),
        headerStyle: {
          backgroundColor: '#242c62',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          backgroundColor: '#242c62',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Accueil',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#242c62"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />

      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'Qui sommes nous ?',
        }}
      />

      <HomeStack.Screen
        name="Support"
        component={SupportScreen}
        options={{
          title: 'Assistance',
        }}
      />

      <HomeStack.Screen
        name="Contract"
        component={ContractsScreen}
        options={{
          title: 'Contrats',
        }}
      />

      <HomeStack.Screen
        name="Weather"
        component={WeatherScreen}
        options={{
          title: 'Meteo et pharmacie',
        }}
      />

      <HomeStack.Screen
        name="Numbers"
        component={NumbersScreen}
        options={{
          title: 'Numéros utiles',
        }}
      />
    </HomeStack.Navigator>
  );
});
