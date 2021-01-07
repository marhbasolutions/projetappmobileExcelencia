import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Picker,
} from 'react-native';
import Dialog, {
  DialogButton,
  DialogContent,
  DialogFooter,
  DialogTitle
} from 'react-native-popup-dialog';
import {Icon, Button} from 'react-native-elements';
import {Container, Content, Header} from 'native-base';
import global from '../globalSytle';
import AsyncStorage from '@react-native-community/async-storage';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";
import { API_HAS_CONTRACT } from '../api/config';

const SinistreDeclarationScreen = ({route, navigation}) => {
  const [activeSinistre, setActiveSinistre] = useState('');
  const [saving, setsaving] = useState(false);
  const [user, setUser] = useState(null);
  const [contractNumber, setContractNumber] = useState('');
  const [allContractsNumbers,setAllContractsNumbers] =  useState([]);
  const [chooseContractOpened,setChooseContractOpened] = useState(false);
  const [hasContract,setHasContract] =  useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    setsaving(true);
  if(route.params==null || route.params.contract == null){
    AsyncStorage.getItem('USER_TOKEN').then(token => {
      setToken(token);
      AsyncStorage.getItem('USER_ID').then((user)=>{
        if(user != null )
        {
            fetch(API_HAS_CONTRACT+'?user='+user, {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer '+token
                }
              })
              .then((response) => response.json())
                    .then((json) => {
                          if(json.success)
                          {
                            if(json.hascontract)
                            {
                              setContractNumber(json.contractnumbers[0]);
                              setAllContractsNumbers(json.contractnumbers);
                            }
                            setHasContract(json.hascontract);
                          }
                })
                .catch((error) => {
                          console.error(error);
                });
        }  
      });
    });

    
    }
    else{
      setContractNumber(
        route.params!=null && route.params.contract != null ? route.params.contract : '',
      );
    }


    setsaving(false);
  }, []);

  return !saving ? (
    <Container>
      <Header style={{backgroundColor: '#242c62', height: 20, zIndex: 1}}>
        <StatusBar backgroundColor="#242c62" barStyle="light-content" />
      </Header>
      <TouchableOpacity activeOpacity={0.9} 
        onPress={()=>{
          setChooseContractOpened(true)
        }}>
        <View style={[styles.topSearchBar, {justifyContent: 'space-between'}]}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              style={{margin: 3}}
              type="font-awesome"
              name="file"
              color="#f6b932"
            />
            <View style={styles.textTopSearchBar}>
              <Text style={{fontSize: 17, lineHeight: 20}}>
                {contractNumber == '' ? 'Contrat non valide' : 'Contrat valide'}
              </Text>
              <Text type="light" style={{lineHeight: 20}}>
                Immatriculation
              </Text>
            </View>
          </View>
          <View style={styles.rightIconSearch}>
            <Text style={{margin: 6, fontSize: 16}}>N° {contractNumber}</Text>
            <Icon type="font-awesome" name="random" color="#f6b932" />
          </View>
        </View>
      </TouchableOpacity>
      <Content style={[styles.paddingContainer]}>
        <Text>Choisissez le type de sinistre</Text>

        <View style={[styles.typeContainer, global.marginTop]}>
          <TouchableOpacity
            onPress={() => setActiveSinistre('Accident')}
            style={[
              styles.type,
              activeSinistre == 'Accident'
                ? {backgroundColor: '#30336b'}
                : {backgroundColor: '#fff'},
            ]}
            activeOpacity={1}>
            <Icon
              size={40}
              type="material-community"
              name="car-multiple"
              color="#f6b932"
            />
            <Text
              style={
                activeSinistre == 'Accident'
                  ? {color: 'white'}
                  : {color: '#000'}
              }>
              Accident
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveSinistre('Vol')}
            style={[
              styles.type,
              activeSinistre == 'Vol'
                ? {backgroundColor: '#30336b'}
                : {backgroundColor: '#fff'},
            ]}
            activeOpacity={1}>
            <Icon
              size={40}
              type="font-awesome"
              name="user-secret"
              color="#f6b932"
            />
            <Text
              style={
                activeSinistre == 'Vol' ? {color: 'white'} : {color: '#000'}
              }>
              Vol
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.typeContainer}>
          <TouchableOpacity
            onPress={() => setActiveSinistre('Bris de glace')}
            style={[
              styles.type,
              activeSinistre == 'Bris de glace'
                ? {backgroundColor: '#30336b'}
                : {backgroundColor: '#fff'},
            ]}
            activeOpacity={1}>
            <Icon
              size={40}
              type="material-community"
              name="car-electric"
              color="#f6b932"
            />
            <Text
              style={
                activeSinistre == 'Bris de glace'
                  ? {color: 'white'}
                  : {color: '#000'}
              }>
              Bris de glace
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveSinistre('Incendie')}
            style={[
              styles.type,
              activeSinistre == 'Incendie'
                ? {backgroundColor: '#30336b'}
                : {backgroundColor: '#fff'},
            ]}
            activeOpacity={1}>
            <Icon
              size={40}
              type="material-community"
              name="fire-extinguisher"
              color="#f6b932"
            />
            <Text
              style={
                activeSinistre == 'Incendie'
                  ? {color: 'white'}
                  : {color: '#000'}
              }>
              Incendie
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          buttonStyle={[
            global.marginTop,
            styles.buttonConfirm,
            activeSinistre != '' ? {backgroundColor: '#30336b'} : null,
          ]}
          title="Confirmer"
          onPress={() =>
            {
              if(contractNumber!=null && contractNumber!=''){
                activeSinistre 
                ? navigation.navigate('SinistreDeclarationForm', {activeSinistre})
                : null
              }
              else
              {
                  showMessage({
                    message:'Vous n\'avez pas un numéro de contrat valide',
                    type:'warning',
                    icon:'warning'
                  })
              }
            }
          }
        />
        <Dialog
        dialogStyle={{
          width:'90%'
        }}
            visible={chooseContractOpened}
            dialogTitle={<DialogTitle title="Changer le contrat" />}
            footer={
              <DialogFooter>
                <DialogButton
                  text="Quitter"
                  onPress={() => setChooseContractOpened(false)}
                />
                <DialogButton
                  text="Valider"
                  onPress={() => setChooseContractOpened(false)}
                />
              </DialogFooter>
            }
            >
            <DialogContent style={{width:'100%'}}>
              <View style={{borderColor:'#242c62',borderWidth:2,marginTop:15,borderRadius:10}}>
                        <Picker
                          note
                          mode="dialog"
                          style={{color:'black',width:'100%'}}
                          onValueChange={(i)=>setContractNumber(i)}
                          selectedValue={contractNumber} >
                          {
                            allContractsNumbers.length > 0 ? (
                              allContractsNumbers.map((item)=> <Picker.Item value={item} label={item}  />)
                            ):<Picker.Item value={0} label='Aucun contract'  />
                          }
                      </Picker>
                      </View>
            </DialogContent>
          </Dialog>
        
      </Content>
      <FlashMessage position='top' />
    </Container>
  ) : (
    <ActivityIndicator
      style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
      color="#f6d147"
      size={50}
    />
  );
};

const styles = StyleSheet.create({
  paddingContainer: {
    padding: 15
  },
  topSearchBar: {
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    margin: 2,
    padding: 6,
    position: 'relative',
    top: -20,
    zIndex: 3,
  },
  textTopSearchBar: {
    margin: 6,
  },
  rightIconSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  type: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: '46%',
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 17,
  },
  typeContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonConfirm: {
    width: '40%',
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'lightgray',
    fontFamily: 'Raleway-Regular',
  },
});

export default SinistreDeclarationScreen;
