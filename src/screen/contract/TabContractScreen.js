import React, { useState } from 'react';
import { StyleSheet,  View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
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

import { List as LST,ReactNativePaper } from 'react-native-paper';

import Text from '../../components/CustomText';

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

                <LST.Section title="Les contracts">
                <LST.Accordion
                    theme={{ colors: { primary: '#30336b' }}}
                    titleStyle={{fontFamily:'Poppins-Bold'}}
                    title="Assurance Vie"
                    left={props => <LST.Icon {...props}  icon="folder" />}>
                    <LST.Item
                    style={{fontFamily:'Poppins-Medium'}}
                        titleStyle={{fontFamily:'Poppins-Medium',fontSize:13}}
                        title="NSIA RETRAITE (Particulier)"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                    <LST.Item
                    style={{fontFamily:'Poppins-Medium'}}
                        titleStyle={{fontFamily:'Poppins-Medium',fontSize:13}}
                        title="NSIA PREVOYANCES (Particulier)"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                    <LST.Item
                    style={{fontFamily:'Poppins-Medium'}}
                        titleStyle={{fontFamily:'Poppins-Medium',fontSize:13}}
                        title="NSIA ETUDES (Particulier)"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                </LST.Accordion>

                <LST.Accordion
                    theme={{ colors: { primary: '#30336b' }}}
                    titleStyle={{fontFamily:'Poppins-Bold'}}
                    title="Assurances Auto & Moto"
                    left={props => <LST.Icon {...props}  icon="folder" />}>
                    <LST.Item
                    style={{fontFamily:'Poppins-Medium'}}
                        titleStyle={{fontFamily:'Poppins-Medium',fontSize:13}}
                        title="NSIA Auto (Particulier)"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                </LST.Accordion>

                <LST.Accordion
                    theme={{ colors: { primary: '#30336b' }}}
                    titleStyle={{fontFamily:'Poppins-Bold'}}
                    title="Assurances Santé"
                    left={props => <LST.Icon {...props}  icon="folder" />}>
                    <LST.Item
                    style={{fontFamily:'Poppins-Medium'}}
                        titleStyle={{fontFamily:'Poppins-Medium',fontSize:13}}
                        title="NSIA FORFAIT HOSPITALIER"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                    <LST.Item
                    style={{fontFamily:'Poppins-Medium'}}
                        titleStyle={{fontFamily:'Poppins-Medium',fontSize:13}}
                        title="NSIA SANTÉ SMO"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                </LST.Accordion>

                

                
                </LST.Section>

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