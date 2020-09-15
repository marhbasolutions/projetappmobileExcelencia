import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Header from '../HeaderScreen';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Footer, FooterTab, Icon, Input, Item, Button } from 'native-base';

import Carousel from "@rhysforyou/react-native-carousel";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./style";
import DateTimePicker from '@react-native-community/datetimepicker';


const appId = "1047121222092614"

// export default class LoginScreen extends Component {
export default function guideScreen({ navigation }) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    // render() {
    return (
        <>
            <Header Isreturn='true' name="Home" openDrawer={navigation} />

            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ width: '100%', height: '40%', backgroundColor: '#30336b' }} >

                    <Text style={styles.titleFirst}>Guider rensigner</Text>

                </View>
                <View style={{ width: '100%', height: '60%', padding: 15, }} >

                    <View style={styles.divForm}  >
                        <FontAwesome style={{ alignSelf: 'center', marginTop: 18 }} color={'#30336b'} name="handshake-o" size={44} />

                        <Content style={{ marginTop: 22, padding: 15 }}>

                            <Text style={{ fontSize: 16, marginBottom: 8 }} >Excelencia Assurances est un Agent Général de la Compagnie NSIA Assurances au Congo Brazzaville.</Text>


                            <Text>Conçu et développer par CarterWeb Agency, CWA en sigle, un agence spécialisé dans la création et
                            développement des produits web ( site internet, application et logiciels), aussi dans le web Marketing
                              (stratégies com, Community Management, et autres…) basé à Casablanca au Maroc.</Text>
                            <Text>Conçu et développer par CarterWeb Agency, CWA en sigle, un agence spécialisé dans la création et
                            développement des produits web ( site internet, application et logiciels), aussi dans le web Marketing
                              (stratégies com, Community Management, et autres…) basé à Casablanca au Maroc.</Text>
                            <Text>Conçu et développer par CarterWeb Agency, CWA en sigle, un agence spécialisé dans la création et
                            développement des produits web ( site internet, application et logiciels), aussi dans le web Marketing
                              (stratégies com, Community Management, et autres…) basé à Casablanca au Maroc.</Text>

                        </Content>

                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}


                    </View>

                </View>
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