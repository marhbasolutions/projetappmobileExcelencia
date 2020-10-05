import React from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item } from 'native-base';
import { Button } from 'react-native-elements';

import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';

export default function LoginScreen({ navigation }) {

    return (
        <KeyboardAvoidingView style={[global.container,global.bgColorBlue,global.paddingContainer,styles.containerLogin]}>
                        <TouchableWithoutFeedback style={[global.container,styles.containerLogin]}  onPress={Keyboard.dismiss}>
                            <View style={[global.container,styles.containerLogin]}>

                                <Image source={require('../../assets/logo.png')} style={[global.img,styles.loginLogo]} />

                                <Text type='bold' style={[global.h2,styles.headelogoin]}>S'authentifier</Text>

                                <View style={[styles.formLogin]}>

                                <Item rounded  style={[styles.inputContainer]} >
                                    <Input placeholder='Adresse email' style={[styles.inputLogin]} />
                                </Item>

                                <Item rounded  style={[styles.inputContainer]} >
                                    <Input secureTextEntry={true} placeholder='Mot de passe' style={[styles.inputLogin,{fontFamily:"Raleway-Light"}]} />
                                </Item>

                                <Button
                                    onPress={()=>navigation.navigate('Home')}
                                    buttonStyle={[styles.loginButton]}
                                    containerStyle={[styles.loginContainerButton]}
                                    title="Se connecter" 
                                    titleStyle={[styles.titlelogin]}
                                />

                                <Button
                                onPress={()=>navigation.navigate('Home')}
                                buttonStyle={[styles.loginButton,styles.signUp]}
                                containerStyle={[styles.loginContainerButton]}
                                title="Inscrivez-vous ici"
                                titleStyle={[styles.titlesignup]}  />

                                <TouchableOpacity onPress={()=>alert('Oui')}>
                                            <Text type="light" style={[styles.forgotenPassword]}>Mot de passe oublié ?</Text>
                                </TouchableOpacity>

                                </View>

                                <Text style={[styles.copyright]}>Excelencia Assurances © 2020 Tous les droits réservés</Text>
                            </View>
                        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}



