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
               
                
                </Content>
        </Container>
        
    );
}



