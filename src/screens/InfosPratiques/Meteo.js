import React, { useEffect , useState } from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity  } from 'react-native';
import { Button } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import CustomFooter from '../../components/Footer/CustomFooter';

import { API_PHARMACY } from '../../api/config';

import { getLocation, getData } from 'react-native-weather-api';

export default function MeteoScreen({navigation}) { 

    const [cityName, setCityName] = useState('');
    const [temperature, setTemperature] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [icon, setIcon] = useState('');
    const [dataloaded, setDataloaded] = useState(false);
    const [pharmacies, setPharmacies] = useState([]);

    useEffect(() => {

        getLocation();  
        setTimeout(function() {  

        let data = new getData()
        console.log(data);
        

        /*fetch(API_PHARMACY,{
            'method': 'get',
            'credentials': 'include',
            'headers': {
                'Content-Type': 'application/json',
            }})
            .then((response) => response.json())
            .then((json) => {
                    setPharmacies(json.data);
                    setDataloaded(true);
            })
            .catch((error) => {
            console.error(error);
            });*/

       
        
        },1000);

    }, []);
    
    

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
                        <Image source={{uri:icon}}  width={100} height={100} />
                      <View style={{marginLeft:24}}>
                          <Text type='bold' style={{fontSize:17}}>{cityName} </Text>
                      </View>
                      <Text type='bold' style={{color:'#f6d147',marginLeft:12,position:'absolute',right:0,fontSize:26}}>{temperature}</Text>
                  </View>

                  


                 


            </Content>
            <CustomFooter  name="Meteo" navigation={navigation} />
        </Container>
        
    );
}



