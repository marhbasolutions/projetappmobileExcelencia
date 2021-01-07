import React, {useContext, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CotisationsScreen from '../CotisationsScreens/CotisationsScreen';
import CotisationsEnCoursScreen from '../CotisationsScreens/CotisationsEnCoursScreen';
import CotisationsTerminesScreen from '../CotisationsScreens/CotisationsTerminesScreen';
import CotisationsPayementScreen from '../CotisationsScreens/CotisationsPayementScreen';
import {Text} from 'react-native';

import {AuthContext} from '../../components/context';
import NotificationBudge from '../utils/notificationBudge';

const CotisationsStack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const MesCotisationsTopTabScreen = () => (
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
      name="CotisationsEnCours"
      component={CotisationsEnCoursScreen}
      options={{
        title: 'Cotisations en cours',
      }}
    />
    <Tab.Screen
      name="CotisationsTermines"
      component={CotisationsTerminesScreen}
      options={{
        title: 'Cotisations validées',
      }}
    />
  </Tab.Navigator>
);

export default (CotisationsStackScreen = ({route, navigation}) => {
  useEffect(() => {
    if (route.params && route.params.to != null)
      navigation.navigate(route.params.to);
  }, []);

  const {openNotification} = useContext(AuthContext);
  return (
    <CotisationsStack.Navigator
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
      <CotisationsStack.Screen
        name="Cotisations"
        component={CotisationsScreen}
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
          title: 'Payer mes cotisations',
        }}
      />

      <CotisationsStack.Screen
        name="MesCotisations"
        component={MesCotisationsTopTabScreen}
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
          title: 'Mes cotisations',
        }}
      />

      <CotisationsStack.Screen
        name="Payement"
        component={CotisationsPayementScreen}
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
          title: 'Payement',
        }}
      />
    </CotisationsStack.Navigator>
  );
});
