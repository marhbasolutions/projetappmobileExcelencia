import React, { useEffect } from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity  } from 'react-native';
import { Button } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import CustomFooter from '../../components/Footer/CustomFooter';

export default function MeteoScreen({navigation}) { 
    
    

    return (
        <Container>
            <Content style={[global.container,global.paddingContainer]}>

                  <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                        <MaterialIcons name='local-hospital' size={45} color='#009346'  />
                      <View style={{marginLeft:24}}>
                          <Text type='bold' style={{fontSize:17}}>Pharmacie centrale </Text>
                          <Text>Adresse 12 , rue de la meme </Text>
                      </View>
                      <MaterialIcons name='phone'  style={{marginLeft:12,position:'absolute',right:0}} size={36} color={'#f6d147'}  />
                  </View>

                  <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                        <MaterialIcons name='local-hospital' size={45} color='#009346'  />
                      <View style={{marginLeft:24}}>
                          <Text type='bold' style={{fontSize:17}}>Pharmacie centrale </Text>
                          <Text>Adresse 12 , rue de la meme </Text>
                      </View>
                      <MaterialIcons name='phone'  style={{marginLeft:12,position:'absolute',right:0}} size={36} color={'#f6d147'}  />
                  </View>

                  <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                        <MaterialIcons name='local-hospital' size={45} color='#009346'  />
                      <View style={{marginLeft:24}}>
                          <Text type='bold' style={{fontSize:17}}>Pharmacie centrale </Text>
                          <Text>Adresse 12 , rue de la meme </Text>
                      </View>
                      <MaterialIcons name='phone'  style={{marginLeft:12,position:'absolute',right:0}} size={36} color={'#f6d147'}  />
                  </View>

                  <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                        <MaterialIcons name='local-hospital' size={45} color='#009346'  />
                      <View style={{marginLeft:24}}>
                          <Text type='bold' style={{fontSize:17}}>Pharmacie centrale </Text>
                          <Text>Adresse 12 , rue de la meme </Text>
                      </View>
                      <MaterialIcons name='phone'  style={{marginLeft:12,position:'absolute',right:0}} size={36} color={'#f6d147'}  />
                  </View>

                  <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                        <MaterialCommunityIcons name='weather-hail'  size={45} color='#242c62'  />
                      <View style={{marginLeft:24}}>
                          <Text type='bold' style={{fontSize:17}}>Marrakech </Text>
                          <Text>Lundi 23/03/2020 </Text>
                      </View>
                      <Text type='bold' style={{color:'#f6d147',marginLeft:12,position:'absolute',right:0,fontSize:26}}>12°</Text>
                  </View>

                  <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                        <MaterialCommunityIcons name='weather-hail'  size={45} color='#242c62'  />
                      <View style={{marginLeft:24}}>
                          <Text type='bold' style={{fontSize:17}}>Marrakech </Text>
                          <Text>Lundi 23/03/2020 </Text>
                      </View>
                      <Text type='bold' style={{color:'#f6d147',marginLeft:12,position:'absolute',right:0,fontSize:26}}>12°</Text>
                  </View>

                  <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                        <MaterialCommunityIcons name='weather-hail'  size={45} color='#242c62'  />
                      <View style={{marginLeft:24}}>
                          <Text type='bold' style={{fontSize:17}}>Marrakech </Text>
                          <Text>Lundi 23/03/2020 </Text>
                      </View>
                      <Text type='bold' style={{color:'#f6d147',marginLeft:12,position:'absolute',right:0,fontSize:26}}>12°</Text>
                  </View>


                 


            </Content>
            <CustomFooter  name="Meteo" navigation={navigation} />
        </Container>
        
    );
}



