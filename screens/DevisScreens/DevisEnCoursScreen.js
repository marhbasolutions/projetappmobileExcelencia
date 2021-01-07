import React, { useState,useEffect} from 'react';
import {  ActivityIndicator,View ,Image, Text,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity,StatusBar  } from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item } from 'native-base';
import { API_GET_MY_DEVIS } from '../api/config';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export default function DevisEnCoursScreen({ navigation }) {

    const [saving, setsaving] = useState(false);
    const [devis, setDevis] = useState([]);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');

    useEffect(() => {
        setsaving(true);
  
        AsyncStorage.getItem('USER_TOKEN').then(token => {
          setToken(token);
        });
    
  
        AsyncStorage.getItem('USER_ID').then((user)=>{
          setUser(user)
          if(user != null )
          getDevis(user);

          
        });
  
      }, []);


      const getDevis = (user) => {

        setsaving(true);
  
        fetch(API_GET_MY_DEVIS+'?user='+user, {
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
                        setDevis(json.data);
                      }
            })
            .catch((error) => {
                      console.error(error);
            });
      }

    const renderItem = (item,index) =>
    {
      let daterdv = new Date(item.quote_date.timestamp * 1000);
        return ( 
            <TouchableOpacity key={index}  style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15,paddingLeft:12}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='ios-clipboard-sharp'  color='#f6d147' size={26} />
                    <Text style={{fontSize:17,marginLeft:12}} >{ daterdv.getDate()+'-'+(daterdv.getMonth()+1)+'-'+daterdv.getFullYear()}</Text>
                    </View>

                    <Text>
                       { item.quote_type } 
                    </Text>

                    <Text>
                       { item.period } 
                    </Text>

              </TouchableOpacity>);
    }

    return (


            <View style={{flex:1,backgroundColor:'#fff'}}>
            { !saving ? (
            devis.length == 0 ? (
            <View flex={1} paddingHorizontal={12}>
            <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{textAlign:'center'}}>Pas de devis en cous </Text>
            </View>
            <Button transparent onPress={()=>navigation.navigate('Devis')} style={[styles.button,{backgroundColor:'#f6d147'}]}>
                <Text style={{color:'#242c62'}}> Simuler un devis </Text>
            </Button>
            </View>
            ):(
            <View flex={1}>
            <FlatList 
            data={devis}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
            />
            <Button transparent onPress={()=>navigation.navigate('Devis')} style={[styles.button,{backgroundColor:'#f6d147'}]}>
            <Text style={{color:'#242c62'}}> Simuler un devis </Text>
            </Button>
            </View>
            )
            ):(
            <ActivityIndicator
            style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
            color="#f6d147"
            size={50}
            />
            )}

            </View>
        
    );
}



