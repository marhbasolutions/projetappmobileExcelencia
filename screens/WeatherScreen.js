import React, { useEffect , useState } from 'react';
import {  View ,Image,Text,ActivityIndicator,Linking, FlatList } from 'react-native';
import { Container,Content } from 'native-base';
import global from './globalSytle';
import {Icon} from 'react-native-elements';
import { API_PHARMACY } from './api/config';
import AsyncStorage from '@react-native-community/async-storage';

export default function WeatherScreen({navigation}) { 


    const [pharmacies, setPharmacies] = useState([]);
    const [data, setData] = useState(null);
    const [saving, setsaving] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        setsaving(true);

        AsyncStorage.getItem('USER_TOKEN').then(token => {
            setToken(token);
            fetch(API_PHARMACY, {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer '+token
                }
              })
              .then((response) => response.json())
                    .then((json) => {
                        setsaving(false);
                          if(json.success)
                          {
                            setPharmacies(json.pharmacies);
                          }
                })
                .catch((error) => {
                          console.error(error);
                });
          });

 
        

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

    const renderItem = (item,index) =>{
        return <View key={item.id} style={{flexDirection:'row', alignItems:'center',marginBottom:17,width:'100%'}}>
        <Icon type='material-icons' name='local-hospital' size={36} color='#009346'  />
        <View style={{marginLeft:24}}>
            <Text type='bold' style={{fontSize:17}}>{item.name}</Text>
            <Text>{item.adress}</Text>
        </View>
        { item.phone!=null && 
        (<View style={{marginLeft:24}}>
            <Text>{item.phone}</Text>
            <Icon type='material-icons' onPress={()=>Linking.openURL(`tel:${item.phone}`)} name='phone'  style={{marginLeft:12}} size={30} color={'#f6d147'}  />
        </View>)}
    </View>
    }

    return (
        <Container>
             { !saving ? (
            <Content style={[global.container,global.paddingContainer]}>
            { data != null && (
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:15,width:'100%'}}>
                        <Image source={{uri:data.current.weather_icons[0]}} style={{width:30,height:30}}   width={30} height={30} />
                        <View style={{marginLeft:24}}>
                            <Text type='bold' style={{fontSize:17}}>{data.location.country+' - '+data.location.name} </Text>
                        </View>
                        <Text type='bold' style={{color:'#f6d147',marginLeft:12,position:'absolute',right:0,fontSize:26}}>{data.current.temperature } °</Text>
                    </View>
                )}

                <View
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: 1,
                    }}
                  />

                {  pharmacies.length > 0 && 
                    <FlatList 
                    style={{marginTop:20}}
                     data={pharmacies}
                     renderItem={({item}) => renderItem(item)}
                     keyExtractor={(item, index) => index.toString()}
                    />
                }
            </Content>
             ):(<ActivityIndicator
                style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
                color="#f6d147"
                size={50}
              />)}
        </Container>
        
    );
}



