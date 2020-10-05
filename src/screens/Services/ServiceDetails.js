import React, { useState,useEffect } from 'react';
import {  StyleSheet,  View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground,ActivityIndicator, StatusBar  } from 'react-native';
import { Button } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content,Header,Body } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

import CustomFooter from '../../components/Footer/CustomFooter';



const subservicesLoaded = [
    {name:'NSIA FORFAIT HOSPITALIER',image:{uri:'http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiahospitalier.png'}},
    {name:'NSIA SANTÉ SMO',image:{uri:'http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiasmo.png'}},
    {name:'NSIA SANTÉ Mopao',image:{uri:'http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiamopao-1.png'}},
    {name:'NSIA Santé',image:{uri:'http://excel-assurance.com/wp-content/uploads/2019/08/blackdoctor_baby.jpg'}},
]

export default function ServiceDetails({navigation}) {

    const [service,setService] = useState(null);
    const [serviceLoaded,setServiceLoaded] = useState(false);

    const [subServices,setSubServices] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            setService(navigation.getParam('service'));
            setSubServices(subservicesLoaded);
            setServiceLoaded(true);
        },500);
    }, []);


    const renderItem = (item) =>{
        return  <ImageBackground source={item.image} style={[styles.subServiceBackground]} imageStyle={{ borderRadius: 6 }}>
                        
            <View  style={[styles.subServiceNameContainer]}>
            <LinearGradient
                                                colors={['#30336b10', service.color]}
                                                start={{ x: 0.9, y: 0 }}>
                                <Text type='bold' style={[styles.subServiceName]}>{item.name} </Text>
                </LinearGradient>

            </View>

    </ImageBackground>
    }

    const renderHeader = () =>{
        return <LinearGradient
                            colors={['#f6d14710', service.color]}
                            start={{ x: 0.9, y: 0 }}
                            style={[styles.detailsHeaderBackground]}>
                            <View  style={[styles.detailsHeaderInner]}>
                                { service.icon }
                            <Text type='bold' style={[styles.detailsHeaderName]}>{service.name}</Text>
                            </View>
                        </LinearGradient>
    }

    return (
        serviceLoaded  && subServices.length >0 ? (
        <Container>
             <Header style={[global.subHeader]}>
                 <StatusBar backgroundColor='#242c62'  />
                {renderHeader()}
            </Header>
            <Content style={[global.container,global.paddingContainer]}>
            
                <View style={{ flex: 1, flexDirection: 'column', }}>  
                    <FlatList
                            data={ subServices }
                            renderItem={({item}) =>  renderItem(item)}
                            stickyHeaderIndices={[0]}
                        />
                    </View>
               
            </Content>
            <CustomFooter  name="Services" navigation={navigation} />
        </Container>
        ):(
            <ActivityIndicator size="large" color='#f6b932' style={[global.indicator]} />
        )
       
    );
}



