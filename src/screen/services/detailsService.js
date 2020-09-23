

import React, { Component } from "react";
import { StyleSheet,  View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { Container, Content, Footer, FooterTab,  Button } from 'native-base';
import Carousel from "@rhysforyou/react-native-carousel";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterCompement from '../FooterScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './../HeaderScreen';

import {Button as ButtonNative, Icon} from 'react-native-elements';

import Text from '../../components/CustomText';






const { width } = Dimensions.get('window');
const image1 = { uri: "http://excel-assurance.com/wp-content/uploads/2019/08/Assurances1.jpg" };
const image2 = { uri: "http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiasmo.png" };
const image3 = { uri: "http://excel-assurance.com/wp-content/uploads/2019/09/AdobeStock_209417593-854x570-854x550.jpeg" };
const image4 = { uri: "https://www.bj-assurances.be/wp-content/uploads/2019/04/BJ_Assurance_familiale_header.jpg" };
const image5 = { uri: "http://excel-assurance.com/wp-content/uploads/2019/08/blackdoctor_baby.jpg"};
const image6 = { uri: "http://excel-assurance.com/wp-content/uploads/2019/08/1-tnzUx8ScCvGLA2dU2HNAYA.jpeg"};

export default class detailsService extends Component {
    
    constructor(props) {
        super(props);
        this.index = 0;
    }



    render() {

        return (

            <Container>



            <Header name="detailsService"  title="Assurance sante" Isreturn={true} openDrawer={this.props.navigation} />

                <View style={{ flex: 1, flexDirection: 'column',  backgroundColor: '#30336b',}}>
                       
                                    <Content style={{ flex:1,backgroundColor:'white',width:'100%'}} >

                                    
                                    <LinearGradient

                                        // Button Linear Gradient
                                        colors={['#30336b10', '#1aa6b7']}
                                        start={{ x: 0.9, y: 0 }}
                                        style={{ padding: 15,  alignItems: 'center', height:100 }}>

                                        <View  style={{ position:'absolute',bottom:10,left:10,width:'80%',justifyContent:'center'}}>
                                        <FontAwesome5 color={'#fff'}   name="heartbeat" size={34} />
                                            <Text type='bold' style={{fontSize:23,padding:7,paddingLeft:14,color:'white',marginTop:3,textTransform: 'uppercase'}}>Assurance Sante</Text></View>

                                        </LinearGradient>
                                      

                                    <ScrollView style={{marginBottom:20,padding:4}}>

                                    <ImageBackground source={{uri:'http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiahospitalier.png'}} style={{width:'100%',height:200,marginTop:10}} imageStyle={{ borderRadius: 6 }}>
                                   
                                            <View  style={{ position:'absolute',bottom:10,left:10,width:'80%',justifyContent:'center'}}>
                                            
                                                <Text type='bold' style={{backgroundColor:'#30336b',fontSize:17,padding:7,paddingLeft:14,color:'white',marginTop:3,textTransform: 'uppercase'}}>NSIA FORFAIT HOSPITALIER</Text></View>
                                            
                                                </ImageBackground>


                                                <ImageBackground source={{uri:'http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiasmo.png'}} style={{width:'100%',height:200,marginTop:10}} imageStyle={{ borderRadius: 6 }}>
                                                        
                                                    <View  style={{ position:'absolute',bottom:10,left:10,width:'80%',justifyContent:'center'}}>
                                                    
                                                <Text type='bold' style={{backgroundColor:'#30336b',fontSize:17,padding:7,paddingLeft:14,color:'white',marginTop:3,textTransform: 'uppercase'}}>NSIA SANTÉ SMO</Text></View>
                                               
                                                </ImageBackground>


                                                <ImageBackground source={{uri:'http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiamopao-1.png'}} style={{width:'100%',height:200,marginTop:10}} imageStyle={{ borderRadius: 6 }}>
                                                        
                                                    <View  style={{ position:'absolute',bottom:10,left:10,width:'80%',justifyContent:'center'}}>
                                                    
                                                <Text type='bold' style={{backgroundColor:'#30336b',fontSize:17,padding:7,paddingLeft:14,color:'white',marginTop:3,textTransform: 'uppercase'}}>NSIA SANTÉ Mopao</Text></View>
                                                
                                                </ImageBackground>



                                                <ImageBackground source={{uri:'http://excel-assurance.com/wp-content/uploads/2019/08/blackdoctor_baby.jpg'}} style={{width:'100%',height:200,marginTop:10}} imageStyle={{ borderRadius: 6 }}>
                                                        
                                                        <View  style={{ position:'absolute',bottom:10,left:10,width:'80%',justifyContent:'center'}}>
                                                        
                                                    <Text type='bold' style={{backgroundColor:'#30336b',fontSize:17,padding:7,paddingLeft:14,color:'white',marginTop:3,textTransform: 'uppercase'}}>NSIA Santé</Text></View>
                                                    
                                                    </ImageBackground>



                                           


                                       

                                    </ScrollView>

                                        

                                               
                                            {/* </Content> */}
                                        </Content>


                




                </View>


                <FooterCompement name="detailsService" openDrawer={this.props.navigation} />

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