import React , { useState,useEffect } from 'react';
import {  Text,View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, ToastAndroid,TouchableOpacity , TextInput , ActivityIndicator,  ScrollView, Alert} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, List, ListItem,  Input, Item,Button } from 'native-base';
import { Picker } from '@react-native-community/picker';
import styles from '../styles';
import CalendarPicker from 'react-native-calendar-picker';
import Dialog, { DialogFooter, DialogButton, DialogContent,DialogTitle } from 'react-native-popup-dialog';
import { API_CREATE_PAYEMENT_RDV } from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";
import Notification from '../../NotificationsManager/local/Notification';
const RdvScreen = ({route,navigation}) => {

    const [description, setDescriptiond] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [saving, setsaving] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');
    const [type, setType] = useState(route.params != null  && route.params.type != null ? route.params.type:'')

    const onDateChange = (date)  => {
        setSelectedDate(new Date(date));
      }

    useEffect(() => {
        AsyncStorage.getItem('USER_ID').then((user)=>{
                setUser(user);
            });

            AsyncStorage.getItem('USER_TOKEN').then(token => {
                setToken(token);
              });
   
    }, []);


    const recapRdv = () =>{
        //navigation.navigate('MesRDV');
          setVisibleModal(true);
    }

    const sendRdv = () => {
        
      setVisibleModal(false)
      setsaving(true);

      var dataToSend = { date:selectedDate.toLocaleDateString('en'),user:user,description:description, type:type};

      fetch(API_CREATE_PAYEMENT_RDV, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
        body: JSON.stringify(dataToSend)
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
                          Notification.pushLocal("test notification",Date.now());
                    }
                    else{
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

    return (
      <Container>
        <Content style={{padding:8}} >
            <ScrollView style={{flex:1,paddingBottom:30}} >

                    { saving ? (
                      <ActivityIndicator size="large" color='#f6b932' />
                    ):(
                        <View style={[{width:'100%'}]}>

                        <Text style={styles.label}  >Date d'aller a l'agence  </Text>

                        <View style={{marginTop:10}} >
                            <CalendarPicker
                                initialDate={selectedDate}
                                startFromMonday={true}
                                todayBackgroundColor="#fff"
                                todayTextStyle={{
                                    color:'black'
                                }}
                                minDate={new Date()}
                                selectedDayColor="#f6d147"
                                selectedDayTextColor="#fff"
                                onDateChange={onDateChange}
                                weekdays={['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']}
                                months={['Janvier', 'Février', 'Mars', 'Avril', 'Juin', 'Juillet', 'Août', 'Septembre', 'Novembre', 'Octobre', 'Novembre', 'Décembre']}
                                previousTitle="Précédent"
                                nextTitle="Suivant"
                                />
                            </View>

                        <Text style={[styles.label,{marginTop:10}]} > Commentaire   </Text>

                        <TextInput
                            style={{borderWidth:1,marginTop:10,borderRadius:10}}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => setDescriptiond(text)}
                            value={description.toString()}/>

                        <Button transparent onPress={()=>recapRdv()} style={[styles.button]}>
                            <Text style={{color:'#fff'}}>Valider le rendez-vous de paiement  </Text>
                        </Button>


                        { hasRdv && (
                            <Button transparent onPress={()=> navigation.navigate('MesRDV')} style={[styles.button,{backgroundColor:'#f6d147'}]}>
                            <Text style={{color:'#242c62'}}> Voir mes rendez-vous de paiement  </Text>
                            </Button>
                        )}
                       

                    
                    </View>
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
                                <Text style={{marginTop:6}}>Objet : { description != '' ? description:'Non specifié' }</Text>
                            </DialogContent>
                        </Dialog>

                    </ScrollView>
               </Content>
               <FlashMessage position="top" /> 
        </Container>
    );
};

export default RdvScreen;
