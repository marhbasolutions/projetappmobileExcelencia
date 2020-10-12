import React, { useEffect, useState } from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, ToastAndroid,TouchableOpacity ,Picker, TextInput , ActivityIndicator, AsyncStorage, ScrollView, Alert} from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item,Button } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import Dialog, { DialogFooter, DialogButton, DialogContent,DialogTitle } from 'react-native-popup-dialog';

import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';

import CustomFooter from '../../components/Footer/CustomFooter';
import { API_CREATE_RDV } from '../../api/config';



export default function LoginScreen({ navigation }) {


    const [period, setPeriod] = useState('8 h 00 min – 9 h 00 min');
    const [description, setDescriptiond] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [saving, setsaving] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    let currentuser = null;

    const onDateChange = (date)  => {
        setSelectedDate(new Date(date));
      }




    useEffect(() => {

            AsyncStorage.getItem('currentuser').then((user)=>{
                currentuser=user;
            });
   
    }, []);


    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };

      const recapRdv = () =>{
            setVisibleModal(true);
      }



      const sendRdv = () => {
        setVisibleModal(false)
        setsaving(true);

        var dataToSend = { period: period,date:selectedDate.toLocaleDateString('en'),user:currentuser,description:description};

        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch(API_CREATE_RDV, {
            method: 'POST',
            headers: {
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formBody
          })
          .then((response) => response.json())
                .then((json) => {
                    setsaving(false);
                if(json.message)
                {
                    Alert.alert('Rendez-vous',json.message,[{
                        text:'Ok',
                        style:'cancel'
                    }])
                }
                
            })

            .catch((error) => {
            console.error(error);
            });
      }
    
   

    return (
        <Container>
        <Content style={[global.container,global.paddingContainer]}>
            <ScrollView style={{flex:1,paddingBottom:30}} >

                    { saving ? (
                      <ActivityIndicator size="large" color='#f6b932' style={[global.indicator]} />
                    ):(
                        <View style={[{width:'100%'}]}>

                        <Text style={[global.labelForm]} >Choisissez la date de rendez-vous </Text>

                        <View style={[global.marginTop]}>
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
                        

                        <Text style={[global.marginTop,global.labelForm]}>Remplissez la periode du rendez-vous  </Text>

                        <View style={[styles.hourPeriodContainer,global.marginTop]}>
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
                        <Text style={[global.marginTop,global.labelForm]}> En quoi pouvons-nous vous aider ?  </Text>
                        <View style={[global.marginTop]}>
                        <TextInput
                        style={[styles.descriptionText]}
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={(text) => setDescriptiond({text})}
                        value={description}/>
                        </View>

                        <Button transparent onPress={()=>recapRdv()} style={[styles.validateRdvButton,global.marginTop]}>
                            <Text style={{color:'#fff'}}>Valider le rendez-vous </Text>
                        </Button>
                       
                    
                    </View>
                    )}

                        <Dialog
                            width={'80%'}
                            visible={visibleModal}
                            dialogTitle={<DialogTitle title="Recapitulatif de rendez-vous" />}
                            
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
        
        </Container>
    );
}



