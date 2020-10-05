import React from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import CustomFooter from '../../components/Footer/CustomFooter';


import { SliderBox } from "react-native-image-slider-box";

export default function HomeScreen({ navigation }) {

    const imagesSlider1 =  [
        "http://excel-assurance.com/wp-content/uploads/2019/08/Slide_1920x860CampagneFil3.jpg",
        "http://excel-assurance.com/wp-content/uploads/2019/10/slide2.jpg",
        "http://excel-assurance.com/wp-content/uploads/2019/08/Black-female-boss-leading-corporate-meeting-talking-to-diverse-businesspeople-923039680_2125x1416-1168x779.jpeg",
        "http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiamopao-1.png", 
        // Network image       // Local image
      ];

    return (
        <Container>
        <Content style={[global.container]}>
        <View>
                            <View style={[styles.backGroundHalf]} ></View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}} >
                                 {/*  First slider   */}
                                    <View style={{height:170}}>
                                        <SliderBox
                                    images={imagesSlider1}
                                    sliderBoxHeight={150}
                                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                                    dotColor="#FFEE58"
                                    inactiveDotColor="#90A4AE"
                                    paginationBoxVerticalPadding={20}
                                    autoplay
                                    circleLoop
                                    ImageComponentStyle={{borderRadius: 15,width:'95%'}}
                                    imageLoadingColor="#2196F3"
                                    paginationBoxStyle={{
                                        position: "absolute",
                                        bottom: -30,
                                        padding: 0,
                              
                                        height:60,
                                        
                                      }}
                                      dotStyle={{
                                        backgroundColor: 'blue',
                                        width:25,
                                        height:25,
                                        borderRadius:50
                                      }}
                                    /> 

                            </View>

                            {/*  Yellow Buttns sections   */}

                            <View style={[styles.servicesHome]}>

                                <View style={[styles.rowServices]}>

                                    <View style={{paddingLeft:5,paddingRight:5,width:'50%'}}>

                                                <TouchableOpacity style={[styles.homeBigButton]}
                                                        onPress={() => navigation.navigate('Sinistre')} >
                                                            <Text type='bold' style={[styles.titleServiceHome]}>Espace sinistre</Text>
                                                        <View style={[styles.counterIconHome]}>
                                                            <FontAwesome5 color={'#fff'}   name="file-signature" size={16} />
                                                        </View>
                                                </TouchableOpacity>

                                    </View>

                                    <View style={{paddingLeft:5,paddingRight:5,width:'50%'}}>

                                        <TouchableOpacity style={[styles.homeBigButton]}
                                                onPress={() => navigation.navigate('Sinistre')} >
                                                    <Text type='bold' style={[styles.titleServiceHome]}>Pré-declarer son sinistre</Text>
                                                <View style={[styles.counterIconHome]}>
                                                    <FontAwesome5 color={'#fff'}   name="edit" size={17} />
                                                </View>
                                        </TouchableOpacity>

                                    </View>

                                </View>


                                <View style={[styles.rowServices,{marginTop:15}]}>

                                    <View style={{paddingRight:5,width:'50%'}}>

                                                <TouchableOpacity style={[styles.homeBigButton]}
                                                        onPress={() => navigation.navigate('Devis')} >
                                                            <Text type='bold' style={[styles.titleServiceHome]}>Simuler un devis</Text>
                                                        <View style={[styles.counterIconHome]}>
                                                            <FontAwesome5 color={'#fff'}   name="calculator" size={17} />
                                                        </View>
                                                </TouchableOpacity>

                                    </View>

                                    <View style={{paddingLeft:5,width:'50%'}}>

                                        <TouchableOpacity style={[styles.homeBigButton]}
                                                onPress={() => navigation.navigate('Assistance')} >
                                                    <Text type='bold' style={[styles.titleServiceHome]}>Contacter son conseiller</Text>
                                                <View style={[styles.counterIconHome]}>
                                                    <FontAwesome5 color={'#fff'}   name="handshake" size={17} />
                                                </View>
                                        </TouchableOpacity>

                                    </View>

                                </View>

                            </View>

                             {/*  Last slider section   */}
                            <View style={[global.container,{paddingLeft:10,marginTop:20}]}>

                                <Text type='bold' style={[global.h2,styles.servicestitle]}>Nos produits phares </Text>

                                <View style={{height:180,marginTop:10}}>
                                    <SliderBox
                                    images={imagesSlider1}
                                    sliderBoxHeight={140}
                                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                                    dotColor="#FFEE58"
                                    inactiveDotColor="#90A4AE"
                                    paginationBoxVerticalPadding={20}
                                    autoplay
                                    circleLoop
                                    ImageComponentStyle={{borderRadius: 15,width:'95%'}}
                                    imageLoadingColor="#2196F3"
                                    paginationBoxStyle={{
                                        position: "absolute",
                                        bottom: -50,
                                        padding: 0,
                              
                                        height:60,
                                        
                                      }}
                                      dotStyle={{
                                        backgroundColor: 'blue',
                                        width:35,
                                        height:25,
                                        borderRadius:3,
                                      }}
                                    /> 

                            </View>

                            </View>

                                    
                                   
                            </View>

        </View>
        </Content>
        <CustomFooter  name="Home" navigation={navigation} />
        </Container>
    );
}



