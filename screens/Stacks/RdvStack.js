import React, {useContext, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import RdvScreen from '../RdvScreens/RdvScreen';
import RdvEnCoursScreen from '../RdvScreens/RdvEnCoursScreen';
import RdvTerminesScreen from '../RdvScreens/RdvTerminesScreen';
import {AuthContext} from '../../components/context';
import NotificationBudge from '../utils/notificationBudge';

const RdvStack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const MesRDVTopTabScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#242c62',
      inactiveTintColor: 'black',
      labelStyle: {fontSize: 14, textTransform: 'none', fontWeight: 'bold'},
      tabStyle: {padding: 0},
      indicatorStyle: {
        backgroundColor: '#f6d147',
      },
    }}>
    <Tab.Screen
      name="RdvEnCours"
      component={RdvEnCoursScreen}
      options={{
        title: 'Rendez-vous en cours',
      }}
    />
    <Tab.Screen
      name="RdvTermines"
      component={RdvTerminesScreen}
      options={{
        title: 'Rendez-vous validés',
      }}
    />
  </Tab.Navigator>
);

export default (RdvStackScreen = ({route, navigation}) => {
  useEffect(() => {
    if (route.params && route.params.to != null)
      navigation.navigate(route.params.to);
  }, []);

  const {openNotification} = useContext(AuthContext);
  return (
    <RdvStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#242c62',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <RdvStack.Screen
        name="Rdv"
        component={RdvScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#242c62"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name="ios-notifications"
              size={25}
              backgroundColor="#242c62"
              onPress={openNotification}>
              <NotificationBudge />
            </Icon.Button>
          ),
          title: 'Prendre un rendz-vous',
        }}
      />

      <RdvStack.Screen
        name="MesRDV"
        component={MesRDVTopTabScreen}
        options={{
          headerRight: () => (
            <Icon.Button
              name="ios-notifications"
              size={25}
              backgroundColor="#242c62"
              onPress={openNotification}>
              <NotificationBudge />
            </Icon.Button>
          ),
          title: 'Mes rendez-vous',
        }}
      />
    </RdvStack.Navigator>
  );
});
