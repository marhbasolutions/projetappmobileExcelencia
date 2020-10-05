import React from 'react';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import AboutScreen from '../screens/About/AboutScreen';
import CutomHeader from '../components/Header/CutomHeader';
import SimulerDevis from '../screens/Devis/SimulerDevis';
import RdvScreen from '../screens/Rdv/RdvScreen';
import MesContractsScreen from '../screens/Contracts/MesContrats';
import  MeteoScreen from '../screens/InfosPratiques/Meteo';
import  NumerosScreen from '../screens/Numeros/Numeros';
import  accountScreen from '../screens/Account/Account';

import { headerTitleStyle,headerStyle,headerBackImage } from './defaultNavigationsOptions';



const HomeStack = createStackNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions:({ navigation }) =>{
                return {
                    headerTitle: () => <CutomHeader  navigation={navigation} />
                }
            }
            },
            About:{
                screen: AboutScreen, 
            },
            Devis:{
                screen: SimulerDevis,
                navigationOptions:{
                    headerShown:false,
                }
            },
            RDV:{
                screen: RdvScreen,
            },
            Contrats:{
                screen: MesContractsScreen,
            },
            Meteo:{
                screen: MeteoScreen,
                navigationOptions:{
                    title:'Meteo et Pharmacie'
                }
            },
            Numeros:{
                screen: NumerosScreen,
            },
            Account:{
                screen: accountScreen,
            },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: headerStyle,
            headerTitleStyle:headerTitleStyle,
            headerBackImage:headerBackImage,
        }
    }
    );



    export default HomeStack;