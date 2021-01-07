import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from '../Stacks/HomeStack';
import ServicesStackScreen from '../Stacks/ServicesStack';
import SinistresStackScreen from '../Stacks/SinistreStack';
import ContractsScreen from '../ContractsScreen';
import ProfileScreen from '../ProfileScreen';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: '#ccccfc',
      style: {
        backgroundColor: '#242c62',
      },
      keyboardHidesTabBar: true,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Accueil',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ServicesTab"
      component={ServicesStackScreen}
      options={{
        tabBarLabel: 'Services',
        tabBarIcon: ({color}) => (
          <Icon name="ios-apps" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="SinistresTab"
      component={SinistresStackScreen}
      options={{
        tabBarButton: props => (
          <TouchableOpacity
            {...props}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 95 / 2,
              height: 90 / 2,
              borderRadius: 90 / 4,
              backgroundColor: 'black',
            }}>
            <Icon name="ios-add" size={27} color="#F8F8F8" />
          </TouchableOpacity>
        ),
        tabBarLabel: '',
      }}
    />


    <Tab.Screen
      name="ContractsTab"
      component={ContractsScreen}
      options={{
        tabBarLabel: 'Contrats',
        tabBarIcon: ({color}) => (
          <Icon name="ios-document" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="ProfileTab"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profil',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
