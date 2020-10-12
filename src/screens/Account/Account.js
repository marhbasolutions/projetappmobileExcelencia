import React, { useState } from 'react';
import { StyleSheet,  View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, List, ListItem, Thumbnail, Left, Body, Icon, Right, Button } from 'native-base';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles";
import global from '../../styles/index';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomFooter from '../../components/Footer/CustomFooter';

import Text from '../../components/CustomText/CustomText';


const appId = "1047121222092614"

// export default class LoginScreen extends Component {
export default function accountScreen({ navigation }) {
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
                <Content style={[global.paddingContainer]}>

                    <FontAwesome style={[{ alignSelf: 'center'},global.marginTop]} color={'#30336b'} name="handshake-o" size={55} />

                    <Text style={[global.h1]}>Profil</Text>

                <View style={[global.marginTop]}>
                <List>
                        <ListItem selected>
                            <Left>
                                <Text>Nom</Text>
                            </Left>
                            <Body>
                                <Text>Mohamed</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem selected>
                            <Left>
                                <Text>Preom</Text>
                            </Left>
                            <Body>
                                <Text>Ghazdali</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem selected>
                            <Left>
                                <Text>Email</Text>
                            </Left>
                            <Body>
                                <Text>Mohamed.ghadali@gmail.com</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem selected>
                            <Left>
                                <Text>Tel</Text>
                            </Left>
                            <Body>
                                <Text>0658455633</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem selected>
                            <Left>
                                <Text>Mot de pass</Text>
                            </Left>
                            <Body>
                                <Text>********</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem selected>
                            <Left>
                                <Text>Profession</Text>
                            </Left>
                            <Body>
                                <Text>Medecin</Text>
                            </Body>
                        </ListItem>
                    </List>


                    <List>
                        <ListItem selected>
                            <Left>
                                <Text>N° de client</Text>
                            </Left>
                            <Body>
                                <Text>12343</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem selected>
                            <Left>
                                <Text>Entreprise</Text>
                            </Left>
                            <Body>
                                <Text>Exlencia</Text>
                            </Body>
                        </ListItem>
                    </List>
               
                </View>
                    
                </Content>

               

            </Container>
        </>
    )

}

