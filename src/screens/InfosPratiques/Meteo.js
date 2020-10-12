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
    const [data, setData] = useState(null);

    useEffect(() => {

        
        

        fetch('http://api.weatherstack.com/current?access_key=3c5395dd08dfd41b2bdaf851f696bd12&query=Congo',{
            'method': 'GET',
            'credentials': 'include',
            'headers': {
                'Content-Type': 'application/json',
            }})
            .then((response) => response.json())
            .then((json) => {
                    setData(json)
            })
            .catch((error) => {
            console.error(error);
            });

       
        
      

    }, []);
    
    

    return (
        <Container>
            <Content style={[global.container,global.paddingContainer]}>

                { pharmacies.length >0 && (
                        <View style={{flexDirection:'row', alignItems:'center',marginBottom:15,width:'100%'}}>
                        <MaterialIcons name='local-hospital' size={36} color='#009346'  />
                        <View style={{marginLeft:24}}>
                        <Text type='bold' style={{fontSize:17}}>Pharmacie centrale </Text>
                        <Text>Adresse 12 , rue de la meme </Text>
                        </View>
                        <MaterialIcons name='phone'  style={{marginLeft:12,position:'absolute',right:0}} size={36} color={'#f6d147'}  />
                        </View>
                )}

                { data != null && (
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                                        <Image source={{uri:data.current.weather_icons[0]}} style={{width:30,height:30,backgroundColor:'red'}}   width={30} height={30} />
                                    <View style={{marginLeft:24}}>
                                        <Text type='bold' style={{fontSize:17}}>{data.location.country+' - '+data.location.name} </Text>
                                    </View>
                                    <Text type='bold' style={{color:'#f6d147',marginLeft:12,position:'absolute',right:0,fontSize:26}}>{data.current.temperature } °</Text>
                                </View>
                )}

            </Content>
      
        </Container>
        
    );
}



