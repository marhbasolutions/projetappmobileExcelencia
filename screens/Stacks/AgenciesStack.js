import React, {useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AgenciesScreen from '../AgencesScreens/AgenciesScreen';
import AgencyCityScreen from '../AgencesScreens/AgencyCityScreen';
import {View, Text} from 'react-native';
import {AuthContext} from '../../components/context';
import NotificationBudge from '../utils/notificationBudge';

const AgenciesStack = createStackNavigator();

export default (AgenciesStackScreen = ({navigation}) => {
  const {openNotification} = useContext(AuthContext);

  return (
    <AgenciesStack.Navigator
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
      <AgenciesStack.Screen
        name="Agencies"
        component={AgenciesScreen}
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
          title: 'Agences',
        }}
      />

      <AgenciesStack.Screen
        name="AgencyCity"
        component={AgencyCityScreen}
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
          title: 'Agences',
        }}
      />
    </AgenciesStack.Navigator>
  );
});
