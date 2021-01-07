import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Container,Content } from 'native-base';
import {Icon} from 'react-native-elements';
import CustomHeader from './InnerCompenents/CustomHeader';
import {RadioButton} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {Input, Item, Button, Label} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {API_GET_USER} from '../screens/api/config';
import {changeProfile} from './utils/authUser';

export default function ProfileScreen({navigation}) {
  const [saving, setsaving] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setgender] = useState('Mr');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const saveprofil = () => {
    setLoading(true);
    let newUser = {};

    if (!firstName || firstName === '') {
      Alert.alert('', 'Le champ du nom ne peut pas être vide.', [
        {text: 'Ok', onPress: () => setLoading(false)},
      ]);
      return;
    }

    if (!lastName || lastName === '') {
      Alert.alert('', 'Le champ du prénom ne peut pas être vide.', [
        {text: 'Ok', onPress: () => setLoading(false)},
      ]);
      return;
    }

    if (!phone || phone === '') {
      Alert.alert('', 'Le champ du téléphone ne peut pas être vide.', [
        {text: 'Ok', onPress: () => setLoading(false)},
      ]);
      return;
    }

    if (password !== '' || confirmPassword !== '') {
      if (password !== confirmPassword) {
        Alert.alert('', 'Le mot de passe ne correspond pas', [
          {text: 'Ok', onPress: () => setLoading(false)},
        ]);
        return;
      } else {
        newUser = {firstName, lastName, phone, password, gender,email};
      }
    } else {
      newUser = {firstName, lastName, phone, gender,email};
    }

    changeProfile(newUser,token).then(res => {
      if (res.success) {
        Alert.alert('', res.message, [
          {text: 'Ok', onPress: () => setLoading(false)},
        ]);
      } else {
        Alert.alert('', res.message, [
          {text: 'Ok', onPress: () => setLoading(false)},
        ]);
      }
    });
  };

  useEffect(() => {
    setsaving(true);
    AsyncStorage.getItem('USER_ID').then(val => {
      fetch(API_GET_USER, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
        body: JSON.stringify({id: val}),
      })
        .then(response => response.json())
        .then(json => {
          setsaving(false);
          setFirstName(json.user.firstName);
          setLastName(json.user.lastName);
          setPhone(json.user.phone);
          setEmail(json.user.email);
          //setuser(json.user);
        })
        .catch(error => {
          console.error(error);
        });
    });

    AsyncStorage.getItem('USER_TOKEN').then(token => {
      setToken(token);
    });

  }, []);

  return (
    <Container>
    <CustomHeader props={{title:"Mon profil",navigation:navigation}} />
    <Content padder >
    <View style={{flex: 1, padding: 16, paddingTop: 30}}>
      {!saving ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.genderContainer]}>
            <View>
              <Text tsype="bold" style={{fontSize: 15}}>
              Civilité
              </Text>
            </View>

            <RadioButton.Group
              onValueChange={value => setgender(value)}
              value={gender}>
                <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton color="#242c62" value="Mr" />
                <Text>Monsieur</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton color="#242c62" value="Mme" />
                <Text>Madame</Text>
              </View>
              </View>
            </RadioButton.Group>
          </View>

          <Item style={[styles.listItemForm]} floatingLabel>
            <Label>N° client </Label>
            <Input
              placeholder="N° client"
              disabled
              style={[styles.innerInputForm]}
              value="12121212"
            />
          </Item>

          <Item style={[styles.listItemForm]} floatingLabel>
            <Label>Nom</Label>
            <Input
              placeholder="Nom"
              style={[styles.innerInputForm]}
              onChange={val => setLastName(val.nativeEvent.text)}
              value={lastName}
            />
          </Item>

          <Item style={[styles.listItemForm]} floatingLabel>
            <Label>Prénom</Label>
            <Input
              placeholder="Prénom"
              style={[styles.innerInputForm]}
              onChange={val => setFirstName(val.nativeEvent.text)}
              value={firstName}
            />
          </Item>

          <Item style={[styles.listItemForm]} floatingLabel>
            <Label>Téléphone</Label>
            <Input
              placeholder="GSM"
              keyboardType="phone-pad"
              style={[styles.innerInputForm]}
              onChange={val => setPhone(val.nativeEvent.text)}
              value={phone}
            />
          </Item>

          <Item style={[styles.listItemForm]} floatingLabel>
            <Label>Email</Label>
            <Input
              placeholder="Email"
              disabled
              keyboardType="email-address"
              style={[styles.innerInputForm]}
              onChange={val => setEmail(val.nativeEvent.text)}
              value={email}
            />
          </Item>

          <View>
            <Item style={[styles.listItemForm]} floatingLabel>
              <Label>Mot de passe </Label>
              <Input
                secureTextEntry={showPassword}
                placeholder="Mot de passe"
                onChange={val => setPassword(val.nativeEvent.text)}
                style={[styles.innerInputForm]}
              />
            </Item>
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{position: 'absolute', right: 12, bottom: 10}}>
              {showPassword ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View>
            <Item style={[styles.listItemForm]} floatingLabel>
              <Label>Confirmer le mot de passe </Label>
              <Input
                secureTextEntry={showConfirmPassword}
                placeholder="Confirmer le mot de passe"
                onChange={val => setConfirmPassword(val.nativeEvent.text)}
                style={[styles.innerInputForm]}
              />
            </Item>
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{position: 'absolute', right: 12, bottom: 10}}>
              {showConfirmPassword ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Button
            onPress={!loading ? saveprofil : null}
            full
            style={{color: '#fff', margin: 15, borderRadius: 6}}>
            {loading ? (
              <ActivityIndicator color="#f6d147" size={30} />
            ) : (
              <Text style={{color: '#fff'}}>Valider</Text>
            )}
          </Button>
        </ScrollView>
      ) : (
        <ActivityIndicator
          style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
          color="#f6d147"
          size={50}
        />
      )}
    </View>
    </Content>
    </Container>);
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#30336b',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInputItem: {
    backgroundColor: '#fafafa',
  },

  loginButton: {
    height: 53,

    backgroundColor: '#f9db4d',
    borderRadius: 25,
    marginTop: 10,
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    fontSize: 39,
    backgroundColor: 'transparent',
  },

  ForgetPasszord: {
    height: 45,
    marginTop: 2,
    backgroundColor: 'transparent',
  },
  titleFirst: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 10,
    marginBottom: 6,
    marginTop: 8,
  },
  title1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    // opacity: 1,
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 10,
    textShadowColor: 'black',
  },
  divForm: {
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.4,
    shadowRadius: 15,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  listItemForm: {marginTop: 20},
  innerInputForm: {height: 50, width: '100%'},
  dropDownItem: {color: 'black'},
  dropDown: {color: 'black'},
});
