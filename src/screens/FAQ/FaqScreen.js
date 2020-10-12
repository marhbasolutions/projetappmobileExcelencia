import React from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity  } from 'react-native';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content,Accordion } from 'native-base';

const dataArray = [
    { title: "Assurance Vie Particulier ?", content: "Nous vous accompagnons dans vos projets d’épargne pour assurer les études de vos enfants, vous garantir une retraite paisible et pour mettre à l’abri vos proches en toutes circonstances" },
    { title: "Assurance Non Vie Particulier ? ", content: "Nous vous offrons une gamme complète de produits d’assurances adaptés pour préserver vos biens." },
    { title: "Assurance Vie Entreprises ? ", content: "Nous vous accompagnons dans la mise en place d’un complément retraite pour votre personnel, la constitution d’un capital pour mettre à l’abri vos employés face aux aléas de la vie" }
  ];

export default function FaqScreen({navigation}) {

    return (
        <Container>
            <Content style={[global.container,global.paddingContainer,styles.containerAbout,]}>
                <Text style={[global.h1]}> Assistance  </Text>
                <Accordion style={[global.marginTop]} dataArray={dataArray} headerStyle={{backgroundColor:'#f6d147'}}  expanded={0}/>
            </Content>
            
        </Container>
        
    );
}



