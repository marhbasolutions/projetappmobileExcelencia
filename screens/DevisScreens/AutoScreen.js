import React, {useState, useEffect} from 'react';
import {
  Switch,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import {RadioButton, Checkbox} from 'react-native-paper';
import {Content, Input, Item, Button, Body, Radio, Picker} from 'native-base';
import {Dialog, DialogContent, DialogTitle} from 'react-native-popup-dialog';
import {Icon} from 'react-native-elements';
import global from '../globalSytle';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import {storeDevis} from '../utils/deviFunctions';
import {Alert} from 'react-native';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";

const appId = '1047121222092614';

// export default class LoginScreen extends Component {
export default function AutoScreen({navigation, handleInput, ColorBack,token}) {
  const [currentPosition, setcurrentPosition] = useState(0);

  const GoToNextStep = index => {
    setcurrentPosition(index);
  };
  const [saving, setsaving] = useState(false);
  const [gender, setgender] = useState('Mr');
  const [vehiculew, setvehiculew] = useState('Non');
  const [userconditionschecked, setuserconditionschecked] = useState(false);
  const [currentuser, setcurrentuser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [marque, setmarque] = useState('');
  const [usage, setusage] = useState('');
  const [profession, setprofession] = useState('');
  const [loading, setLoading] = useState(false);

  const [puissance, setPuissance] = useState('');
  const [valeurNeuf, setValeurNeuf] = useState('');
  const [valeurVental, setValeurVental] = useState('');
  const [valeurGlace, setValeurGlace] = useState('');

  const [listGaranties, setlistGaranties] = useState([
    {name: 'RESPONSABILITE CIVILE', choosed: false},
    {name: 'DEFENSE ET RECOURS', choosed: false},
    {name: 'VOL', choosed: false},
    {name: 'INCEDIE', choosed: false},
    {name: 'BRIS DE GLACE', choosed: true},
    {name: 'DOMMAGE COLLESION', choosed: false},
    {name: 'TIERCE', choosed: false},
    {name: 'PERSONNES TRANSPORTEES', choosed: true},
    {name: 'EVCAT RC AUTO', choosed: false},
    {name: 'EVCAT DOMMAGE AUTO', choosed: false},
  ]);

  useEffect(() => {
    AsyncStorage.getItem('currentuser').then(user => {
      setcurrentuser(user);
    });
  }, []);

  const saveDevis = () => {
    setLoading(true);

    // navigation.goBack();

    const listGarantiesFiltered = listGaranties.map(({name}) => name);

    const formData = {
      devi_type: 'auto',
      gender,
      profession,
      lastName,
      firstName,
      phone,
      email,
      vehicule_ww: vehiculew,
      usage,
      marque,
      puissance,
      valeur_neuf: valeurNeuf,
      valeur_vental: valeurVental,
      valeur_glaces: valeurGlace,
      list_garanties: listGarantiesFiltered,
    };

    storeDevis(formData,token).then(res => {
      setLoading(false);
      if (res.success) {
        showMessage({
          message: res.message,
          type: "success",
        });
        navigation.navigate('MesDevis');
      } else {
        showMessage({
          message: res.message,
          type: "danger",
        });
      }
    });
  };

  const toggleSwitch = e => {
    let found = listGaranties.map(item => {
      if (item.name == e.name) {
        item.choosed = !item.choosed;
      }
      return item;
    });
    setlistGaranties(found);
  };

  const renderFormComponent1 = () => (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 15,
      }}>
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


      <Item style={[styles.listItemForm]}>
        <Picker
          note
          mode="dialog"
          style={[styles.dropDown]}
          onValueChange={i => setprofession(i)}
          selectedValue={profession}>
          <Picker.Item label="Profession" value="Profession" />
          <Picker.Item label="Ingenieur" value="Ingenieur" />
          <Picker.Item label="Medecin" value="Medecin" />
          <Picker.Item label="Professeur" value="Professeur" />
        </Picker>
      </Item>

      <Item style={[styles.listItemForm]}>
        <Input
          placeholder="Nom"
          style={[styles.innerInputForm]}
          onChange={val => setLastName(val.nativeEvent.text)}
          value={lastName}
        />
      </Item>
      <Item style={[styles.listItemForm]}>
        <Input
          placeholder="Prénom"
          style={[styles.innerInputForm]}
          onChange={val => setFirstName(val.nativeEvent.text)}
          value={firstName}
        />
      </Item>
      <Item style={[styles.listItemForm]}>
        <Input
          placeholder="GSM"
          keyboardType="phone-pad"
          style={[styles.innerInputForm]}
          onChange={val => setPhone(val.nativeEvent.text)}
          value={phone}
        />
      </Item>

      <Item style={[styles.listItemForm]}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          style={[styles.innerInputForm]}
          onChange={val => setEmail(val.nativeEvent.text)}
          value={email}
        />
      </Item>

      <Item style={[styles.listItemForm]}>
        <Checkbox
        color='#242c62'
          status={userconditionschecked ? 'checked' : 'unchecked'}
          uncheckedColor="#999"
          onPress={() => {
            setuserconditionschecked(!userconditionschecked);
          }}
        />
        <Body>
          <Text>
            J'ai lut et accepter les conditions generales d'utilisateur
          </Text>
        </Body>
      </Item>

      <Button
        onPress={() => {
          GoToNextStep(1);
        }}
        full
        style={{
          color: '#fff',
          margin: 15,
          backgroundColor: ColorBack,
          borderRadius: 6,
        }}>
        <Text style={{color: '#fff'}}>Suivant</Text>
      </Button>
    </View>
  );
  const renderFormComponent2 = () => (
    <View style={{padding: 15}}>
      <View style={[styles.genderContainer]}>
        <View>
          <Text tsype="bold" style={{fontSize: 15}}>
            vehicule WW
          </Text>
        </View>

        <RadioButton.Group
          onValueChange={value => setvehiculew(value)}
          value={vehiculew}>
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
            <RadioButton color="#242c62" value="Oui" />
            <Text>Oui</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton color="#242c62" value="Non" />
            <Text>Non</Text>
          </View>
          </View>
        </RadioButton.Group>
      </View>

      <Item style={[styles.listItemForm]}>
        <Picker
          note
          mode="dialog"
          selectedValue={usage}
          onValueChange={i => setusage(i)}
          itemStyle={[styles.dropdownItem]}
          style={[styles.dropDown]}>
          <Picker.Item label="Usage" value="0" />
          <Picker.Item label="A" value="A" />
          <Picker.Item label="C1" value="C1" />
        </Picker>
      </Item>

      <Item style={[styles.listItemForm]}>
        <Picker
          note
          mode="dialog"
          selectedValue={marque}
          onValueChange={i => setmarque(i)}
          itemStyle={[styles.dropdownItem]}
          style={[styles.dropDown]}>
          <Picker.Item label="Marque" value="0" />
          <Picker.Item label="Audi" value="Audi" />
          <Picker.Item label="Alfa romeo" value="Alfa romeo" />
          <Picker.Item label="BMW" value="BMW" />
          <Picker.Item label="CHANA" value="CHANA" />
          <Picker.Item label="CITROEN" value="CITROEN" />
        </Picker>
      </Item>

      <Item style={[styles.listItemForm]}>
        <Input
          placeholder="Puissance"
          keyboardType="number-pad"
          value={puissance}
          onChange={val => setPuissance(val.nativeEvent.text)}
        />
      </Item>
      <Item style={[styles.listItemForm]}>
        <Input
          placeholder="Valeur a neuf"
          keyboardType="number-pad"
          value={valeurNeuf}
          onChange={val => setValeurNeuf(val.nativeEvent.text)}
        />
      </Item>
      <Item style={[styles.listItemForm]}>
        <Input
          placeholder="Valeur venal"
          keyboardType="number-pad"
          value={valeurVental}
          onChange={val => setValeurVental(val.nativeEvent.text)}
        />
      </Item>

      <Item style={[styles.listItemForm]}>
        <Input
          placeholder="Valeur des glaces"
          keyboardType="number-pad"
          value={valeurGlace}
          onChange={val => setValeurGlace(val.nativeEvent.text)}
        />
      </Item>
      <Item style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          onPress={() => {
            GoToNextStep(0);
          }}
          full
          style={{
            flex: 1,
            alignSelf: 'stretch',
            color: '#fff',
            margin: 15,
            backgroundColor: ColorBack,
            borderRadius: 6,
          }}>
          <Text style={{color: '#fff'}}>Précédent</Text>
        </Button>
        <Button
          onPress={() => {
            GoToNextStep(2);
          }}
          full
          style={{
            flex: 1,
            alignSelf: 'stretch',
            color: '#fff',
            margin: 16,
            backgroundColor: ColorBack,
            borderRadius: 6,
          }}>
          <Text style={{color: '#fff'}}>Suivant</Text>
        </Button>
      </Item>
    </View>
  );
  const renderFormComponent3 = () => {
    const list = listGaranties.map((item, index) => {
      return (
        <Item key={index} style={[styles.listItemForm]} icon>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text>{item.name}</Text>
            <Switch
              value={item.choosed}
              onValueChange={() => toggleSwitch(item)}
            />
          </View>
        </Item>
      );
    });

    return (
      <Content style={{padding: 15}}>
        {list}
        <Item style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            onPress={() => {
              GoToNextStep(1);
            }}
            full
            style={{
              flex: 1,
              alignSelf: 'stretch',
              color: '#fff',
              margin: 15,
              backgroundColor: ColorBack,
              borderRadius: 6,
            }}>
            <Text style={{color: '#fff'}}>Précédent</Text>
          </Button>
          <Button
            onPress={!loading ? saveDevis : null}
            full
            style={{
              flex: 1,
              alignSelf: 'stretch',
              color: '#fff',
              margin: 16,
              backgroundColor: ColorBack,
              borderRadius: 6,
            }}>
            {loading ? (
              <ActivityIndicator color="#f6d147" size={30} />
            ) : (
              <Text style={{color: '#fff'}}>Valider</Text>
            )}
          </Button>
        </Item>
        <FlashMessage position='top' />
      </Content>
    );
  };

  const renderFormComponents = () => {
    handleInput(currentPosition);

    switch (currentPosition) {
      case 0:
        return renderFormComponent1();
        break;
      case 1:
        return renderFormComponent2();
        break;

      case 2:
        return renderFormComponent3();
        break;

      default:
        break;
    }
  };

  return (
    <>
      {saving ? (
        <ActivityIndicator
          size="large"
          color="#f6b932"
          style={[global.indicator]}
        />
      ) : (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Content style={{width: '100%'}}>{renderFormComponents()}</Content>
        </View>
      )}
    </>
  );
}
