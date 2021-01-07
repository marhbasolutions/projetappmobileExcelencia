import React , { useState,useEffect } from 'react';
import {  Text,View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, ToastAndroid,TouchableOpacity , TextInput , ActivityIndicator,  ScrollView, Alert, FlatList} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, List, ListItem,  Input, Item,Button } from 'native-base';
import { Picker } from '@react-native-community/picker';
import styles from '../styles';
import CalendarPicker from 'react-native-calendar-picker';
import Dialog, { DialogFooter, DialogButton, DialogContent,DialogTitle } from 'react-native-popup-dialog';
import { API_GET_MY_PAYEMENT_RDV,  API_CLOSE_RDV } from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";

const RdvEnCoursScreen = ({navigation}) => {

    const [saving, setsaving] = useState(false);
    const [type, setType] = useState();
    const [rdvs, setRdvs] = useState([]);
    const [user, setUser] = useState(null);
    const [visibleModal, setVisibleModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
      setsaving(true);

      AsyncStorage.getItem('USER_ID').then((user)=>{
        setUser(user)
        if(user != null )
          getRdvs(user);
      });

      AsyncStorage.getItem('USER_TOKEN').then(token => {
        setToken(token);
      });
   
    }, []);

    const showInfoRdv =  (e) =>{
      setsaving(true);

      let rdv = rdvs.filter((item)=> String(item.type_payement).trim()==String(e.type_payement).trim() && parseInt(item.payement_date.timestamp) == parseInt(e.payement_date.timestamp) );
    
      if(rdv.length>0)
     {
       setSelectedDate(new Date(e.payement_date.timestamp * 1000));
       setType(e.type_payement);
       setDescription(e.help_description);
       setVisibleModal(true);
     }
      else{
        alert('Error.Ressayez.');
      }
      setsaving(false);
    }

   

    const getRdvs = (user) => {

      setsaving(true);

      fetch(API_GET_MY_PAYEMENT_RDV+'?user='+user, {
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
                      setRdvs(json.data);
                    }
          })
          .catch((error) => {
                    console.error(error);
          });
    }

    const closeRdv = (id) =>{
      setsaving(true);
      fetch(API_CLOSE_RDV, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
          },
          body:JSON.stringify({
            id:id
          })
        })
        .then((response) => response.json())
              .then((json) => {
                  setsaving(false);
                 
                  if(json.success)
                    {
                      showMessage({
                        message: json.message,
                        type: "success",
                      });
                    } 
                    else
                    {
                      showMessage({
                        message: json.message,
                        type: "danger",
                      });
                    }
          })
          .catch((error) => {
                    console.error(error);
          });
    }

    const renderItem = (item,index) =>
    {
      let date = new Date(item.payement_date.timestamp * 1000);
        return ( 
            <TouchableOpacity key={index} onPress={ ()=> showInfoRdv(item)} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15,paddingLeft:12}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='md-calendar'  color='#f6d147' size={26} />
                    <Text style={{fontSize:17,marginLeft:12}} >{ date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()}</Text>
                    <Text style={{fontSize:15,marginLeft:12}} > Type de paiement : { item.type_payement }</Text>
                    </View>

                    <Icon.Button
                            name="md-close-circle-outline"
                            size={28}
                            backgroundColor={'#fff'}
                            color={'#f6d147'}
                            onPress={()=>closeRdv()}
                          />
                    
              </TouchableOpacity>);
    }

    return (

          <View style={{flex:1,backgroundColor:'#fff'}}>
            { !saving ? (
               rdvs.length == 0 ? (
                 <View flex={1} paddingHorizontal={12}>
                 <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{textAlign:'center'}}>Pas de rendez-vous en cours ...</Text>
                  </View>
                  <Button transparent onPress={()=>navigation.navigate('Cotisations')} style={[styles.button,{backgroundColor:'#f6d147'}]}>
                      <Text style={{color:'#242c62'}}> Retour </Text>
                  </Button>
                  </View>
                ):(
              <View flex={1}>
                 <FlatList 
                 data={rdvs}
                 renderItem={({item}) => renderItem(item)}
                 keyExtractor={(item, index) => index.toString()}
                />
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
            <Dialog
                            width={'80%'}
                            visible={visibleModal}
                            dialogTitle={<DialogTitle title="Récapitulatif de rendez-vous" />}
                            
                            footer={
                            <DialogFooter >
                                <DialogButton
                                text="Fermer"
                                onPress={() => setVisibleModal(false)}
                                />
                            </DialogFooter>
                            }
                        >
                            <DialogContent style={{padding:10}}>
                                <Text style={{marginTop:6}}>Rdv le : { selectedDate.toLocaleDateString() }</Text>
                                <Text style={{marginTop:6}}>Type de paiement  : { type }</Text>
                                <Text style={{marginTop:6}}>Objet : { description != null && description != '' ? description:'Non specifié' }</Text>
                            </DialogContent>
                        </Dialog>
          </View>
            
       
    );
};

export default RdvEnCoursScreen;
