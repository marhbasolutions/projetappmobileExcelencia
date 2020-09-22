import React, { Component } from "react";

import styles from "./style";
import { Keyboard, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item } from 'native-base';
import { Button } from 'react-native-elements';
import Text from '../../components/CustomText';

const appId = "1047121222092614"

// export default class LoginScreen extends Component {
  export default function LoginScreen({ navigation }) {


  // render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="height">

        <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>

              <Image source={require('../../assets/logo.png')}
                style={{ height:50, width:400, alignSelf: 'center', resizeMode: 'cover', marginTop: '20%' }}>

              </Image>

              <Text type="bold" style={{ fontSize: 20,  color: '#fff', alignContent: 'center', textAlign: 'center', marginBottom: '4%',marginTop:'10%' }}>S'AUTHENTIFIER</Text>
              {/* <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} /> */}

              <Item rounded style={styles.loginFormTextInput} >
                <Input placeholder='Adresse email' style={{fontFamily:"Raleway-Light"}} />
              </Item>

              <Item rounded style={styles.loginFormTextInput} >
                <Input placeholder='Mot de passe' secureTextEntry={true} style={{fontFamily:"Raleway-Light"}}  />
              </Item>

              {/* <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} /> */}
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => navigation.navigate('Home')}
                title="Se connecter" 
                titleStyle={{fontFamily:'Raleway-Medium'}}
              />
              <TouchableOpacity>
                <Text type="light" style={{ fontSize: 14, color: '#ddd', alignContent: 'center', textAlign: 'center',marginTop:15 }}>Mot de passe oublié ?</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text type="bold" style={{ fontSize: 20, color: '#fff', alignContent: 'center', textAlign: 'center',marginTop:35 }}>Inscrivez-vous ici </Text>
              </TouchableOpacity>

              <Text style={{fontSize:11,color:'white',alignSelf:'center',position:'absolute',bottom:12}}>Excelencia Assurances © 2020 Tous les droits réservés</Text>
              
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

//   componentDidMount() {
//   }

//   componentWillUnmount() {
//   }

//   onLoginPress() {

//   }

//   async onFbLoginPress() {
//     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
//       permissions: ['public_profile', 'email'],
//     });
//     if (type === 'success') {
//       const response = await fetch(
//         `https://graph.facebook.com/me?access_token=${token}`);
//       Alert.alert(
//         'Logged in!',
//         `Hi ${(await response.json()).name}!`,
//       );
//     }
//   }
// }