import React,{ useState }  from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity,StatusBar  } from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item } from 'native-base';

import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Icon,Button } from 'react-native-elements';

import CustomFooter from '../../components/Footer/CustomFooter';

export default function NewDeclaration({ navigation }) {
    const [activeSinistre, setActiveSinistre] = useState(0);
    return (

       <Container>
           <Header style={{backgroundColor:'#242c62',height:20,zIndex:1}}>
                <StatusBar backgroundColor='#242c62' barStyle='light-content'  />
            </Header>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>alert('Clicked')} >
                    <View style={[styles.topSearchBar,{ justifyContent:'space-between'}]}>
                        <View style={{flexDirection:'row',alignContent:'center',alignItems:'center'}} >
                            <Icon
                            style={{margin:3}}
                            type='font-awesome'
                                name='file'
                                color='#f6b932' />
                                <View style={styles.textTopSearchBar}>
                                    <Text style={{fontSize:17,lineHeight:20}}>Contrat non valide</Text>
                                    <Text type='light' style={{lineHeight:20}} >Immatriculation</Text>
                                </View>
                        </View>
                        <View style={styles.rightIconSearch}>
                            <Text style={{margin:6,fontSize:16}}>N°</Text>
                            <Icon
                            type='font-awesome'
                            name='random'
                            color='#f6b932' />
                        </View>
                    </View>
                </TouchableOpacity>
            <Content style={[global.container,global.paddingContainer,styles.containerAbout,]}>
                        <Text>Choisissez le type de sinistre</Text>
                        
                    
                                <View style={[styles.typeContainer,global.marginTop]}>

                                <TouchableOpacity onPress={()=>setActiveSinistre(1)} style={[styles.type,activeSinistre==1 ? {backgroundColor:'#30336b'}:null ]} activeOpacity={1}>
                                
                                    <Icon
                                    size={40}
                                    type='material-community'
                                    name='car-multiple'
                                    color='#f6b932' />
                                    <Text style={activeSinistre==1 ? {color:'white'}:null} >Accident</Text>
                            
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>setActiveSinistre(2)} style={[styles.type,activeSinistre==2 ? {backgroundColor:'#30336b'}:null ]} activeOpacity={1}>
                                    <Icon
                                    size={40}
                                    type='font-awesome'
                                    name='user-secret'
                                    color='#f6b932' />
                                    <Text style={activeSinistre==2 ? {color:'white'}:null} >Vol</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={styles.typeContainer}>

                                    <TouchableOpacity onPress={()=>setActiveSinistre(3)} style={[styles.type,activeSinistre==3 ? {backgroundColor:'#30336b'}:null ]} activeOpacity={1}>
                                    <Icon
                                    size={40}
                                    type='material-community'
                                    name='car-electric'
                                    color='#f6b932' />
                                    <Text style={activeSinistre==3 ? {color:'white'}:null}>Bris de glace</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>setActiveSinistre(4)} style={[styles.type,activeSinistre==4 ? {backgroundColor:'#30336b'}:null ]} activeOpacity={1}>
                                    <Icon
                                    size={40}
                                    type='material-community'
                                    name='fire-extinguisher'
                                    color='#f6b932' />
                                    <Text style={activeSinistre==4 ? {color:'white'}:null} >Incendie</Text>
                                    </TouchableOpacity>
                                </View>
                                <Button
                                buttonStyle={[global.marginTop,styles.buttonConfirm,activeSinistre!=0 ? {backgroundColor:'#30336b'}:null]}
                                title="Confirmer"
                                onPress={()=>alert('Clicked')}
                                />
                       
            </Content>
          
       </Container>
    );
}



