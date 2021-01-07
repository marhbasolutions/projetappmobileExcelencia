import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {RadioButton, Checkbox} from 'react-native-paper';
import {
  Form,
  Grid,
  Col,
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Input,
  Item,
  Button,
  Segment,
  Body,
  Radio,
  Picker,
  ListItem,
  Left,
  Right,
  Toast,
} from 'native-base';
import global from '../globalSytle';
import AsyncStorage from '@react-native-community/async-storage';
import {
  API_GET_TOBEPAYED,
  HOST,
  CLIENT_ID,
  CLIENT_SECRET,
  encodingData,
} from '../api/config';
const base64 = require('base-64');
export default function CotisationsScreen({navigation}) {
  const [saving, setsaving] = useState(false);
  const [numerosocietaire, setnumerosocietaire] = useState('');
  const [mutuelle, setmutuelle] = useState('');
  const [savetofavoris, setsavetofavoris] = useState(false);
  const [toBepPayed, setToBePayed] = useState([]);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState('');
  const [modePaiement, setModePaiement] = useState(0);
  const [numeroVirement, setNumeroVirement] = useState('');
  const [numeroCheque, setNumeroCheque] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    setsaving(true);
    AsyncStorage.getItem('USER_ID').then(user => {
      setUser(user);
      AsyncStorage.getItem('USER_TOKEN').then(token => {
        setToken(token);
        if (user != null) {
          fetch(API_GET_TOBEPAYED + '?user=' + user, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token
            },
          })
            .then(response => response.json())
            .then(json => {
              setsaving(false);
              if (json.success) {
                setToBePayed(json.tobepayed);
              }
            })
            .catch(error => {
              console.error(error);
            });
        }
      });
      
    });
    authenticateToPaypal();
  }, []);

  const authenticateToPaypal = async () => {
    var client_credentials = {
      grant_type: 'client_credentials',
    };

    let header = new Headers();
    header.append(
      'Authorization',
      'Basic ' + base64.encode(CLIENT_ID + ':' + CLIENT_SECRET),
    );
    header.append('Cache-Control', 'no-cache');
    header.append(
      'Content-Type',
      'application/x-www-form-urlencoded;charset=UTF-8',
    );

    header.append(
      'Accept-Language',
      'fr_FR',
    );

    fetch('https://api.sandbox.paypal.com/v1/oauth2/token', {
      method: 'POST',
      headers: header,
      body: encodingData(client_credentials),
    })
      .then(response => response.json())
      .then(json => {
        //console.log(json);
        setAccessToken(json.access_token);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const payer = () => {
    switch (modePaiement) {
      case 'PayPal':
        makePayement();
        break;
      case 'Espèces':
        navigation.navigate('RdvPayement', {
          type: "Espèces"
        });
        break;
      case 'Virement':
        alert('Vous n accpetons pas ce mode paiement pour le moment ');
        break;
      case 'Chèque':
        navigation.navigate('RdvPayement', {
          type: "Chèque",
          numeroCheque: numeroCheque
        });
        break;
      case 'Par transfert':
        alert('Vous n accpetons pas ce mode paiement pour le moment ');
        break;
        default:
          alert(modePaiement);
    }
  };

  const makePayement = () => {
    let prodcut = toBepPayed.filter(
      item => item.service.subscription == mutuelle,
    );
    
    prodcut = prodcut[0].service;
    //console.log('pordcu  ',parseFloat(prodcut.price * 0.0018).toFixed(2));return;
    setsaving(true);
    var dataDetail = JSON.stringify({
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      transactions: [
        {
          amount: {
            total:
              parseFloat(prodcut.price * 0.0018).toFixed(2)  ,
            currency: 'USD',
            details: {
              subtotal:
                parseFloat(prodcut.price * 0.0018 ).toFixed(2) ,
              tax: '0.00',
              shipping: '0.00',
              handling_fee: '0.00',
              shipping_discount: '0.00',
              insurance: '0.00',
            },
          },
          description: 'La description de la transaction de paiement.',
          custom: 'EBAY_EMS_90048630024435',
          invoice_number: '48787589672',
          payment_options: {
            allowed_payment_method: 'INSTANT_FUNDING_SOURCE'
          },
          soft_descriptor: 'ECHI5786786',
          item_list: {
            items: [
              {
                name: prodcut.name,
                description: 'Service de exclencia assurance',
                quantity: '1',
                price:
                  parseFloat(prodcut.price * 0.0018).toFixed(2) ,
                tax: '0.00',
                sku: prodcut.id,
                currency: 'USD'
              },
            ],
          },
        },
      ],
      note_to_payer: 'Contactez-nous pour toutes questions sur votre commande.',
      application_context:{
        locale :"fr_FR",
        brand_name :"Exclencia Assurance",
        landing_page:"Login"
    }
    });

    let header = new Headers();
    header.append('Authorization', 'Bearer ' + accessToken);
    header.append('Cache-Control', 'no-cache');
    header.append('Accept-Language', 'fr_FR');
    header.append('Content-Type', 'application/json');
    fetch('https://api.sandbox.paypal.com/v1/payments/payment', {
      method: 'POST',
      headers: header,
      body: dataDetail,
    })
      .then(response => response.json())
      .then(json => {
        console.log('payement info ', json);
        if (json.id != null) {
          setsaving(false);
          navigation.navigate('Payement', {
            approvalUrl: json.links.filter(
              item => item.rel == 'approval_url',
            )[0].href,
            payerId: json.id,
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container>
      {!saving ? (
        <Content
          style={[
            global.container,
            global.paddingContainer,
            {backgroundColor: '#242c62'},
          ]}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              height: '100%',
              padding: 20,
            }}>
            <Item style={[styles.listItemForm, {marginTop: 0}]}>
              <Picker
                note
                mode="dialog"
                style={[styles.dropDown]}
                itemStyle={[styles.dropDownItem]}
                onValueChange={i => setmutuelle(i)}
                selectedValue={mutuelle}>
                <Picker.Item
                  label={
                    toBepPayed.length > 0
                      ? 'Choisissez le service'
                      : 'Aucun service a payer'
                  }
                />
                {toBepPayed.length > 0
                  ? toBepPayed.map(item => (
                      <Picker.Item
                        value={item.service.subscription}
                        label={item.service.name}
                      />
                    ))
                  : null}
              </Picker>
            </Item>

            <Item style={[styles.listItemForm, {marginTop: 20}]}>
              <Picker
                note
                mode="dialog"
                style={[styles.dropDown]}
                itemStyle={[styles.dropDownItem]}
                onValueChange={i => setModePaiement(i)}
                selectedValue={modePaiement}>
                <Picker.Item label="Mode de paiement" value={0} />
                <Picker.Item label="PayPal" value="PayPal" />
                <Picker.Item label="Espèces" value="Espèces" />
                <Picker.Item label="Virement" value="Virement" />
                <Picker.Item label="Chèque" value="Chèque" />
                <Picker.Item label="Par transfert" value="Par transfert" />
              </Picker>
            </Item>

            {(modePaiement == 'Virement' ||
              modePaiement == 'Par transfert') && (
              <Item style={[styles.listItemForm]}>
                <Input
                  keyboardType='number-pad'
                  placeholder="Numéro de virement/transfert"
                  style={[styles.innerInputForm]}
                  onChange={val => setNumeroVirement({val})}
                  value={numeroVirement}
                />
              </Item>
            )}

            {modePaiement == 'Chèque' && (
              <Item style={[styles.listItemForm]}>
                <Input
                  keyboardType='number-pad'
                  placeholder="Numéro chèque émis"
                  style={[styles.innerInputForm]}
                  onChange={val => setNumeroCheque({val})}
                  value={numeroCheque}
                />
              </Item>
            )}

            <Item style={[styles.listItemForm]}>
              <Input
              
                keyboardType='number-pad'
                placeholder="Numero de societeaire"
                style={[styles.innerInputForm]}
                onChange={val => setnumerosocietaire({val})}
                value={numerosocietaire}
              />
            </Item>

            <Button
              disabled={toBepPayed.length == 0}
              onPress={() => payer() }
              full
              style={{
                color: '#fff',
                alignSelf: 'center',
                margin: 20,
                borderRadius: 6,
                width: '100%',
                backgroundColor: '#242c62',
              }}>
              <Text style={{color: '#fff'}}> Valider </Text>
            </Button>

            <Button
              onPress={() => {
                navigation.navigate('MesCotisations');
              }}
              full
              style={{
                color: '#fff',
                alignSelf: 'center',
                borderRadius: 6,
                width: '100%',
                backgroundColor: '#f9db4d',
              }}>
              <Text style={{color: '#fff'}}> Mes cotisations </Text>
            </Button>

            <Item
              style={[styles.listItemForm]}
              onPress={() => setsavetofavoris(!savetofavoris)}>
              <Checkbox
                disabled={toBepPayed.length == 0}
                color="#242c62"
                uncheckedColor="#999"
                status={savetofavoris ? 'checked' : 'unchecked'}
                uncheckedColor="#999"
                onPress={() => setsavetofavoris(!savetofavoris)}
              />
              <Text>Enregistrer dans favoris</Text>
            </Item>
          </View>
        </Content>
      ) : (
        <ActivityIndicator
          style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
          color="#f6d147"
          size={50}
        />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  title1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
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
    marginTop: -220,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  listItemForm: {height: 50, marginTop: 20},
  innerInputForm: {height: 50, width: '100%'},
  dropDownItem: {color: 'black'},
  dropDown: {color: 'black'},
});
