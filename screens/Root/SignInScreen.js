import React, {useState} from 'react';
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

import {useTheme} from 'react-native-paper';
import {AuthContext} from '../../components/context';
import {login} from '../utils/authUser';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  // errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const {signIn} = React.useContext(AuthContext);

  const {colors} = useTheme();

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const loginHandle = () => {
    if (!re.test(String(email).toLowerCase()) || email === '') {
      setEmailError(true);
      return;
    }

    if (password.length < 6) {
      setPasswordError(true);
      return;
    }

    setLoading(true);

    login({email, password}).then(async response => {
      setLoading(false);
      if (response.success) {
        try {
          signIn(response.user);
        } catch (err) {
          console.log(err);
        }
      } else {
        Alert.alert('', response.message, [{text: 'Ok'}]);
      }
    });
  };

  const handleEmailError = e => {
    if (!re.test(String(e).toLowerCase()) || e === '') setEmailError(true);
    else setEmailError(false);
  };

  const handlePasswordError = e => {
    if (e.length < 5) setPasswordError(true);
    else setPasswordError(false);
  };

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
            <Text style={styles.text_header}>S'authentifier</Text>
          </View>

          <View>
            <View style={styles.action}>
              <TextInput
                placeholder="Adresse email"
                keyboardType="email-address"
                placeholderTextColor="#666666"
                autoCompleteType='off'
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
            <View style={styles.action}>
              <TextInput
                placeholder="Mot de passe"
                placeholderTextColor="#666666"
                secureTextEntry={showPassword}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => setPassword(val)}
                onEndEditing={e => handlePasswordError(e.nativeEvent.text)}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{position: 'absolute', right: 12, top: 12}}>
                {showPassword ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {passwordError && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Le mot de passe doit comporter au moins 6 caractères.
                </Text>
              </Animatable.View>
            )}

            <View style={styles.button}>
              {loading ? (
                <ActivityIndicator
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    flex: 1,
                  }}
                  color="#f6d147"
                  size={30}
                />
              ) : (
                <TouchableOpacity
                  style={styles.signIn}
                  onPress={() => loginHandle()}>
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
                      Se connecter
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}
                style={[
                  styles.signIn,
                  {
                    borderColor: '#f9db4d',
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Inscrivez-vous ici
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
                opacity: 0.6,
                textAlign: 'center',
              }}>
              Mot de passe oublié?
            </Text>
          </TouchableOpacity>

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

export default SignInScreen;

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
