import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Header from '../HeaderScreen';
import { Ionicons } from '@expo/vector-icons';
import {
    Form, Grid, Col, Container, Content, Footer, FooterTab, Icon, Input, Item, Switch,
    Button, Segment, Body, Radio, Picker, ListItem, Left, Right
} from 'native-base';

import Carousel from "@rhysforyou/react-native-carousel";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./style";
import DateTimePicker from '@react-native-community/datetimepicker';
import SegmentedControl from '@react-native-community/segmented-control';
import StepIndicator from 'react-native-step-indicator';
import { CheckBox } from 'react-native-elements'


const appId = "1047121222092614"

// export default class LoginScreen extends Component {
export default function deviScreen({ navigation ,handleInput,ColorBack}) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [selectedIndex, setselectedIndex] = useState(0);
    const [currentPosition, setcurrentPosition] = useState(0);

    const labels = ["Informations personneles", "Informations de vehicule", "Choix des garanties"];

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const GoToNextStep = (index) => {
        setcurrentPosition(index)
    };


    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const listGaranties = [
        'RESPONSABILITE CIVILE', 'DEFENSE ET RECOURS', 'VOL', 'INCEDIE', 'BRIS DE GLACE', 'DOMMAGE COLLESION',
        'TIERCE', 'PERSONNES TRANSPORTEES', 'EVCAT RC AUTO', 'EVCAT DOMMAGE AUTO'
    ]

    const customStyles = {
        stepIndicatorSize: 35,
        currentStepIndicatorSize: 43,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#27ae60',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#27ae60',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#27ae60',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#27ae60',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#27ae60',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 15,
        currentStepLabelColor: '#27ae60',
    }


    const renderFormComponent1 = () => (


        <View  >
            {/* <FontAwesome5 style={{ alignSelf: 'center', marginTop: 18 }} color={ColorBack} name="calculator" size={44} /> */}



            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15
            }}>

                <View style={{ width: '40%', }} >
                    <Text style={{ fontSize: 18 }}>Civilite</Text>
                </View>

                <View style={{
                    width: '30%', flexDirection: 'row',
                }} >
                    <Radio selected={true} />
                    <Text style={{ marginLeft: 5 }}>Monsieur</Text>
                </View>

                <View style={{
                    width: '30%', flexDirection: 'row',

                }} >
                    <Radio selected={false} />
                    <Text style={{ marginLeft: 5 }}>Madame</Text>
                </View>


            </View>

            <Item style={styles.loginFormTextInput} >
                <Picker
                    note
                    mode="dropdown"
                    style={{ width: 120 }}
                    selectedValue={0}
                // onValueChange={this.onValueChange.bind(this)}
                >
                    <Picker.Item label="Profession" value="key0" />
                    <Picker.Item label="Ingenieur" value="key1" />
                    <Picker.Item label="Medecin" value="key2" />
                    <Picker.Item label="Professeur" value="key3" />
                </Picker>
            </Item>

            <Item style={styles.loginFormTextInput} >
                <Input placeholder='Nom' />
            </Item>
            <Item style={styles.loginFormTextInput} >
                <Input placeholder='Prénom' />
            </Item>
            <Item style={styles.loginFormTextInput} >
                <Input placeholder='GSM' />
            </Item>

            <Item style={styles.loginFormTextInput} >
                <Input placeholder='Email' />
            </Item>


            <View style={{
                width: '100%', flexDirection: 'row', alignItems: 'center'
            }} >
                <CheckBox selected={true} />
                <Text >J'ai lut et accepter les conditions generales d'utilisateur </Text>
            </View>



            <Button onPress={() => { GoToNextStep(1) }} full style={{ color: '#fff', margin: 16, backgroundColor: ColorBack, borderRadius: 6 }}>
                <Text style={{ color: '#fff' }} > SUIVANT </Text>
            </Button>


        </View>

    )
    const renderFormComponent2 = () => (


        <View  >
            {/* <FontAwesome5 style={{ alignSelf: 'center', marginTop: 18 }} color={ColorBack} name="calculator" size={44} /> */}



            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15
            }}>

                <View style={{ width: '60%', }} >
                    <Text style={{ fontSize: 18 }}>vehicule WW</Text>
                </View>

                <View style={{
                    width: '20%', flexDirection: 'row',
                }} >
                    <Radio selected={true} />
                    <Text style={{ marginLeft: 5 }}>Oui</Text>
                </View>

                <View style={{
                    width: '20%', flexDirection: 'row',

                }} >
                    <Radio selected={false} />
                    <Text style={{ marginLeft: 5 }}>Nom</Text>
                </View>


            </View>

            <Item style={styles.loginFormTextInput} >
                <Picker
                    note
                    mode="dropdown"
                    style={{ width: 120 }}
                    selectedValue={0}
                // onValueChange={this.onValueChange.bind(this)}
                >
                    <Picker.Item label="Usage" value="key0" />
                    <Picker.Item label="A" value="key1" />
                    <Picker.Item label="C1" value="key2" />
                </Picker>
            </Item>


            <Item style={styles.loginFormTextInput} >
                <Picker
                    note
                    mode="dropdown"
                    style={{ width: 120 }}
                    selectedValue={0}
                // onValueChange={this.onValueChange.bind(this)}
                >
                    <Picker.Item label="Marque" value="key0" />
                    <Picker.Item label="Audi" value="key1" />
                    <Picker.Item label="Alfa romeo" value="key2" />
                    <Picker.Item label="BMW" value="key1" />
                    <Picker.Item label="CHANA" value="key1" />
                    <Picker.Item label="CITROEN" value="key1" />


                </Picker>
            </Item>



            <Item style={styles.loginFormTextInput} >
                <Input placeholder='Puissance' />
            </Item>
            <Item style={styles.loginFormTextInput} >
                <Input placeholder='Valeur a neuf' />
            </Item>
            <Item style={styles.loginFormTextInput} >
                <Input placeholder='Valeur venal' />
            </Item>

            <Item style={styles.loginFormTextInput} >
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
                <ListItem icon>
                    <Left>
                        <Text>{item}</Text>
                    </Left>
                    <Body>
                        <Text> </Text>

                    </Body>
                    <Right>
                        <Switch value={false} />
                    </Right>
                </ListItem>

            )
        })

        return <Content>
            {list}
            <Button onPress={() => { GoToNextStep(0) }} full style={{ color: '#fff', margin: 16, backgroundColor: ColorBack, borderRadius: 6 }}>
                <Text style={{ color: '#fff' }} > SUIVANT </Text>
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



    // render() {
    return (
        <>

            <View style={{ flex: 1, flexDirection: 'column' }}>


                <Content style={{ width: '100%', padding: 15, }} >
                    {renderFormComponents()}
                </Content>
            </View>


        </>

    )

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