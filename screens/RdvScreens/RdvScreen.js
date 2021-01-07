import React , { useState,useEffect } from 'react';
import {  Text,View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, ToastAndroid,TouchableOpacity , TextInput , ActivityIndicator,  ScrollView, Alert} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, List, ListItem,  Input, Item,Button } from 'native-base';
import { Picker } from '@react-native-community/picker';
import styles from '../styles';
import CalendarPicker from 'react-native-calendar-picker';
import Dialog, { DialogFooter, DialogButton, DialogContent,DialogTitle } from 'react-native-popup-dialog';
import { API_CREATE_RDV } from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";
import { round } from 'react-native-reanimated';

const RdvScreen = ({route,navigation}) => {

    const [period, setPeriod] = useState('8 h 00 min – 9 h 00 min');
    const [description, setDescriptiond] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [saving, setsaving] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [user, setUser] = useState(null);
    const [hasRdv, setHasRdv] = useState(false);
    const [token, setToken] = useState('');

    const onDateChange = (date)  => {
        setSelectedDate(new Date(date));
      }

    useEffect(() => {

      

        AsyncStorage.getItem('USER_ID').then((user)=>{
                setUser(user);
            });

        AsyncStorage.getItem('USER_HAS_RDV').then((val)=>{
            setHasRdv(val);
            });

            AsyncStorage.getItem('USER_TOKEN').then(token => {
                setToken(token);
              });
   
    }, []);

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const recapRdv = () =>{
        //navigation.navigate('MesRDV');
          setVisibleModal(true);
    }

    const sendRdv = () => {
        
      setVisibleModal(false)
      setsaving(true);

      var dataToSend = { period: period,date:selectedDate.toLocaleDateString('en'),user:user,description:description};

      fetch(API_CREATE_RDV, {
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
                          
                          AsyncStorage.setItem('USER_HAS_RDV', JSON.stringify(true)).then(()=>{
                            setHasRdv(true);
                          });
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

                        <Text style={styles.label}  >Date de rendez-vous </Text>

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
                        

                        <Text style={[styles.label,{marginTop:10}]} > Periode du rendez-vous  </Text>

                        <View style={{borderWidth:1,marginTop:10,borderRadius:30}}>
                            <Picker
                                note
                                style={{ width: '100%' }}
                                selectedValue={period}
                                onValueChange={(itemValue, itemIndex) => {
                                    setPeriod(itemValue);
                                  }}
                                itemStyle={{width:'100%'}}
                            >
                                <Picker.Item label="8 h 00 min – 9 h 00 min" value="8 h 00 min – 9 h 00 min" />
                                <Picker.Item label="9 h 00 min – 10 h 00 min" value="9 h 00 min – 10 h 00 min" />
                                <Picker.Item label="10 h 00 min – 11 h 00 min" value="10 h 00 min – 11 h 00 min" />
                                <Picker.Item label="11 h 00 min – 12 h 00 min" value="11 h 00 min – 12 h 00 min" />
                                <Picker.Item label="12 h 00 min – 13 h 00 min" value="12 h 00 min – 13 h 00 min" />
                                <Picker.Item label="13 h 00 min – 14 h 00 min" value="13 h 00 min – 14 h 00 min" />
                                <Picker.Item label="14 h 00 min – 15 h 00 min" value="14 h 00 min – 15 h 00 min" />
                                <Picker.Item label="15 h 00 min – 16 h 00 min" value="15 h 00 min – 16 h 00 min" />
                                <Picker.Item label="16 h 00 min – 17 h 00 min" value="16 h 00 min – 17 h 00 min" />
                                <Picker.Item label="17 h 00 min – 18 h 00 min" value="17 h 00 min – 18 h 00 min" />
                            </Picker>
                        </View>

                        <Text style={[styles.label,{marginTop:10}]} > Commentaire   </Text>

                        <TextInput
                            style={{borderWidth:1,marginTop:10,borderRadius:10}}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => setDescriptiond(text)}
                            value={description.toString()}/>

                        <Button transparent onPress={()=>recapRdv()} style={[styles.button]}>
                            <Text style={{color:'#fff'}}>Valider le rendez-vous </Text>
                        </Button>


                        { hasRdv && (
                            <Button transparent onPress={()=> navigation.navigate('MesRDV')} style={[styles.button,{backgroundColor:'#f6d147'}]}>
                            <Text style={{color:'#242c62'}}> Voir mes rendez-vous </Text>
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
                                <Text style={{marginTop:6}}>Periode : { period }</Text>
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
