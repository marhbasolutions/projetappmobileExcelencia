import React , { useState,useEffect } from 'react';
import {  Text,View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, ToastAndroid,TouchableOpacity , TextInput , ActivityIndicator,  ScrollView, Alert, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'native-base';
import styles from '../styles';
import Dialog, { DialogFooter, DialogButton, DialogContent,DialogTitle } from 'react-native-popup-dialog';
import { API_GET_MY_COTISATIONS } from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";

const CotisationsTerminesScreen = ({navigation}) => {

    const [saving, setsaving] = useState(false);
    const [cotisations, setCotisations] = useState([]);
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
        getCotisations(user);
      });

    }, []);

    const getCotisations = (user) => {

      setsaving(true);

      fetch(API_GET_MY_COTISATIONS+'?user='+user, {
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
                      setCotisations(json.data);
                    }
          })
          .catch((error) => {
                    console.error(error);
          });
    }

    const renderItem = (item,index) =>
    {
      let datepaiement = new Date(item.date_paiement.timestamp * 1000);
        return ( 
            <TouchableOpacity key={index}  style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15,paddingLeft:12}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='checkmark-circle-outline'  color='#f6d147' size={26} />
                    <Text style={{fontSize:17,marginLeft:12}} >{ datepaiement.getDate()+'-'+(datepaiement.getMonth()+1)+'-'+datepaiement.getFullYear()}</Text>
                    </View>

                    <Icon.Button
                            name="md-close-circle-outline"
                            size={28}
                            backgroundColor={'#fff'}
                            color={'#f6d147'}
                          />
                    
              </TouchableOpacity>);
    }

    return (

          <View style={{flex:1,backgroundColor:'#fff'}}>
            { !saving ? (
               cotisations.length == 0 ? (
                 <View flex={1} paddingHorizontal={12}>
                 <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{textAlign:'center'}}>Pas de cotisations ...</Text>
                  </View>
                    <Button transparent onPress={()=>navigation.navigate('Rdv')} style={[styles.button,{backgroundColor:'#f6d147'}]}>
                      <Text style={{color:'#242c62'}}> Payez mes cotisations </Text>
                    </Button>
                  </View>
                ):(
              <View flex={1}>
                 <FlatList 
                 data={cotisations}
                 renderItem={({item}) => renderItem(item)}
                 keyExtractor={(item, index) => index.toString()}
                />
                 <Button transparent onPress={()=>navigation.navigate('Cotisations')} style={[styles.button,{backgroundColor:'#f6d147'}]}>
                    <Text style={{color:'#242c62'}}> Payez mes cotisations </Text>
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
            <FlashMessage position="top" /> 
          </View>
            
       
    );
};

export default CotisationsTerminesScreen;
