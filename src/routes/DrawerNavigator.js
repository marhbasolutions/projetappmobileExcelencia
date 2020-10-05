
import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeStack from './homeStack';
import Sinistrestack from './sinistreStack';
import ServiceStack from './serviceStack';
import AgenceStack from './agenceStack';
import SideMenu from '../components/SideMenu/SideMenu'

const HomeDrawer = createDrawerNavigator(
    {
        Home: {
            screen: HomeStack,
        },
        Sinistre: {
            screen: Sinistrestack,
        },
        Service: {
            screen: ServiceStack,
        },
        Agences: {
            screen: AgenceStack,
        },
    },
    {
    initialRouteName: 'Home',
    contentComponent:props => <SideMenu {...props} />
    });

    export default HomeDrawer;