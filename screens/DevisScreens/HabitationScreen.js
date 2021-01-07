import React, {useState} from 'react';
import {ActivityIndicator, Alert, Text, View} from 'react-native';
import {Content, Input, Item, Switch, Button, Picker} from 'native-base';

import {RadioButton, Checkbox} from 'react-native-paper';

import styles from './styles';
import {storeDevis} from '../utils/deviFunctions';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";

export default function HabitationScreen({navigation, handleInput, ColorBack,token}) {
  const [currentPosition, setcurrentPosition] = useState(0);
  const [userconditionschecked, setuserconditionschecked] = useState(false);

  const [gender, setgender] = useState('Mr');
  const [profession, setprofession] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [valeurBatiment, setValeurBatiment] = useState('');
  const [valeurContenu, setValeurContenu] = useState('');
  const [categorie, setCategorie] = useState(null);
  const [typePriorite, setTypePriorite] = useState(null);

  const [loading, setLoading] = useState(false);

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


  const saveDevis = () => {
    setLoading(true);

    // navigation.goBack();

    const listGarantiesFiltered = listGaranties.map(({name}) => name);

    const formData = {
      devi_type: 'habitation',
      gender,
      profession,
      lastName,
      firstName,
      phone,
      email,
      valeur_batiment: valeurBatiment,
      valeur_contenu: valeurContenu,
      categorie,
      type_priorite: typePriorite,
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

  const GoToNextStep = index => {
    setcurrentPosition(index);
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
    <View>
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
            <RadioButton color="#6D214F" value="Mr" />
            <Text>Monsieur</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton color="#6D214F" value="Mme" />
            <Text>Madame</Text>
          </View>
          </View>
        </RadioButton.Group>
      </View>
      <Item style={styles.loginFormTextInput}>
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

      <Item style={styles.loginFormTextInput}>
        <Input
          placeholder="Nom"
          onChange={val => setLastName(val.nativeEvent.text)}
          value={lastName}
        />
      </Item>
      <Item style={styles.loginFormTextInput}>
        <Input
          placeholder="Prénom"
          onChange={val => setFirstName(val.nativeEvent.text)}
          value={firstName}
        />
      </Item>
      <Item style={styles.loginFormTextInput}>
        <Input
          placeholder="GSM"
          keyboardType="phone-pad"
          onChange={val => setPhone(val.nativeEvent.text)}
          value={phone}
        />
      </Item>

      <Item style={styles.loginFormTextInput}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          onChange={val => setEmail(val.nativeEvent.text)}
          value={email}
        />
      </Item>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Checkbox
          color='#6D214F'
          status={userconditionschecked ? 'checked' : 'unchecked'}
          uncheckedColor="#999"
          onPress={() => {
            setuserconditionschecked(!userconditionschecked);
          }}
        />
        <Text>
          J'ai lut et accepter les conditions generales d'utilisateur{' '}
        </Text>
      </View>

      <Button
        onPress={() => {
          GoToNextStep(1);
        }}
        full
        style={{
          color: '#fff',
          margin: 16,
          backgroundColor: ColorBack,
          borderRadius: 6,
        }}>
        <Text style={{color: '#fff'}}>Suivant</Text>
      </Button>
    </View>
  );
  const renderFormComponent2 = () => (
    <View>
      <Item style={styles.loginFormTextInput}>
        <Input
          placeholder="Valeur batiment"
          keyboardType="number-pad"
          onChange={val => setValeurBatiment(val.nativeEvent.text)}
          value={valeurBatiment}
        />
      </Item>

      <Item style={styles.loginFormTextInput}>
        <Input
          placeholder="Valeur Contenu"
          keyboardType="number-pad"
          onChange={val => setValeurContenu(val.nativeEvent.text)}
          value={valeurContenu}
        />
      </Item>

      <Item style={styles.loginFormTextInput}>
        <Picker
          note
          mode="dialog"
          style={[styles.dropDown]}
          onValueChange={i => setCategorie(i)}
          selectedValue={categorie}>
          <Picker.Item label="Categorie" value="" />
          <Picker.Item label="Villa" value="Villa" />
          <Picker.Item label="Maison" value="Maison" />
          <Picker.Item label="Appartement" value="Appartement" />
        </Picker>
      </Item>

      <Item style={styles.loginFormTextInput}>
        <Picker
          note
          mode="dialog"
          style={[styles.dropDown]}
          onValueChange={i => setTypePriorite(i)}
          selectedValue={typePriorite}>
          <Picker.Item label="Type Priorite" value="" />
          <Picker.Item label="Location" value="Location" />
          <Picker.Item label="Prioritaire" value="Prioritaire" />
        </Picker>
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
      <Content>
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
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Content style={{width: '100%', padding: 15}}>
          {renderFormComponents()}
        </Content>
      </View>
    </>
  );
}
