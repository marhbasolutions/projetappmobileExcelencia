import React from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity, StatusBar  } from 'react-native';
import { Button } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content, Header } from 'native-base';
import { Icon } from 'react-native-elements';

import CustomFooter from '../../components/Footer/CustomFooter';

export default function EspaceSinistre({navigation}) {
    

    return (
        <Container>
            <Header style={{backgroundColor:'#242c62',height:20,zIndex:1}}>
                <StatusBar backgroundColor='#242c62' barStyle='light-content'  />
            </Header>
            <TouchableOpacity activeOpacity={0.9}  onPress={()=>navigation.navigate('NewDeclaration')} >
                        <View style={[styles.topSearchBar,{padding:8}]}>
                            <View style={{backgroundColor:'#30336b12',padding:3,borderRadius:100,marginRight:4}}>
                        <Icon
                        style={{margin:3}}
                        type='material-community'
                            name='biathlon'
                            color='#f6b932' />
                            </View>
                            <Text style={{fontSize:17,lineHeight:20}}>Je viens d'avoir un sinistre </Text>
            
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={{marginTop:6}} onPress={()=>navigation.navigate('NewDeclaration')} >
                        <View style={[styles.topSearchBar,{padding:8}]}>
                            <View style={{backgroundColor:'#30336b12',padding:3,borderRadius:100,marginRight:4}}>
                        <Icon
                        style={{margin:3}}
                        type='material-community'
                            name='file-document'
                            color='#f6b932' />
                            </View>
                            <Text style={{fontSize:17,lineHeight:20}}>Suivre mes sinistres </Text>
            
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.9} style={{marginTop:6}} onPress={()=>navigation.navigate('NewDeclaration')} >
                        <View style={[styles.topSearchBar,{padding:8}]}>
                            <View style={{backgroundColor:'#30336b12',padding:3,borderRadius:100,marginRight:4}}>
                        <Icon
                        style={{margin:3}}
                        type='material-community'
                            name='clipboard-plus'
                            color='#f6b932' />
                            </View>
                            <Text style={{fontSize:17,lineHeight:20}}>N° d'urgence</Text>
            
                        </View>
                    </TouchableOpacity>
                <Content style={[global.container,global.paddingContainer,styles.containerAbout,]}>

                </Content>
                <CustomFooter  name="Sinistre" navigation={navigation} />
        </Container>
        
    );
}



