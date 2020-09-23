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
import AutoScreen from './autoScreen'
import HabiatationScreen from './habiatationScreen'


const appId = "1047121222092614"

// export default class LoginScreen extends Component {
export default function deviScreen({ navigation }) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [selectedIndex, setselectedIndex] = useState(0);
    const [currentPosition, setcurrentPosition] = useState(0);
    const [ColorBack, setColorBack] = useState('#30336b');

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

    const handleInputValue = (val) => {
       setcurrentPosition(val)
    }

    const customStyles = {
        stepIndicatorSize: 35,
        currentStepIndicatorSize: 43,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#ffa502',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#ffa502',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#ffa502',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#ffa502',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#ffa502',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 15,
        currentStepLabelColor: '#ffa502',
    }


    // render() {
    return (
        <>
            <Header Isreturn='true' name="Home" openDrawer={navigation} title='Simuler un devis' color={ColorBack} />

            <View style={{ flex: 1, flexDirection: 'column' }}>

                <View style={{ width: '100%', height: 170, backgroundColor: ColorBack }} >
                    <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 10, marginTop: 10 }} >

                        <SegmentedControl
                            values={['Auto', 'Habitation']}
                            selectedIndex={selectedIndex}
                            backgroundColor={'#ffa502'}
                            // tintColor={'red'}
                            fontSize={22}
                            onChange={(event) => {
                                setselectedIndex(event.nativeEvent.selectedSegmentIndex);
                                if (selectedIndex == 0) {
                                    setColorBack('#6D214F')
                                } else (
                                    setColorBack('#30336b')
                                )

                            }}
                        />
                    </View>

                    <View style={{ padding: 10 }} >

                        <StepIndicator
                            customStyles={customStyles}
                            stepCount={3}
                            currentPosition={currentPosition}
                            labels={labels}
                        />

                    </View>
                </View>
                <Content style={{ width: '100%', padding: 15, }} >

                    {selectedIndex == 0
                        ? <AutoScreen handleInput={handleInputValue} ColorBack={ColorBack} />
                        : <HabiatationScreen handleInput={handleInputValue} ColorBack={ColorBack} />

                    }
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