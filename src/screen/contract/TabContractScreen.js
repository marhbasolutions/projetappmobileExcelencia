import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Header from '../HeaderScreen';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';

import Carousel from "@rhysforyou/react-native-carousel";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./style";
import DateTimePicker from '@react-native-community/datetimepicker';
import FooterCompement from './../FooterScreen';


const appId = "1047121222092614"

// export default class LoginScreen extends Component {
export default function TabContractScreen({ navigation }) {
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
            <Container>

                <Header name="Home" openDrawer={navigation} />

                <Content>
                    <List>
                    <ListItem thumbnail>
                            <Left>
                                <FontAwesome5 style={{ alignSelf: 'center', marginTop: 18 }} color={'#f9ca24'} name="file-contract" size={44} />
                            </Left>
                            <Body>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Assurance de vie</Text>
                                <Text note numberOfLines={1}>12/12/2020</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>Afficher</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail>
                            <Left>
                                <FontAwesome5 style={{ alignSelf: 'center', marginTop: 18 }} color={'#f9ca24'} name="file-contract" size={44} />
                            </Left>
                            <Body>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Assurance moto</Text>
                                <Text note numberOfLines={1}>12/12/2020</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>Afficher</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail>
                            <Left>
                                <FontAwesome5 style={{ alignSelf: 'center', marginTop: 18 }} color={'#f9ca24'} name="file-contract" size={44} />
                            </Left>
                            <Body>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Assurance maiosn</Text>
                                <Text note numberOfLines={1}>12/12/2020</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>Afficher</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail>
                            <Left>
                                <FontAwesome5 style={{ alignSelf: 'center', marginTop: 18 }} color={'#f9ca24'} name="file-contract" size={44} />
                            </Left>
                            <Body>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Assurance de vie</Text>
                                <Text note numberOfLines={1}>12/12/2020</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>Afficher</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail>
                            <Left>
                                <FontAwesome5 style={{ alignSelf: 'center', marginTop: 18 }} color={'#f9ca24'} name="file-contract" size={44} />
                            </Left>
                            <Body>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Assurance de vie</Text>
                                <Text note numberOfLines={1}>12/12/2020</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>Afficher</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail>
                            <Left>
                                <FontAwesome5 style={{ alignSelf: 'center', marginTop: 18 }} color={'#f9ca24'} name="file-contract" size={44} />
                            </Left>
                            <Body>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Assurance de vie</Text>
                                <Text note numberOfLines={1}>12/12/2020</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>Afficher</Text>
                                </Button>
                            </Right>
                        </ListItem>



                    </List>
                </Content>
                <FooterCompement name="TabContract" openDrawer={navigation} />

            </Container>
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