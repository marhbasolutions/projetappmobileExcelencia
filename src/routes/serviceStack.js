import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Services from '../screens/Services/Services';
import ServiceDetails from '../screens/Services/ServiceDetails';
import { headerTitleStyle,headerStyle,headerBackImage } from './defaultNavigationsOptions';
import CutomHeader from '../components/Header/CutomHeader';


const ServiceStack = createStackNavigator({
    Services: {
            screen: Services,
            navigationOptions:({ navigation }) =>{
                return {
                    headerTitle: () => <CutomHeader title='Services' navigation={navigation} />
                }
            }
            },
            ServiceDetails: {
                screen: ServiceDetails,
                navigationOptions:{
                    title:'Deails de service'
                }
                }, 
    },
    {
        initialRouteName: 'Services',
        defaultNavigationOptions: {
            headerStyle: headerStyle,
            headerTitleStyle:headerTitleStyle,
            headerBackImage:headerBackImage,
        }
    }
    );



    export default ServiceStack;