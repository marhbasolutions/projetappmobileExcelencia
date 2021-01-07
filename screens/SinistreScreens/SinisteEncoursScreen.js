import React , { useState,useEffect } from 'react';
import {  Text,View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, ToastAndroid,TouchableOpacity , TextInput , ActivityIndicator,  ScrollView, Alert, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Icon as IconT } from 'react-native-elements'
import { Button } from 'native-base';
import styles from '../styles';
import { API_GET_MY_SINISTRES } from '../api/config';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-community/async-storage';

const SinisteEncoursScreen = ({route,navigation}) => {

    const [saving, setsaving] = useState(false);
    const [sinistres, setSinistres] = useState([]);
    const [contractNumber, setContractNumber] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
      setsaving(true);
    
    setContractNumber(route.params!= null && route.params.contract != null ? route.params.contract:'');

    if(contractNumber != '')
      getSinistres(contractNumber)

      AsyncStorage.getItem('USER_TOKEN').then(token => {
        setToken(token);
      });

    setsaving(false);

    }, []);

    const getSinistres = () => {

      setsaving(true);

      fetch(API_GET_MY_SINISTRES+'?contrat='+contractNumber, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
          }
        })
        .then((response) => response.json())
              .then((json) => {
                console.log('sisni',json);
                  setsaving(false);
                    if(json.success)
                    {
                      setSinistres(json.data);
                    }
                    
          })
          .catch((error) => {
                    console.error(error);
          });
    }

    const renderItem = (item,index) =>
    {
      let icon = <IconT type='material-community' name='car-multiple' color='#f6d147' size={26} /> 
      if(String(item.type).toLowerCase() == 'vol'){
        icon = <IconT type='font-awesome' name='user-secret' color='#f6d147' size={26} /> 
        }
      else if(String(item.type).toLowerCase() == 'bris de glace'){
        icon = <IconT type='material-community' name='car-multiple' color='#f6d147' size={26} /> 
      }
      else
      {
        icon = <IconT type='material-community' name='fire-extinguisher' color='#f6d147' size={26} /> 
      }
      
        return ( 
            <TouchableOpacity key={index}  style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15,paddingLeft:12}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    { icon }
                    <Text style={{fontSize:17,marginLeft:12}} > { new Date(item.declaration_date.timestamp).toLocaleDateString('fr') }</Text>
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
               sinistres.length == 0 ? (
                 <View flex={1} paddingHorizontal={12}>
                 <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{textAlign:'center'}}>Pas de sinistre en cours ...</Text>
                  </View>
                <Button transparent onPress={()=>navigation.navigate('SinistreDeclaration')} style={[styles.button,{backgroundColor:'#f6d147',marginBottom:8}]}>
                    <Text style={{color:'#242c62'}}> Nouvelle declaration </Text>
                    </Button>
                  </View>
                ):(
              <View flex={1}>
                 <FlatList 
                 data={sinistres}
                 renderItem={({item}) => renderItem(item)}
                 keyExtractor={(item, index) => index.toString()}
                />
                 <Button transparent onPress={()=>navigation.navigate('SinistreDeclaration')} style={[styles.button,{backgroundColor:'#f6d147',marginBottom:8}]}>
                    <Text style={{color:'#242c62'}}> Nouvelle declaration </Text>
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

export default SinisteEncoursScreen;
