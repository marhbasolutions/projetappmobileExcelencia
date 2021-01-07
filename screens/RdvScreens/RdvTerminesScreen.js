import React , { useState,useEffect } from 'react';
import {  Text,View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, ToastAndroid,TouchableOpacity , TextInput , ActivityIndicator,  ScrollView, Alert, FlatList} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, List, ListItem,  Input, Item,Button } from 'native-base';
import { Picker } from '@react-native-community/picker';
import styles from '../styles';
import CalendarPicker from 'react-native-calendar-picker';
import Dialog, { DialogFooter, DialogButton, DialogContent,DialogTitle } from 'react-native-popup-dialog';
import { API_GET_MY_RDV,  API_CLOSE_RDV } from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";

const RdvTerminesScreen = ({navigation}) => {

    const [saving, setsaving] = useState(false);
    const [period, setPeriod] = useState('8 h 00 min – 9 h 00 min');
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

      AsyncStorage.getItem('USER_HAS_RDV').then((has)=>{
        if(has && rdvs.length > 0 )
        {
           AsyncStorage.setItem('USER_RDVS',JSON.stringify(rdvs));
        }
      });

      AsyncStorage.getItem('USER_TOKEN').then(token => {
        setToken(token);
      });
   
    }, []);

    const showInfoRdv =  (e) =>{
      setsaving(true);

       let rdv = rdvs.filter((item)=> String(item.period).trim()==String(e.period).trim() && parseInt(item.appointement_date.timestamp) == parseInt(e.appointement_date.timestamp) );
    
       if(rdv.length>0)
      {
        console.log(e);
        setSelectedDate(new Date(e.appointement_date.timestamp * 1000));
        setPeriod(e.period);
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

      fetch(API_GET_MY_RDV+'?user='+user+'&done=1', {
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
                        message: 'sdsdd',
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
      let date = new Date(item.appointement_date.timestamp * 1000);
        return ( 
            <TouchableOpacity key={index} onPress={ ()=> showInfoRdv(item)} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15,paddingLeft:12}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='md-calendar'  color='#f6d147' size={26} />
                    <Text style={{fontSize:17,marginLeft:12}} >{ date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()}</Text>
                    </View>

                    <Icon.Button
                            name="md-trash"
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
                    <Text style={{textAlign:'center'}}>Pas de rendez-vous ...</Text>
                  </View>
                <Button transparent onPress={()=>navigation.navigate('Rdv')} style={[styles.button,{backgroundColor:'#f6d147'}]}>
                    <Text style={{color:'#242c62'}}> Nouveau Rendez-vous </Text>
                    </Button>
                  </View>
                ):(
              <View flex={1}>
                 <FlatList 
                keyExtractor={(item, index) => index.toString()}
                 data={rdvs}
                 renderItem={({item}) => renderItem(item)}
                
                />
                 <Button transparent onPress={()=>navigation.navigate('Rdv')} style={[styles.button,{backgroundColor:'#f6d147'}]}>
                    <Text style={{color:'#242c62'}}> Nouveau Rendez-vous </Text>
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
            
            <Dialog
                  width={'80%'}
                  visible={visibleModal}
                  dialogTitle={<DialogTitle title="Récapitulatif de rendez-vous" />}
                  
                  footer={
                  <DialogFooter >
                      <DialogButton
                      text="Annuler"
                      onPress={() => setVisibleModal(false)}
                      />
                      <DialogButton
                      text="Je confirme"
                      onPress={() => sendRdv() }
                      />
                  </DialogFooter>
                  }
              >
              <DialogContent style={{padding:10}}>
                  <Text style={{marginTop:6}}>Rdv le : { selectedDate.toLocaleDateString() }</Text>
                  <Text style={{marginTop:6}}>Periode : { period }</Text>
                  <Text style={{marginTop:6}}>Objet : { description != null && description != '' ? description:'Non specifié' }</Text>
              </DialogContent>
          </Dialog>
           <FlashMessage  position="center" floating={true} /> 
          </View>
            
       
    );
};

export default RdvTerminesScreen;
