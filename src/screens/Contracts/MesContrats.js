import React from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity  } from 'react-native';
import { Button } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content } from 'native-base';
import { List as LST,ReactNativePaper } from 'react-native-paper';
import CustomFooter from '../../components/Footer/CustomFooter';

export default function MesContractsScreen({navigation}) {

    return (
        <Container>
            <Content style={[global.container,styles.containerAbout,]}>
                <View style={[global.marginTop]}>
                <LST.Section >
                <LST.Accordion 
                style={{padding:0}}
                    theme={{ colors: { primary: '#30336b' }}}
                    titleStyle={{fontFamily:'Raleway-Bold'}}
                    title="Assurance Vie"
                    left={props => <LST.Icon {...props}   icon="folder"  />}>
                    <LST.Item
                    style={{fontFamily:'Raleway-Medium'}}
                        titleStyle={{fontFamily:'Raleway-Medium',fontSize:13}}
                        title="NSIA RETRAITE (Particulier)"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                    <LST.Item
                    style={{fontFamily:'Raleway-Medium'}}
                        titleStyle={{fontFamily:'Raleway-Medium',fontSize:13}}
                        title="NSIA PREVOYANCES (Particulier)"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                    <LST.Item
                    style={{fontFamily:'Raleway-Medium'}}
                        titleStyle={{fontFamily:'Raleway-Medium',fontSize:13}}
                        title="NSIA ETUDES (Particulier)"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                </LST.Accordion>

                <LST.Accordion
                    theme={{ colors: { primary: '#30336b' }}}
                    titleStyle={{fontFamily:'Raleway-Bold'}}
                    title="Assurances Auto & Moto"
                    left={props => <LST.Icon {...props}  icon="folder" />}>
                    <LST.Item
                    style={{fontFamily:'Raleway-Medium'}}
                        titleStyle={{fontFamily:'Raleway-Medium',fontSize:13}}
                        title="NSIA Auto (Particulier)"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                </LST.Accordion>

                <LST.Accordion
                    theme={{ colors: { primary: '#30336b' }}}
                    titleStyle={{fontFamily:'Raleway-Bold'}}
                    title="Assurances Santé"
                    left={props => <LST.Icon {...props}  icon="folder" />}>
                    <LST.Item
                    style={{fontFamily:'Raleway-Medium'}}
                        titleStyle={{fontFamily:'Raleway-Medium',fontSize:13}}
                        title="NSIA FORFAIT HOSPITALIER"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                    <LST.Item
                    style={{fontFamily:'Raleway-Medium'}}
                        titleStyle={{fontFamily:'Raleway-Medium',fontSize:13}}
                        title="NSIA SANTÉ SMO"
                        description="12/12/2020"
                        left={props => <LST.Icon  {...props} icon="file" color='#f6b932' />}
                        right={props => <Text style={{alignSelf:'center'}} >Afficher</Text>}
                    />
                </LST.Accordion>
                </LST.Section>
                </View>
            </Content>
           
        </Container>
        
    );
}



