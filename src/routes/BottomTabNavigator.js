
import React from 'react';
import Sinistrestack from './sinistreStack';
import ServiceStack from './serviceStack';
import AgenceStack from './agenceStack';
import SideMenu from '../components/SideMenu/SideMenu'
import MesContractsScreen from '../screens/Contracts/MesContrats';
import accountScreen from '../screens/Account/Account';
import HomeDrawer from './DrawerNavigator';

import Text, { View } from 'react-native';
import { Button , Icon} from 'react-native-elements';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { createBottomTabNavigator , BottomTabBar } from 'react-navigation-tabs';

const TabBottom = createBottomTabNavigator(
    {
        Home: {
            screen: HomeDrawer,
            navigationOptions: {
                tabBarIcon:() => <FontAwesome5 color={'#fff'} name="home" size={20} />,
            }
        },
        Services: {
            screen: ServiceStack,
            navigationOptions: {
                tabBarIcon:() => <MaterialCommunityIcons color={'#fff'} name="cogs" size={20} />
            }
        },
        Sinistres: {
            screen: Sinistrestack,
            navigationOptions: {
                tabBarIcon:() => <Icon type='material-community' size={ 36 } style={{padding:11,backgroundColor:'black',borderRadius:100,fontWeight:'bold'}} name={ 'plus' } color={ '#fff' }/>,
                tabBarLabel: <View/>
            }
        },
        Contracts: {
            screen: MesContractsScreen,
            navigationOptions: {
                tabBarIcon:() => <FontAwesome5 color={'#fff'} name="file-alt" size={20} />
            }
        },
        Account: {
            screen: accountScreen,
            navigationOptions: {
                tabBarIcon:() => <MaterialCommunityIcons color={'#fff'} name="account-convert" size={20} />
            }
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            tabBarOptions: {
              style: { backgroundColor: '#242c62',height: 60},
              indicatorStyle: {backgroundColor:'green'},
               activeTintColor: "#fff",
               inactiveTintColor: '#fff',
               tabStyle: {
                width: '100%',
              },
               pressColor: "white",
               labelStyle: { fontSize: 13,fontFamily:'Raleway-Regular',marginBottom:8},
            }
          }
    }
    );

    export default TabBottom;