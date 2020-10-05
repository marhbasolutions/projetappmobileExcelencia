import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import CutomHeader from '../components/Header/CutomHeader';
import { Text ,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import { headerTitleStyle,headerStyle,headerBackImage } from './defaultNavigationsOptions';
import { Ionicons ,MaterialIcons, Feather } from '@expo/vector-icons';
import AgencesScreen from '../screens/Agences/Agences';
import DetailsAgenceScreen from '../screens/Agences/DetailsAgence';



const AgenceStack = createStackNavigator({
    Agences: {
            screen: AgencesScreen,
            navigationOptions:({ navigation }) =>{
                return {
                    headerTitle: () => <CutomHeader  navigation={navigation} title='Agences'  />
                }
            }
            },
            DetailsAgence: {
                screen: DetailsAgenceScreen,
                navigationOptions:({ navigation }) =>{
                return {
                    title:'Les agences de '+navigation.getParam('ville'),
                    headerRight: () => (
                        <TouchableOpacity onPress={()=>navigation.openDrawer()}  >
                            <MaterialIcons name='notifications' size={28} color='white'  />
                        </TouchableOpacity>
                      ),
                    }  
                }
            }, 
    },
    {
        initialRouteName: 'Agences',
        defaultNavigationOptions: {
            headerStyle: headerStyle,
            headerTitleStyle:headerTitleStyle,
            headerBackImage:headerBackImage,
        }
    }
    );



    export default AgenceStack;