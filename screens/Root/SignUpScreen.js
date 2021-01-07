import React, {useState} from 'react';
import {ActivityIndicator, Alert, ScrollView} from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {useTheme} from 'react-native-paper';
import {AuthContext} from '../../components/context';
import {register} from '../utils/authUser';

const SignInScreen = ({navigation}) => {
  const [firstname, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  // errors
  const [firstnameError, setFirstnameError] = useState(false);
  const [lasttnameError, setLastnameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {signUp} = React.useContext(AuthContext);

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {colors} = useTheme();

  const handleRegister = () => {
    if (lastname.length < 3) {
      setLastnameError(true);
      return;
    }

    if (firstname.length < 3) {
      setFirstnameError(true);
      return;
    }

    if (phone.length < 3) {
      setPhoneError(true);
      return;
    }

    if (!re.test(String(email).toLowerCase()) || email === '') {
      setEmailError(true);
      return;
    }

    if (password.length < 3) {
      setPasswordError(true);
      return;
    }

    setLoading(true);
    register({firstname, lastname, email, phone, password}).then(res => {
      setLoading(false);
      if (res.success) {
        try {
          signUp(res.user);
        } catch (err) {
          console.log(err);
        }
      } else {
        Alert.alert('', res.message, [{text: 'Ok'}]);
      }
    });
  };

  const handleEmailError = e => {
    if (!re.test(String(e).toLowerCase()) || e === '') setEmailError(true);
    else setEmailError(false);
  };

  const handlePasswordError = e => {
    if (e.length < 3) setPasswordError(true);
    else setPasswordError(false);
  };

  const handleFirstnameError = e => {
    if (e.length < 3) setFirstnameError(true);
    else setFirstnameError(false);
  };

  const handleLastameError = e => {
    if (e.length < 3) setLastnameError(true);
    else setLastnameError(false);
  };

  const handlePhoneError = e => {
    if (e.length < 3) setPhoneError(true);
    else setPhoneError(false);
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
          <View style={{marginBottom: 15}}>
            <Text style={styles.text_header}>S'inscrire</Text>
          </View>

          <View>
            <View style={styles.action}>
              <TextInput
                placeholder="Nom"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => setLastName(val)}
                onEndEditing={e => handleLastameError(e.nativeEvent.text)}
              />
              {lastname.length >= 5 && (
                <Animatable.View
                  animation="bounceIn"
                  style={{position: 'absolute', right: 12, top: 12}}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              )}
            </View>
            {lasttnameError && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Le nom doit comporter au moins 3 caractères.
                </Text>
              </Animatable.View>
            )}
            <View style={styles.action}>
              <TextInput
                placeholder="Prénom"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => setName(val)}
                onEndEditing={e => handleFirstnameError(e.nativeEvent.text)}
              />
              {firstname.length >= 5 && (
                <Animatable.View
                  animation="bounceIn"
                  style={{position: 'absolute', right: 12, top: 12}}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              )}
            </View>
            {firstnameError && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Le prénom doit comporter au moins 3 caractères.
                </Text>
              </Animatable.View>
            )}
            <View style={styles.action}>
              <TextInput
                placeholder="Téléphone"
                placeholderTextColor="#666666"
                keyboardType="phone-pad"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => setPhone(val)}
                onEndEditing={e => handlePhoneError(e.nativeEvent.text)}
              />
              {phone.length >= 5 && (
                <Animatable.View
                  animation="bounceIn"
                  style={{position: 'absolute', right: 12, top: 12}}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              )}
            </View>
            {phoneError && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  S'il vous plait entrez un numéro de téléphone valide.
                </Text>
              </Animatable.View>
            )}
            <View style={styles.action}>
              <TextInput
                placeholder="Adresse email"
                placeholderTextColor="#666666"
                keyboardType="email-address"
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
                  onPress={() => handleRegister()}>
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
                      Inscrivez-vous
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                onPress={() => navigation.navigate('SignInScreen')}
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
                  Se connecter
                </Text>
              </TouchableOpacity>
            </View>
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
