import React from 'react';
import { Ionicons ,MaterialIcons, Feather } from '@expo/vector-icons';
import Text from '../CustomText/CustomText';
import { View , TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
import global from '../../styles/index';
import { Content, Left, Right } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';




export default function CutomHeader ({navigation,title,isReturn,color}) {

    const opneMenu = () =>{
        navigation.openDrawer();
    }
    
    const goBack = () =>{
        //navigation.goBack();
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
        });
        navigation.dispatch(resetAction)
    }

        return (
            <View style={[global.headerContainer,color != null ?{backgroundColor:color}:null]}>
                {  !isReturn ? (
                    <TouchableOpacity onPress={opneMenu} style={[global.iconHeaderLeft]} >
                        <Ionicons name='ios-menu' size={32} color='white'   />
                    </TouchableOpacity>
                 ):(
                    <TouchableOpacity onPress={goBack} style={[global.iconHeaderLeft]} >
                        <Feather name='arrow-left' size={32} color='white' onPress={goBack}  />
                        </TouchableOpacity>
                        )}
                {  title  && title != '' && (
                 <View style={[global.headerTitleContainer]}>
                     <Text style={[global.headerTitleText]}>{title}</Text>
                 </View>
                 )}
                 <TouchableOpacity onPress={opneMenu} style={[global.iconHeaderRight]} >
                        <MaterialIcons name='notifications' size={28} color='white' />
                </TouchableOpacity>
            </View>
        );
   
}