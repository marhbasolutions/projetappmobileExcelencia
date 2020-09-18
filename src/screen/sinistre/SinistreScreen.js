import React, { useState } from 'react';
import { StyleSheet,  View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Header from '../HeaderScreen';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, List, ListItem, Thumbnail, Left, Body,  Right } from 'native-base';

import Carousel from "@rhysforyou/react-native-carousel";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import FooterCompement from '../FooterScreen';
import Text from '../../components/CustomText';
import { Icon , Button } from 'react-native-elements';
import styles from './style'



const appId = "1047121222092614"

export default function SinistreScreen({ navigation }) {
    const [activeSinistre, setActiveSinistre] = useState(0);

    // render() {
    return (
        <>
            <Container>
                <Header name="Sinistre"  title="Nouvelle Pre Declaration" Isreturn={true} openDrawer={navigation} />
                <Content>
                    <View style={{backgroundColor:'#30336b',width:'100%',height:20}}></View>
                    <TouchableOpacity activeOpacity={0.9} onPress={()=>alert('Clicked')} >
                    <View style={styles.topSearchBar}>
                    <Icon
                    style={{margin:3}}
                    type='font-awesome'
                        name='file'
                        color='#f6b932' />
                        <View style={styles.textTopSearchBar}>
                            <Text style={{fontSize:17,lineHeight:20}}>Contrat non valide</Text>
                            <Text type='light' style={{lineHeight:20}} >Immatriculation</Text>
                        </View>
                        <View style={styles.rightIconSearch}>
                            <Text style={{margin:6,fontSize:16}}>N°</Text>
                            <Icon
                            type='font-awesome'
                            name='random'
                            color='#f6b932' />
                        </View>
                    </View>
                    </TouchableOpacity>

                    <View>
                        <Text type='bold' style={{paddingLeft:8}} >Choisissez le type de sinistre</Text>

                        <View style={styles.typeContainer}>

                        <TouchableOpacity onPress={()=>setActiveSinistre(1)} style={[styles.type,activeSinistre==1 ? {backgroundColor:'#30336b'}:null ]} activeOpacity={1}>
                         
                            <Icon
                            size={40}
                            type='material-community'
                            name='car-multiple'
                            color='#f6b932' />
                            <Text style={activeSinistre==1 ? {color:'white'}:null} >Accident</Text>
                      
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>setActiveSinistre(2)} style={[styles.type,activeSinistre==2 ? {backgroundColor:'#30336b'}:null ]} activeOpacity={1}>
                            <Icon
                            size={40}
                            type='font-awesome'
                            name='user-secret'
                            color='#f6b932' />
                            <Text style={activeSinistre==2 ? {color:'white'}:null} >Vol</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.typeContainer}>

                            <TouchableOpacity onPress={()=>setActiveSinistre(3)} style={[styles.type,activeSinistre==3 ? {backgroundColor:'#30336b'}:null ]} activeOpacity={1}>
                            <Icon
                            size={40}
                            type='material-community'
                            name='car-electric'
                            color='#f6b932' />
                            <Text style={activeSinistre==3 ? {color:'white'}:null}>Bris de glace</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>setActiveSinistre(4)} style={[styles.type,activeSinistre==4 ? {backgroundColor:'#30336b'}:null ]} activeOpacity={1}>
                            <Icon
                            size={40}
                            type='material-community'
                            name='fire-extinguisher'
                            color='#f6b932' />
                            <Text style={activeSinistre==4 ? {color:'white'}:null} >Incendie</Text>
                            </TouchableOpacity>
                        </View>
                        <Button
                        buttonStyle={[styles.buttonConfirm,activeSinistre!=0 ? {backgroundColor:'#30336b'}:null]}
                        title="Confirmer"
                        onPress={()=>alert('Clicked')}
                        />
                    </View>
             


                </Content>
                <FooterCompement name="Sinistre" openDrawer={navigation} />
            </Container>
        </>
    )

}

