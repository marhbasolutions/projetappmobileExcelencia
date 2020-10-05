import React from 'react';
import {  StyleSheet,  View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground  } from 'react-native';
import { Button } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content } from 'native-base';
import {Button as ButtonNative, Icon} from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

import CustomFooter from '../../components/Footer/CustomFooter';


const { width } = Dimensions.get('window');

const services = [
    {backgroundimage:'http://excel-assurance.com/wp-content/uploads/2019/08/Assurances1.jpg',icon:<FontAwesome5 color={'#fff'}   name="user" size={34} />,name:'Assurance Vie',slug:'assurance_vie',color:'#fcdada'},
    {backgroundimage:'http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiasmo.png',icon:<Icon type='material-community' name={'security'} size={34} style={{alignSelf:'flex-start'}} color="white" />,name:'Assurances Santé',slug:'assurance_sante',color:'#5c969e'},
    {backgroundimage:'http://excel-assurance.com/wp-content/uploads/2019/09/AdobeStock_209417593-854x570-854x550.jpeg',icon:<Icon type='material-community' name={'car'} size={34} style={{alignSelf:'flex-start'}} color="white" />,name:'Gestion des Sinsitres',slug:'gestion_sinistre',color:'#d7385e'},
    {backgroundimage:'http://excel-assurance.com/wp-content/uploads/2020/09/image-poduct-nsiahospitalier.png',icon:<Icon type='material-community' name={'home'} size={34} style={{alignSelf:'flex-start'}} color="white" />,name:'Assurances Non Vie',slug:'gestion_non_vie',color:'#9ab3f5'},
    {backgroundimage:'http://excel-assurance.com/wp-content/uploads/2019/08/1-tnzUx8ScCvGLA2dU2HNAYA.jpeg',icon:<Icon type='material-community' name={'briefcase-check'} size={34} style={{alignSelf:'flex-start'}} color="white" />,name:'Assurance Entreprise',slug:'assurance_entreprise',color:'#f08a5d'},

]

export default function Services({navigation}) {

    return (
        <Container>
            <Content style={[global.container,global.paddingContainer]}>
            <ScrollView style={{paddingBottom:60}} showsVerticalScrollIndicator={false}>

                    {
                        services.map((item,index)=>{
                            return <TouchableOpacity key={index} onPress={() => navigation.navigate('ServiceDetails',{'service':item})}>
                                <ImageBackground source={{uri:item.backgroundimage}} style={[styles.ServiceContainerBackground]} imageStyle={{ borderRadius: 6 }}>
                                    <LinearGradient
                                    colors={['#30336b10', item.color]}
                                    start={{ x: 0.9, y: 0 }}
                                    style={[styles.backgroundGradient]}>

                                        <View  style={[styles.textContainerService]}>
                                            <View>{item.icon}</View>
                                            <LinearGradient
                                                colors={['#30336b10', '#30336b']}
                                                start={{ x: 0.9, y: 0 }}>
                                                <Text type='bold' style={[styles.serviceText]}>{item.name}</Text>
                                            </LinearGradient>
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                            </TouchableOpacity>
                        })
                    }


            </ScrollView>
            </Content>
            <CustomFooter  name="Services" navigation={navigation} />
        </Container>
    );
}



