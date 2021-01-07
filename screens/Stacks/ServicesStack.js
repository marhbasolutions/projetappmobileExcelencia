import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ServicesScreen from '../ServicesScreens/ServicesScreen';
import ServiceDetailsScreen from '../ServicesScreens/ServiceDetailsScreen';
import ServiceDetailDescriptionScreen from '../ServicesScreens/ServiceDetailDescriptionScreen';
import {AuthContext} from '../../components/context';
import ServiceSubscriptionScreen from '../ServicesScreens/ServiceSubscription';
import {Text} from 'react-native';
import NotificationBudge from '../utils/notificationBudge';

const ServicesStack = createStackNavigator();

export default (ServicesStackScreen = ({navigation, route}) => {
  const {openNotification} = useContext(AuthContext);
  return (
    <ServicesStack.Navigator
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
      <ServicesStack.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          title: 'Nos produits phares',
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
        }}
      />

      <ServicesStack.Screen
        name="ServiceDetails"
        component={ServiceDetailsScreen}
        options={({route}) => ({
          title: route.params.service.name,
          headerRight: () => (
            <Icon.Button
              name="ios-notifications"
              size={25}
              backgroundColor="#242c62"
              onPress={openNotification}>
              <NotificationBudge />
            </Icon.Button>
          ),
        })}
      />

      <ServicesStack.Screen
        name="ServiceDetailDescription"
        component={ServiceDetailDescriptionScreen}
        options={{
          title: 'Description',
          headerRight: () => (
            <Icon.Button
              name="ios-notifications"
              size={25}
              backgroundColor="#242c62"
              onPress={openNotification}>
              <NotificationBudge />
            </Icon.Button>
          ),
        }}
      />
      <ServicesStack.Screen
        name="ServiceSubscription"
        component={ServiceSubscriptionScreen}
        options={{
          title: 'Souscription',
          headerRight: () => (
            <Icon.Button
              name="ios-notifications"
              size={25}
              backgroundColor="#242c62"
              onPress={openNotification}>
              <NotificationBudge />
            </Icon.Button>
          ),
        }}
      />
    </ServicesStack.Navigator>
  );
});
