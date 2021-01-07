import React from 'react';
import { Image } from 'react-native';
import { View,Dimensions, Text, StyleSheet,StatusBar,ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container,Content,Accordion } from 'native-base';
import styles from './styles';
import global from './globalSytle';

const dataArray = [
  { title: "Assurance Vie Particulier ?", content: "Nous vous accompagnons dans vos projets d’épargne pour assurer les études de vos enfants, vous garantir une retraite paisible et pour mettre à l’abri vos proches en toutes circonstances" },
  { title: "Assurance Non Vie Particulier ? ", content: "Nous vous offrons une gamme complète de produits d’assurances adaptés pour préserver vos biens." },
  { title: "Assurance Vie Entreprises ? ", content: "Nous vous accompagnons dans la mise en place d’un complément retraite pour votre personnel, la constitution d’un capital pour mettre à l’abri vos employés face aux aléas de la vie" }
];

const SupportScreen = ({navigation}) => {
    return (
      <Container>
      <Content padder >
          <Accordion icon="add"  style={[global.marginTop]} dataArray={dataArray} headerStyle={{backgroundColor:'#f6d147'}}  expanded={0}/>
      </Content>
      
  </Container>
    );
};

export default SupportScreen;
