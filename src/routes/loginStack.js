import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import LoginScreen from '../screens/Login/LoginScreen';
import ForgotPassword from '../screens/ForgotPassword/ForgotPasswordScreen';
import SignUp from '../screens/SignUp/SignUpScreen';

const LoginStack = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
        },
        ForgotPassword: {
            screen: ForgotPassword,
        },
        SignUp: {
            screen: SignUp,
        }
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions:{
            drawerLockMode: 'locked-closed',
            headerShown:false,
        }
    });

    export default LoginStack;
