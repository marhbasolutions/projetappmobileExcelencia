import React, {useState,useEffect} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';

import {useTheme} from 'react-native-paper';
import {forgotPassword} from '../utils/authUser';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  // errors
  const [emailError, setEmailError] = useState(false);

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {colors} = useTheme();

  const handleEmailError = e => {
    if (!re.test(String(e).toLowerCase()) || e === '') setEmailError(true);
    else setEmailError(false);
  };

  const handleForgotPassword = () => {
    if (!re.test(String(email).toLowerCase()) || email === '') {
      setEmailError(true);
      return;
    }

    setLoading(true);

    forgotPassword({email},token).then(res => {
      setLoading(false);
      if (res.success) {
        Alert.alert('', res.message, [
          {text: 'Ok', onPress: () => navigation.navigate('SignInScreen')},
        ]);
      } else {
        Alert.alert('', res.message, [{text: 'Ok'}]);
      }
    });
  };

  useEffect(() => {
    AsyncStorage.getItem('USER_TOKEN').then(token => {
      setToken(token);
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#242c62" barStyle="light-content" />
        <View style={styles.header}>
        <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
          <View>
            <Text style={styles.text_header}>Mot de passe oublié</Text>
          </View>

          <View>
            <View style={styles.action}>
              <TextInput
                placeholder="Adresse email"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => setEmail(val)}
                onEndEditing={e => handleEmailError(e.nativeEvent.text)}
              />
              {re.test(String(email).toLowerCase()) && (
                <Animatable.View
                  animation="bounceIn"
                  style={{position: 'absolute', right: 12, top: 12}}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              )}
            </View>
            {emailError && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Adresse e-mail invalide.</Text>
              </Animatable.View>
            )}

            {loading ? (
              <ActivityIndicator
                style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
                color="#f6d147"
                size={30}
              />
            ) : (
              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.signIn}
                  onPress={handleForgotPassword}>
                  <LinearGradient
                    colors={['#f9db4d', '#f9db4d']}
                    style={styles.signIn}>
                    <Text
                      style={[
                        styles.textSign,
                        {
                          color: '#fff',
                        },
                      ]}>
                      Réinitialiser mon mot de passe
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
                marginTop: 15,
                textAlign: 'center',
              }}>
              Excelencia Assurances © 2020. Tous droits Réservé
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242c62',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    // width: "100%",
    paddingHorizontal: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    marginBottom: 15,
    marginLeft: 10,
  },
  button: {
    alignItems: 'center',
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textSign: {
    fontSize: 14,
  },
  logo: {
    alignSelf: 'center',
    width:300
  },
});
