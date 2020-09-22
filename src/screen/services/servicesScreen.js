

import React, { Component } from "react";
import { StyleSheet,  View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Header from './../HeaderScreen';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Footer, FooterTab,  Button } from 'native-base';
import Carousel from "@rhysforyou/react-native-carousel";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterCompement from './../FooterScreen';
import { LinearGradient } from 'expo-linear-gradient';

import {Button as ButtonNative, Icon} from 'react-native-elements';

import Text from '../../components/CustomText';






const { width } = Dimensions.get('window');
const image1 = { uri: "https://www.alwihdainfo.com/photo/art/grande/29285521-28425818.jpg" };
const image2 = { uri: "https://www.idiotiki-syntaxi.gr/wp-content/uploads/2018/04/shutterstock_628366121_Saving-1024x610.jpg" };
const image3 = { uri: "https://www.top-faq.com/wp-content/uploads/2020/07/assurance-vie.jpg" };
const image4 = { uri: "https://www.bj-assurances.be/wp-content/uploads/2019/04/BJ_Assurance_familiale_header.jpg" };

export default class servicesScreen extends Component {

   

    constructor(props) {
        super(props);
        this.index = 0;
    }

    

    componentDidMount() {
        // setTimeout(() => { this.scrollView.scrollTo({ x: -30 }) }, 1) // scroll view position fix
    }


    render() {

        return (

            <Container>



                <Header name="Home" openDrawer={this.props.navigation} />

                <View style={{ flex: 1, flexDirection: 'column',  backgroundColor: '#30336b',padding:8 }}>
                         <Text type='bold' style={styles.titleFirst}>NOS PRODUITS ET SERVICES </Text>
                                    <Content style={{ flex:1, padding: 15,backgroundColor:'white',borderRadius:10}} >

                                    <ScrollView style={{marginBottom:20}}>

                                    <TouchableOpacity>
                                    <ImageBackground source={image4} style={{width:'100%',height:120,marginTop:10}} imageStyle={{ borderRadius: 6 }}>

                                    <LinearGradient

                                        // Button Linear Gradient
                                        colors={['#30336b10', '#726a95']}
                                        start={{ x: 0.9, y: 0 }}
                                        style={{ padding: 15, alignItems: 'center', borderRadius: 5,height:'100%' }}>

                                        <View  style={{ position:'absolute',bottom:10,left:10,width:'80%',justifyContent:'center'}}>
                                        <FontAwesome5 color={'#fff'}   name="user" size={34} />
                                            <Text type='bold' style={{backgroundColor:'#30336b',fontSize:17,padding:7,paddingLeft:14,color:'white',marginTop:3}}>Assurance Vie</Text></View>
                
                                            </LinearGradient>
                                    </ImageBackground>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                    <ImageBackground source={image4} style={{width:'100%',height:120,marginTop:10}} imageStyle={{ borderRadius: 6 }}>

                                    <LinearGradient

                                // Button Linear Gradient
                                colors={['#30336b10', '#709fb0']}
                                start={{ x: 0.9, y: 0 }}
                                style={{ padding: 15, alignItems: 'center', borderRadius: 5,height:'100%' }}>
                                        <View  style={{ position:'absolute',bottom:10,left:10,width:'80%',justifyContent:'center'}}>
                                        <Icon
                                            type='material-community'
                                            name={'security'}
                                            size={34}
                                            style={{alignSelf:'flex-start'}}
                                            color="white"
                                            />
                                            <Text type='bold' style={{backgroundColor:'#30336b',fontSize:17,padding:7,paddingLeft:14,color:'white',marginTop:3}}>Assurances Santé</Text></View>
                                            </LinearGradient>

                                    </ImageBackground>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                    <ImageBackground source={image4} style={{width:'100%',height:120,marginTop:10}} imageStyle={{ borderRadius: 6 }}>

                                    <LinearGradient

                                        // Button Linear Gradient
                                        colors={['#30336b10', '#ad9d9d']}
                                        start={{ x: 0.9, y: 0 }}
                                        style={{ padding: 15, alignItems: 'center', borderRadius: 5,height:'100%' }}>
                                        <View  style={{ position:'absolute',bottom:10,left:10,width:'80%',justifyContent:'center'}}>
                                        <Icon
                                            type='material-community'
                                            name={'car'}
                                            size={34}
                                            style={{alignSelf:'flex-start'}}
                                            color="white"
                                            />
                                            <Text type='bold' style={{backgroundColor:'#30336b',fontSize:17,padding:7,paddingLeft:14,color:'white',marginTop:3}}>Gestion des Sinsitres</Text></View>
                                            </LinearGradient>

                                    </ImageBackground>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                    <ImageBackground source={image4} style={{width:'100%',height:120,marginTop:10}} imageStyle={{ borderRadius: 6 }}>

                                    <LinearGradient

                                        // Button Linear Gradient
                                        colors={['#30336b10', '#9d65c9']}
                                        start={{ x: 0.9, y: 0 }}
                                        style={{ padding: 15, alignItems: 'center', borderRadius: 5,height:'100%' }}>
                                        <View  style={{ position:'absolute',bottom:10,left:10,width:'80%',justifyContent:'center'}}>
                                        <Icon
                                            type='material-community'
                                            name={'home'}
                                            size={34}
                                            style={{alignSelf:'flex-start'}}
                                            color="white"
                                            />
                                            <Text type='bold' style={{backgroundColor:'#30336b',fontSize:17,padding:7,paddingLeft:14,color:'white',marginTop:3}}>Assurances Non Vie</Text></View>
                                            </LinearGradient>

                                    </ImageBackground>
                                    </TouchableOpacity>


                                    <TouchableOpacity>
                                    <ImageBackground source={image4} style={{width:'100%',height:120,marginTop:10}} imageStyle={{ borderRadius: 6 }}>

                                    <LinearGradient
                                        // Button Linear Gradient
                                        colors={['#30336b10', '#7e8a97']}
                                        start={{ x: 0.9, y: 0 }}
                                        style={{ padding: 15, alignItems: 'center', borderRadius: 5,height:'100%' }}>
                                        <View  style={{ position:'absolute',bottom:10,left:10,width:'80%',justifyContent:'center'}}>
                                        <Icon
                                            type='material-community'
                                            name={'briefcase-check'}
                                            size={34}
                                            style={{alignSelf:'flex-start'}}
                                            color="white"
                                            />
                                            <Text type='bold' style={{backgroundColor:'#30336b',fontSize:17,padding:7,paddingLeft:14,color:'white',marginTop:3}}>Assurance Vie</Text></View>
                
                                            </LinearGradient>
                                    </ImageBackground>
                                    </TouchableOpacity>
                                    

                                    </ScrollView>

                                        

                                               
                                            {/* </Content> */}
                                        </Content>


                




                </View>


                <FooterCompement name="Services" openDrawer={this.props.navigation} />

            </Container>



        );
    };


}

