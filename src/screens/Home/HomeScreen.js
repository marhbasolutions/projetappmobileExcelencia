import React ,{ useRef, useState, useEffect} from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity ,Dimensions, StatusBar,ImageBackground } from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Button , Icon} from 'react-native-elements';
import Carousel , { Pagination } from 'react-native-snap-carousel';

import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import CustomFooter from '../../components/Footer/CustomFooter';
import { LinearGradient } from 'expo-linear-gradient';
import { API_GET_CATEGORIES ,HOST } from '../../api/config';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH - (SLIDER_WIDTH*0.05) );
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);


import { SliderBox } from "react-native-image-slider-box";

export default function HomeScreen({ navigation }) {

    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);
    const [slidesBottom, setSlidesBottom] = useState([]);

    useEffect(() => {
        fetch(API_GET_CATEGORIES,{
            'method': 'get',
            'credentials': 'include',
            'headers': {
                'Content-Type': 'application/json',
            }})
            .then((response) => response.json())
            .then((json) => {
                    setSlidesBottom(json.data);
                   
            })
            .catch((error) => {
            console.error(error);
            });
    }, []);

    let carouselRef = useRef(null);
    let carouselRef2 = useRef(null);



      const slides = [
          {title:'Choisissez votre metier,\n Nous vous accompagnons',image:'http://excel-assurance.com/wp-content/uploads/2019/08/Black-female-boss-leading-corporate-meeting-talking-to-diverse-businesspeople-923039680_2125x1416-1168x779.jpeg',degrade:'#6a2c70'},
          {title:'Nous prenons soins, \n devous & votre famille',image:'http://excel-assurance.com/wp-content/uploads/2019/08/Slide_1920x860CampagneFil3.jpg',degrade:'#1aa6b7'},
          {title:'Une dévotion et chalenge,\n pour vous accompagner',image:'http://excel-assurance.com/wp-content/uploads/2019/10/slide2.jpg',degrade:'#625261'},
      ]


      const renderItem2 = ({item, index}) => {
        return (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('ServiceDetails',{'service':item})}>
                    <ImageBackground source={{uri:HOST+'/images/services/category/'+item.thumbnail}} style={{height:200}} imageStyle={{ borderRadius: 6 }}>
                                    <LinearGradient
                                    colors={['#30336b10', item.color]}
                                    start={{ x: 0.9, y: 0 }}
                                    style={{alignContent:'center',flex:1,flexDirection:'row',paddingLeft:20}}>
                                      
                                            <View style={{alignSelf:'center'}}>
                                                <Icon type='material-community' name={item.icon} size={40} style={{alignSelf:'flex-start'}} color="white" />
                                            <Text type='bold' style={{color:'#fff',fontSize:22}}>{item.name}</Text>
                                            </View>
                                       
                                    </LinearGradient>
                    </ImageBackground>
            </TouchableOpacity>
        );
    }
      
      

      const renderItem = ({item, index}) => {
        return (
            <ImageBackground source={{uri:item.image}} style={{height:200}} imageStyle={{ borderRadius: 6 }}>
                <LinearGradient
                colors={['#ffffff00', item.degrade]}
                start={{ x: 1.1, y: 0.3 }}
                style={{  alignItems: 'center', borderRadius: 5,height:'100%' }}>
                    <Text type='bold' style={{color:'#fff',alignSelf:'flex-start',marginTop:'30%',marginLeft:20,fontSize:18}}>{item.title}</Text>
                </LinearGradient>
             </ImageBackground>
        );
    }

    return (
        <Container>
           <StatusBar backgroundColor='#242c62' barStyle='light-content'  />
        <Content style={[global.container]}>
                        <View style={{flex:1}}>
                        <View style={[styles.backGroundHalf]} ></View>
                            <View style={{alignItems:'center',justifyContent:'center'}} >
                                <View style={{flex:1}}>
                                    {/*  First slider   */}
                                    <Carousel
                                    ref={(c) => { carouselRef = c; }}
                                    data={slides}
                                    layout={'default'} layoutCardOffset={9}
                                    renderItem={renderItem}
                                    sliderWidth={SLIDER_WIDTH}
                                    itemWidth={ITEM_WIDTH}
                                    itemHeight={ITEM_HEIGHT}
                                    loop={true}
                                    autoplay={true}
                                    activeAnimationType='decay'
                                    currentIndex={activeSlide}
                                    autoplayDelay={5000}
                                    autoplayInterval={5000}
                                    slide
                                    onSnapToItem={(slideridex)=>setActiveSlide(slideridex)}
                                    />
                                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                    { slides.map((item,index)=>{
                                            let backgroundcurrent = index == activeSlide ? 'yellow':'white';
                                            let sizeactive = index == activeSlide ? 15:10;
                                               return  <TouchableOpacity key={index}  onPress={()=>{
                                                   carouselRef.snapToItem(index);
                                                   carouselRef.stopAutoplay();
                                                   setActiveSlide(index);
                                                   
                                    }} style={{width:sizeactive,height:sizeactive, backgroundColor:backgroundcurrent,borderRadius:100,alignSelf:'center',margin:8}}><Text>.</Text></TouchableOpacity>
                                    })}
                                    </View>
                                    
                                    
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
                            <View style={[global.container,{marginTop:10}]}>

                                <Text type='bold' style={[global.h2,styles.servicestitle]}>Nos produits phares </Text>

                                <View style={{flex:1,marginTop:10}}>
                                <Carousel
                                    ref={(c) => { carouselRef2 = c; }}
                                    data={slidesBottom}
                                    layout={'default'} layoutCardOffset={9}
                                    renderItem={renderItem2}
                                    sliderWidth={SLIDER_WIDTH}
                                    itemWidth={ITEM_WIDTH*0.75}
                                    itemHeight={ITEM_HEIGHT}
                                    loop={true}
                                    autoplay={true}
                                    activeAnimationType='decay'
                                    currentIndex={activeSlide2}
                                    autoplayDelay={5000}
                                    autoplayInterval={5000}
                                    slide
                                    onSnapToItem={(slideridex)=>setActiveSlide2(slideridex)}
                                    />
                                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                    { slidesBottom.map((item,index)=>{
                                            let backgroundcurrent = index == activeSlide2 ? 'yellow':'#242c62';
                                            let sizeactive = index == activeSlide2 ? 18:13;
                                               return  <TouchableOpacity key={index}  onPress={()=>{
                                                carouselRef2.snapToItem(index);
                                                carouselRef2.stopAutoplay();
                                                   setActiveSlide(index);
                                                   
                                    }} style={{width:sizeactive,height:6, backgroundColor:backgroundcurrent,borderRadius:100,alignSelf:'center',margin:8}}><Text>.</Text></TouchableOpacity>
                                    })}
                                    </View>
                                </View>

                            </View>

                                    
                                   
                            </View>

        </View>
        </Content>
        <CustomFooter  name="Home" navigation={navigation} />
        </Container>
    );
}



