import React, {useContext, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import SinistreScreen from '../SinistreScreens/SinistreScreen';
import SinistreDeclarationScreen from '../SinistreScreens/SinistreDeclarationScreen';
import SinistreDeclarationFormScreen from '../SinistreScreens/SinistreDeclarationFormScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SinisteEncoursScreen from '../SinistreScreens/SinisteEncoursScreen';
import SinisteValideScreen from '../SinistreScreens/SinisteValideScreen';
import {AuthContext} from '../../components/context';
import {Text} from 'react-native';
import NotificationBudge from '../utils/notificationBudge';

const SinistreStack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const MesSinistresTopTabScreen = () => (
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
      name="SinisteEncoursScreen"
      component={SinisteEncoursScreen}
      options={{
        title: 'Sinistres en cours',
      }}
    />
    <Tab.Screen
      name="SinisteValideScreen"
      component={SinisteValideScreen}
      options={{
        title: 'Sinistres validés',
      }}
    />
  </Tab.Navigator>
);

export default (SinistreStackScreen = ({route, navigation}) => {
  const {openNotification} = useContext(AuthContext);
  useEffect(() => {
    if (route.params != null && route.params.to != null)
      navigation.navigate(route.params.to);
  }, []);
  return (
    <SinistreStack.Navigator
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
      <SinistreStack.Screen
        name="Sinistre"
        component={SinistreScreen}
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
          title: 'Espace sinistre',
        }}
      />

      <SinistreStack.Screen
        name="SinistreDeclaration"
        component={SinistreDeclarationScreen}
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
          title: 'Pre-declarer un sinistre',
        }}
      />

      <SinistreStack.Screen
        name="SinistreDeclarationForm"
        component={SinistreDeclarationFormScreen}
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
          title: 'Details de sinistre',
        }}
      />

      <SinistreStack.Screen
        name="MesSinistres"
        component={MesSinistresTopTabScreen}
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
          title: 'Mes Sinistres',
        }}
      />
    </SinistreStack.Navigator>
  );
});