const styles = StyleSheet.create({
    container: {

        // flex:1,
        // height:'100%'
    },
    div: {

        width: '50%', height: 90, padding: 5,
    },


    divToutch: {

        width: '100%', height: '100%', backgroundColor: '#f6b93b', padding: 8, borderRadius: 6,
        padding: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.9,
        shadowRadius: 15,
    },


    titleScroll2: {
        fontSize: 18,
        color: '#30336b',
    },
    descScroll2: {
        fontSize: 13,
        color: '#30336b',

    },
    titleDiv: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',

    },
    titleFirst: {
        fontSize: 22,
        color: '#fff',
        paddingLeft: 10,
        marginBottom: 16

    },
    title1: {

        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        // opacity: 1,
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
        textShadowColor: 'black'
    },
    title2: {

        fontSize: 16,
        // fontWeight: 'bold',
        color: '#fff',
        // opacity: 1,
        marginTop: 8,
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
        textShadowColor: 'black'
    },
    loginButton: {
        height: 53,

        backgroundColor: '#f9db4d',

    },
    view: {
        backgroundColor: '#666',
        // width: width - 80,
        margin: 10,
        height: 150,
        borderRadius: 10,
        //paddingHorizontal : 30
    }, view2: {
        backgroundColor: '#666',
        width: '100%',
        marginBottom: 15,
        // margin: 10,
        // top: 60,
        height: 120,
        borderRadius: 10,
        //paddingHorizontal : 30
    },
    viewChild: {
        // backgroundColor: '#666',
        // opacity: 0.9,
        // padding: 10,

        // width: '100%',
        height: '100%',
    },
    viewChild2: {
        // opacity: 0.9,
        borderRadius: 10,

        flex: 1,
        height: '90%',
        backgroundColor: "white",
        // padding: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    image: {
        flex: 1,
        opacity: 0.8,
        resizeMode: "cover",
        justifyContent: "center",
        borderRadius: 10,

    }, imageDiv: {
        flex: 1,
        opacity: 0.8,
        resizeMode: "cover",
        justifyContent: "center",
        borderRadius: 10,

    },
});