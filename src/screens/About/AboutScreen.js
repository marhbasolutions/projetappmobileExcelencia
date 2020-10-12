import React from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity  } from 'react-native';
import { Button } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content } from 'native-base';
import CustomFooter from '../../components/Footer/CustomFooter';

export default function AboutScreen({navigation}) {

    return (
        <Container>
        <Content style={[global.container,global.paddingContainer,styles.containerAbout,]}>
                <Text style={[global.h1]}> A Propos  </Text>
                <Text style={[styles.textAbout]}>
                    Excelencia Assurances est un Agent Général de la Compagnie NSIA Assurances au Congo Brazzaville.{"\n"}{"\n"}
Le cabinet EXECELENCIA ASSURANCES trouve naissance par la volonté de son promoteur avec l’appui de la compagnie NSIA ASSURANCES de continuer de servir  des prestations de qualité supérieure en matière de conseils et de gestion des polices d’assurance des assurés.</Text>
            </Content>
            
        </Container>
        
    );
}



