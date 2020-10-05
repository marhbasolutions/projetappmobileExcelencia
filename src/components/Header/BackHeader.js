import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Text from '../CustomText/CustomText';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'
import global from '../../styles/index';
import { Content, Left, Right } from 'native-base';


export default function BackHeader ({navigation , isReturn , title }) {

    const opneMenu = () =>{
        navigation.openDrawer();
    }



        return (
            <View style={[global.headerContainer]}>
                {  isReturn && (
                    <Icon name='menu' size={38} color='white' containerStyle={[global.iconHeaderLeft]} onPress={()=>navigation.goBack()}  />
                ) }
                 {  title  && title != '' && (
                 <View>
                     <Text>{title}</Text>
                 </View>
                 )}
                <Icon name='menu' size={38} color='white' containerStyle={[global.iconHeaderRight]} onPress={opneMenu}  />
            </View>
        );
   
}