
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginStack from './loginStack';
import HomeDrawer from './DrawerNavigator';

const switchNavigator = createSwitchNavigator(
    {
        Login: LoginStack,
        Home: HomeDrawer
    },
    { headerMode: "none", initialRouteName: "Login" });

const AppContainer = createAppContainer(switchNavigator);

export default AppContainer;