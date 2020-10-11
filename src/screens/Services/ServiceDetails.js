import React, { useState,useEffect } from 'react';
import {  StyleSheet,  View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground,ActivityIndicator, StatusBar  } from 'react-native';
import {   Icon } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content,Header,Body,Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

import CustomFooter from '../../components/Footer/CustomFooter';

import { API_SERVICES_BY_CATEGORY ,HOST , CORS_ANYWHERE } from '../../api/config';



const subservicesLoaded = [
    {name:'NSIA FORFAIT HOSPITALIER',image:{uri:'http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiahospitalier.png'}},
    {name:'NSIA SANTÉ SMO',image:{uri:'http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiasmo.png'}},
    {name:'NSIA SANTÉ Mopao',image:{uri:'http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiamopao-1.png'}},
    {name:'NSIA Santé',image:{uri:'http://excel-assurance.com/wp-content/uploads/2019/08/blackdoctor_baby.jpg'}},
]

export default function ServiceDetails({navigation}) {

    const [service,setService] = useState(navigation.getParam('service'));
    const [serviceLoaded,setServiceLoaded] = useState(false);

    const [subServices,setSubServices] = useState([]);

    useEffect(() => {

        fetch(API_SERVICES_BY_CATEGORY+'?category='+service.id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            })
            .then((response) => response.json())
            .then((json) => {
                //console.log(json);
                setSubServices(json.data);
                setServiceLoaded(true);
            })
            .catch((error) => {
            console.error(error);
            });
    }, []);




    const renderItem = (item) =>{
        return  <ImageBackground source={{uri:HOST+'/images/services/'+item.thumbnail}} style={[styles.subServiceBackground]} imageStyle={{ borderRadius: 6 }}>
                        
            <View  style={[styles.subServiceNameContainer]}>
            <LinearGradient
                                                colors={['#30336b10', service.color]}
                                                start={{ x: 0.9, y: 0 }}>
                                <Text type='bold' style={[styles.subServiceName]}>{item.name} </Text>
                </LinearGradient>

            </View>


            {/* <Button iconLeft transparent style={[styles.optionsButton]} onPress={()=>alert('Pressed')}>
            <FontAwesome5 color={service.color}   name="ellipsis-h" size={30} />
    </Button> */ }

    </ImageBackground>
    }

    const renderHeader = () =>{
        return <LinearGradient
                            colors={['#f6d14710', service.color]}
                            start={{ x: 0.9, y: 0 }}
                            style={[styles.detailsHeaderBackground]}>
                            <View  style={[styles.detailsHeaderInner]}>
                            <Icon type='material-community' name={service.icon} size={34} style={{alignSelf:'flex-start'}} color="white" />
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
            <Content style={[global.container,global.paddingContainer,{paddingBottom:20}]}>
            
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



