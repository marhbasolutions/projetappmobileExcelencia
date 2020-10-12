
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginStack from './loginStack';
import TabBottom from './BottomTabNavigator';

const switchNavigator = createSwitchNavigator(
    {
        Login: LoginStack,
        Home: TabBottom
    },
    { headerMode: "none", initialRouteName: "Home" });

const AppContainer = createAppContainer(switchNavigator);

export default AppContainer;