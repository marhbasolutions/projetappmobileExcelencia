import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SimulerDevis from '../DevisScreens/SimulerDevis';
import DevisEnCoursScreen from '../DevisScreens/DevisEnCoursScreen';
import DevisTerminesScreen from '../DevisScreens/DevisTerminesScreen';
import {AuthContext} from '../../components/context';
import NotificationBudge from '../utils/notificationBudge';

const DevisStack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const MesDevisTopTabScreen = () => (
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
      name="DevisEnCours"
      component={DevisEnCoursScreen}
      options={{
        title: 'Devis en cours',
      }}
    />
    <Tab.Screen
      name="DevisTermines"
      component={DevisTerminesScreen}
      options={{
        title: 'Devis validés',
      }}
    />
  </Tab.Navigator>
);

export default (DevisStackScreen = ({navigation}) => {
  const {openNotification} = useContext(AuthContext);
  return (
    <DevisStack.Navigator
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
      <DevisStack.Screen
        name="Devis"
        component={SimulerDevis}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="transparent"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name="ios-notifications"
              size={25}
              backgroundColor="transparent"
              onPress={openNotification}>
              <NotificationBudge />
            </Icon.Button>
          ),
          title: 'Simuler un devis',
          headerShown: true,
          headerTransparent: true,
        }}
      />

      <DevisStack.Screen
        name="MesDevis"
        component={MesDevisTopTabScreen}
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
          title: 'Mes devis',
        }}
      />
    </DevisStack.Navigator>
  );
});
