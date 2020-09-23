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

export default function PreSinistreScreen({ navigation }) {


    // render() {
    return (
        <>
            <Container>
                <Header name="PreSinistre"  title="Espace Sinistre" Isreturn={true} openDrawer={navigation} />
                <Content>
                    <View style={{backgroundColor:'#30336b',width:'100%',height:20}}></View>

                    <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('Sinistre')} >
                        <View style={[styles.topSearchBar,{padding:8}]}>
                            <View style={{backgroundColor:'#30336b12',padding:3,borderRadius:100,marginRight:4}}>
                        <Icon
                        style={{margin:3}}
                        type='material-community'
                            name='biathlon'
                            color='#f6b932' />
                            </View>
                            <Text style={{fontSize:17,lineHeight:20}}>Je viens d'avoir un sinistre </Text>
            
                        </View>
                    </TouchableOpacity>
                



                    <TouchableOpacity activeOpacity={0.9} style={{marginTop:6}} onPress={()=>navigation.navigate('Sinistre')} >
                        <View style={[styles.topSearchBar,{padding:8}]}>
                            <View style={{backgroundColor:'#30336b12',padding:3,borderRadius:100,marginRight:4}}>
                        <Icon
                        style={{margin:3}}
                        type='material-community'
                            name='file-document'
                            color='#f6b932' />
                            </View>
                            <Text style={{fontSize:17,lineHeight:20}}>Suivre mes sinistres </Text>
            
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.9} style={{marginTop:6}} onPress={()=>navigation.navigate('Sinistre')} >
                        <View style={[styles.topSearchBar,{padding:8}]}>
                            <View style={{backgroundColor:'#30336b12',padding:3,borderRadius:100,marginRight:4}}>
                        <Icon
                        style={{margin:3}}
                        type='material-community'
                            name='clipboard-plus'
                            color='#f6b932' />
                            </View>
                            <Text style={{fontSize:17,lineHeight:20}}>N° d'urgence</Text>
            
                        </View>
                    </TouchableOpacity>
                   
                </Content>
                <FooterCompement name="PreSinistre" openDrawer={navigation} />
            </Container>
        </>
    )

}

