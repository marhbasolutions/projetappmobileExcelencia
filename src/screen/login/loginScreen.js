import React, { Component } from "react";

import styles from "./style";
import { Keyboard, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Input, Item, } from 'native-base';
import { Button } from 'react-native-elements';

const appId = "1047121222092614"

// export default class LoginScreen extends Component {
  export default function LoginScreen({ navigation }) {


  // render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>

              <Image source={require('../../assets/logo.png')}
                style={{ width: 260, height: 140, alignSelf: 'center', resizeMode: 'cover', marginTop: '20%' }}>

              </Image>

              <Text style={{ fontSize: 29, fontWeight: 'bold', color: '#fff', alignContent: 'center', textAlign: 'center', marginBottom: '15%' }}>LOG IN</Text>
              {/* <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} /> */}

              <Item rounded style={styles.loginFormTextInput} >
                <Input placeholder='Username' />
              </Item>

              <Item rounded style={styles.loginFormTextInput} >
                <Input placeholder='Password' secureTextEntry={true} />
              </Item>

              {/* <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} /> */}
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => navigation.navigate('Home')}
                title="Login"
              />
              <TouchableOpacity>
                <Text style={{ fontSize: 14, color: '#ddd', alignContent: 'center', textAlign: 'center',marginTop:15 }}>Forget Password ?</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{ fontSize: 20,fontWeight:'bold', color: '#fff', alignContent: 'center', textAlign: 'center',marginTop:35 }}>Register here</Text>
              </TouchableOpacity>




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