import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import EspaceSinistre from '../screens/Sinistre/EspaceSinistre';
import NewDeclaration from '../screens/Sinistre/NewDeclaration';
import CutomHeader from '../components/Header/CutomHeader';
import { Text ,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import { headerTitleStyle,headerStyle,headerBackImage } from './defaultNavigationsOptions';
import { Ionicons ,MaterialIcons, Feather } from '@expo/vector-icons';



const Sinistrestack = createStackNavigator({
    EspaceSinistre: {
            screen: EspaceSinistre,
            navigationOptions:({ navigation }) =>{
                return {
                    headerTitle: () => <CutomHeader  navigation={navigation} title='Espace Sinistre'  />
                }
            }
            },
            NewDeclaration: {
                screen: NewDeclaration,
                navigationOptions:({ navigation }) =>{
                return {
                    title:'Nouvelle pre declaration',
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
        initialRouteName: 'EspaceSinistre',
        defaultNavigationOptions: {
            headerStyle: headerStyle,
            headerTitleStyle:headerTitleStyle,
            headerBackImage:headerBackImage,
        }
    }
    );



    export default Sinistrestack;