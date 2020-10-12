import React, { useState ,useEffect  } from 'react';
import { Switch,StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground,AsyncStorage ,ActivityIndicator} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
    Form, Grid, Col, Container, Content, Footer, FooterTab, Icon, Input, Item,
    Button, Segment, Body, Radio, Picker, ListItem, Left, Right,
} from 'native-base';
import Text from '../../components/CustomText/CustomText';
import Dialog, { DialogFooter, DialogButton, DialogContent,DialogTitle } from 'react-native-popup-dialog';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DateTimePicker from '@react-native-community/datetimepicker';
import SegmentedControl from '@react-native-community/segmented-control';
import StepIndicator from 'react-native-step-indicator';
import { CheckBox } from 'react-native-elements'
import styles from './styles';
import { API_CREATE_DEVIS } from '../../api/config';


const appId = "1047121222092614"

// export default class LoginScreen extends Component {
export default function deviScreen({ navigation ,handleInput,ColorBack}) {

    const [currentPosition, setcurrentPosition] = useState(0);
    const GoToNextStep = (index) => {
        setcurrentPosition(index)
    };
    const [saving, setsaving] = useState(false);
    const [gender, setgender] = useState('Mr');
    const [vehiculew, setvehiculew] = useState(false);
    const [userconditionschecked, setuserconditionschecked] = useState(false);
    const [currentuser, setcurrentuser] = useState(null);
    const [preDataUser, setpreDataUser] = useState({
        nom:'',
        prenom:'',
        email:'',
        phone:''
    });
    const [marque, setmarque] = useState('0');
    const [usage, setusage] = useState('0');
    const [visibleModal, setvisibleModal] = useState(false);
    const [profession, setprofession] = useState(null);
    const [clicked, setclicked] = useState(false);

    const saveDevis = () =>{

        setvisibleModal(false);
        navigation.goBack();

        //setsaving(true);

        /*var dataToSend = 
        { userdata: preDataUser,vehiculew:vehiculew,listGaranties:listGaranties.filter((i)=>i.choosed),description:description};

        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch(API_CREATE_RDV, {
            method: 'POST',
            headers: {
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formBody
          })
          .then((response) => response.json())
                .then((json) => {
                    setsaving(false);
                if(json.message)
                {
                    Alert.alert('Rendez-vous',json.message,[{
                        text:'Ok',
                        style:'cancel'
                    }])
                }
                
            })

            .catch((error) => {
            console.error(error);
            });*/
    }

    const toggleSwitch = (e) =>
    {
        let lstnew = listGaranties;
        let found = lstnew.filter((item)=>item.name==e.name)[0];
        found.choosed=true;
        let indexof = lstnew.indexOf(e);
        lstnew[indexof]=found;
        setlistGaranties(lstnew);
        //console.log(listGaranties);
    }
    
    useEffect(() => {

        AsyncStorage.getItem('currentuser').then((user)=>{
            setcurrentuser(user);
        });

    }, []);

    const showRecap  = () =>
        {
            setvisibleModal(true);
        }


 

    const [listGaranties, setlistGaranties] = useState([
        {name:'RESPONSABILITE CIVILE',choosed:false}, 
        {name:'DEFENSE ET RECOURS',choosed:false}, 
        {name:'VOL',choosed:false},
        {name:'INCEDIE',choosed:false},
        {name:'BRIS DE GLACE',choosed:true},
        {name:'DOMMAGE COLLESION',choosed:false},
        {name:'TIERCE',choosed:false},
        {name:'PERSONNES TRANSPORTEES',choosed:true},
        {name:'EVCAT RC AUTO',choosed:false},
        {name:'EVCAT DOMMAGE AUTO',choosed:false},
    ]); 


    const renderFormComponent1 = () => (


        <View style={{flex:1,alignContent:'center',justifyContent:'center'}} >
            <View style={[styles.genderContainer]}>

                <View >
                    <Text tsype='bold' style={{ fontSize: 15 }}>Civilite</Text>
                </View>

                <Item style={{ flexDirection: 'row'}} selected={gender=='Mr'} onPress={()=>setgender('Mr')}  >
                    <Radio selected={gender=='Mr'}   />
                    <Text onPress={()=>setgender('Mr')} style={{ marginLeft: 5 }}>Monsieur</Text>
                </Item>

                <Item style={{flexDirection: 'row'}} selected={gender=='Mme'} onPress={()=>setgender('Mme')} >
                    <Radio selected={gender=='Mme'}  />
                    <Text onPress={()=>setgender('Mme')} style={{ marginLeft: 5 }}>Madame</Text>
                </Item>

            </View>

            <Item style={[styles.listItemForm]} >
                <Picker
                    note
                    mode="dialog"
                    style={[styles.dropDown]}
                    itemStyle={[styles.dropDownItem]}
                    onValueChange={(i)=>setprofession(i)}
                    selectedValue={profession} >
                    <Picker.Item label="Profession" value="Profession" />
                    <Picker.Item label="Ingenieur" value="Ingenieur" />
                    <Picker.Item label="Medecin" value="Medecin" />
                    <Picker.Item label="Professeur" value="Professeur" />
                </Picker>
            </Item>

            <Item style={[styles.listItemForm]}     >
                <Input placeholder='Nom' style={[styles.innerInputForm]} onChange={(val)=>setpreDataUser({nom:val})}  value={currentuser!=null ? currentuser.nom:preDataUser.nom} />
            </Item>
            <Item style={[styles.listItemForm]}  >
                <Input placeholder='Prénom' style={[styles.innerInputForm]} onChange={(val)=>setpreDataUser({prenom:val})}  value={currentuser!=null ? currentuser.prenom:preDataUser.prenom}  />
            </Item>
            <Item style={[styles.listItemForm]} >
                <Input placeholder='GSM'  style={[styles.innerInputForm]} onChange={(val)=>setpreDataUser({phone:val})}  value={currentuser!=null ? currentuser.phone:preDataUser.phone}  />
            </Item>

            <Item style={[styles.listItemForm]}  >
                <Input placeholder='Email' style={[styles.innerInputForm]} onChange={(val)=>setpreDataUser({email:val})}  value={currentuser!=null ? currentuser.email:preDataUser.email} />
            </Item>

            <Item style={[styles.listItemForm]}>
                <CheckBox checked={userconditionschecked}  onPress={()=>setuserconditionschecked(!userconditionschecked)} />
                <Body>
                <Text>J'ai lut et accepter les conditions generales d'utilisateur</Text>
                </Body>
            </Item>

            <Button onPress={() => { GoToNextStep(1) }} full style={{ color: '#fff', margin: 15, backgroundColor: ColorBack, borderRadius: 6 }}>
                <Text style={{ color: '#fff' }} > Suivant </Text>
            </Button>


        </View>

    )
    const renderFormComponent2 = () => (
        <View>
            
            <View style={[styles.genderContainer]}>
                <View >
                    <Text tsype='bold' style={{ fontSize: 15 }}>vehicule WW</Text>
                </View>

                <Item style={{ flexDirection: 'row'}} selected={vehiculew} onPress={()=>setgender('Mr')}  >
                    <Radio selected={vehiculew}   />
                    <Text onPress={()=>setvehiculew(true)} style={{ marginLeft: 5 }}>Oui</Text>
                </Item>

                <Item style={{flexDirection: 'row'}} selected={!vehiculew} onPress={()=>setgender('Mme')} >
                    <Radio selected={!vehiculew}  />
                    <Text onPress={()=>setvehiculew(false)} style={{ marginLeft: 5 }}>Non</Text>
                </Item>

            </View>

            <Item  style={[styles.listItemForm]}>
                <Picker
                    note
                    mode="dropdown"
                    selectedValue={usage}
                    itemStyle={[styles.dropdownItem]}
                    style={[styles.dropDown]}
                    onValueChange={(i)=>setusage(i)}
                >
                    <Picker.Item label="Usage" value="Usage" />
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="C1" value="C1" />
                </Picker>
            </Item>


            <Item style={[styles.listItemForm]} >
                <Picker
                    note
                    mode="dropdown"
                    selectedValue={marque}
                    onValueChange={(i)=>setmarque(i)}
                    itemStyle={[styles.dropdownItem]}
                    style={[styles.dropDown]}
                     >
                    <Picker.Item label="Marque" value="0" />
                    <Picker.Item label="Audi" value="Audi" />
                    <Picker.Item label="Alfa romeo" value="Alfa romeo" />
                    <Picker.Item label="BMW" value="BMW" />
                    <Picker.Item label="CHANA" value="CHANA" />
                    <Picker.Item label="CITROEN" value="CITROEN" />


                </Picker>
            </Item>



            <Item style={[styles.listItemForm]} >
                <Input placeholder='Puissance' />
            </Item>
            <Item style={[styles.listItemForm]} >
                <Input placeholder='Valeur a neuf' />
            </Item>
            <Item style={[styles.listItemForm]} >
                <Input placeholder='Valeur venal' />
            </Item>

            <Item style={[styles.listItemForm]} >
                <Input placeholder='Valeur des glaces' />
            </Item>


            <Button onPress={() => { GoToNextStep(2) }} full style={{ color: '#fff', margin: 16, backgroundColor: ColorBack, borderRadius: 6 }}>
                <Text style={{ color: '#fff' }} > SUIVANT </Text>
            </Button>
        </View>

    )
    const renderFormComponent3 = () => {


    const list = listGaranties.map((item, index) => {
           
            return (
                <Item  key={index} style={[styles.listItemForm]} icon>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                        <Text >
                        {item.name}
                        </Text>
                        <Switch value={item.choosed} onValueChange={()=>toggleSwitch(item)} />
                    </View>
                </Item>
                

            )
        })

        return <Content>
            {list}
            <Button onPress={() => { showRecap(); }} full style={{ color: '#fff', margin: 16, backgroundColor: ColorBack, borderRadius: 6 }}>
                <Text style={{ color: '#fff' }} > Valider </Text>
            </Button>
        </Content>


    }


    const renderFormComponents = () => {

       handleInput(currentPosition);

        switch (currentPosition) {
            case 0:
                return renderFormComponent1()
                break;
            case 1:
                return renderFormComponent2()
                break;

            case 2:
                return renderFormComponent3()
                break;

            default:
                break;
        }

    }

    return (
        <>

                { saving ? (
                      <ActivityIndicator size="large" color='#f6b932' style={[global.indicator]} />
                    ):(
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Content style={{ width: '100%', padding: 15, }} >
                    {renderFormComponents()}
                    <Dialog
                            width={'80%'}
                            visible={visibleModal}
                            dialogTitle={<DialogTitle  title="Devis" />}
                            
                         
                        >
                            <DialogContent style={{padding:10,}}>
                                   <Text type='bold' >Vous serez Appele par un de nos conseillers  </Text>
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
                                <View style={{padding:4,backgroundColor:'#f6d147',width:25,height:25,borderRadius:50}}>
                                        <MaterialCommunityIcons name='phone' size={17} color='#242c62' />
                                </View>
                                <Text type='bold' style={{fontSize:13,color:'#242c62',marginLeft:3}}>+242 06 494 49 96</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
                                <View style={{padding:4,backgroundColor:'#f6d147',width:25,height:25,borderRadius:50}}>
                                        <MaterialCommunityIcons name='email' size={17} color='#242c62' />
                                </View>
                                <Text type='bold' style={{fontSize:13,color:'#242c62',marginLeft:3}}>contact@excelenciaassurance.com</Text>
                            </View>

                            <Button full style={{backgroundColor:'#242c62',marginTop:15,borderRadius:6}}
                                onPress={() => { saveDevis(); } }>
                                <Text style={{color:'#fff'}}>OK</Text>
                            </Button>
                                   
                            </DialogContent>
                        </Dialog>
                </Content>
            </View>

                    )}
        </>

    )

}

