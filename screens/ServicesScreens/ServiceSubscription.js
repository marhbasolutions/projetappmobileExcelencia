import React , { useState,useEffect } from 'react';
import {  Text,View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, ToastAndroid,TouchableOpacity , TextInput , ActivityIndicator,  ScrollView, Alert} from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item,Button } from 'native-base';
import { Picker } from '@react-native-community/picker';
import styles from '../styles';
import { API_SUBSCRIBE } from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";

const ServiceSubscriptionScreen = ({route,navigation}) => {

    const [service,setService] = useState(route.params != null && route.params.service != null ? route.params.service:null )
    const [firstName, setFirstName] = useState('');
    const [lasttName, setLastName] = useState('');
    const [comment, setComment] = useState('');
    const [duration, setDuration] = useState('1');
    const [saving, setsaving] = useState(false);
    const [user, setUser] = useState(null);
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfession] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('USER_ID').then((user)=>{
                setUser(user);
            });

            AsyncStorage.getItem('USER_TOKEN').then(token => {
                setToken(token);
              });
          
    }, []);


    const sendSubscription = () => {

      setsaving(true);

      var dataToSend = { email,profession,tel,firstName,lasttName,user,comment,duration,service:service.id};

      fetch(API_SUBSCRIBE, {
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
                      <ActivityIndicator
                      style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
                      color="#f6d147"
                      size={50}
                    />
                    ):(
                        <View style={[{width:'100%'}]}>

                        <View style={{marginTop:10}} >
                            <Text style={styles.label}  > Nom </Text>
                            <TextInput
                                style={{borderWidth:1,borderRadius:10}}
                                onChangeText={(text) => setFirstName(text)}
                                value={firstName.toString()}/>
                        </View>

                        <View style={{marginTop:10}} >
                        <Text style={styles.label}  > Prenom </Text>
                        <TextInput
                            style={{borderWidth:1,borderRadius:10}}
                            onChangeText={(text) => setLastName(text)}
                            value={lasttName.toString()}/>
                        </View>

                        <View style={{marginTop:10}} >
                        <Text style={styles.label}  > Email </Text>
                        <TextInput
                            keyboardType='email-address'
                            style={{borderWidth:1,borderRadius:10}}
                            onChangeText={(text) => setEmail(text)}
                            value={email.toString()}/>
                        </View>

                        <View style={{marginTop:10}} >
                        <Text style={styles.label}  > Téléphone </Text>
                        <TextInput
                        keyboardType='phone-pad'
                            style={{borderWidth:1,borderRadius:10}}
                            onChangeText={(text) => setTel(text)}
                            value={tel.toString()}/>
                        </View>

                        <View style={{marginTop:10}} >
                        <Text style={styles.label}  > Profession </Text>
                        <TextInput
                            style={{borderWidth:1,borderRadius:10}}
                            onChangeText={(text) => setProfession(text)}
                            value={profession.toString()}/>
                        </View>

                        <Text style={[styles.label,{marginTop:10}]} > Duree d'abonnement  </Text>

                        <View style={{borderWidth:1,marginTop:10,borderRadius:30}}>
                            <Picker
                                note
                                style={{ width: '100%' }}
                                selectedValue={duration}
                                onValueChange={(itemValue, itemIndex) => {
                                    setDuration(itemValue);
                                  }}
                                itemStyle={{width:'100%'}}
                            >
                                <Picker.Item label="1 an" value="1" />
                                <Picker.Item label="2 ans" value="2" />
                                <Picker.Item label="3 ans" value="3" />
                                <Picker.Item label="4 ans" value="4" />
                                <Picker.Item label="5 ans" value="5" />
                                <Picker.Item label="6 ans" value="6" />
                                <Picker.Item label="7 ans" value="7" />
                                <Picker.Item label="8 ans" value="8" />
                                <Picker.Item label="9 ans" value="9" />
                                <Picker.Item label="10 ans" value="10" />
                            </Picker>
                        </View>

                        <Text style={[styles.label,{marginTop:10}]} > Commentaire   </Text>

                        <TextInput
                            style={{borderWidth:1,marginTop:10,borderRadius:10}}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => setComment(text)}
                            value={comment.toString()}/>

                        <Button transparent onPress={()=> sendSubscription()} style={[styles.button]}>
                            <Text style={{color:'#fff'}}> Valider </Text>
                        </Button>
                    </View>
                    )}
                    </ScrollView>
               </Content>
               <FlashMessage position="top" /> 
        </Container>
    );
};

export default ServiceSubscriptionScreen;
