import React, { useEffect } from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity  } from 'react-native';
import { Button } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import CustomFooter from '../../components/Footer/CustomFooter';

export default function NumerosScreen({navigation}) { 

    return (
        <Container>
            <Content style={[global.container,global.paddingContainer]}>

                  <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                        <Text type='bold' style={{fontSize:17}}> Police </Text>
                        <Text type='meduim' style={{fontSize:17}}> 233 </Text>
                        <MaterialIcons name='phone'  style={{marginLeft:12,position:'absolute',right:0}} size={36} color={'#f6d147'}  />
                  </View>

                  <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                        <Text type='bold' style={{fontSize:17}}> hopital </Text>
                        <Text type='meduim' style={{fontSize:17}}> 99 </Text>
                        <MaterialIcons name='phone'  style={{marginLeft:12,position:'absolute',right:0}} size={36} color={'#f6d147'}  />
                  </View>

                  <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                        <Text type='bold' style={{fontSize:17}}> Gendarmerie </Text>
                        <Text type='meduim' style={{fontSize:17}}> 344 </Text>
                        <MaterialIcons name='phone'  style={{marginLeft:12,position:'absolute',right:0}} size={36} color={'#f6d147'}  />
                  </View>

                 

            </Content>
            <CustomFooter  name="Numeros" navigation={navigation} />
        </Container>
        
    );
}



