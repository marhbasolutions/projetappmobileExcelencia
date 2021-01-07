import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../Root/SplashScreen';
import SignInScreen from '../Root/SignInScreen';
import SignUpScreen from '../Root/SignUpScreen';
import ForgotPasswordScreen from '../Root/ForgotPasswordScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    {/* <RootStack.Screen name="SplashScreen" component={SplashScreen} /> */}
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
