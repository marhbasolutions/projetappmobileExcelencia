import React, { useState } from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity, Alert  } from 'react-native';

import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import CustomFooter from '../../components/Footer/CustomFooter';
import { Form, Grid, Col, Container, Content, Footer, FooterTab, Icon, Input, Item,Button, Segment, Body, Radio, Picker, ListItem, Left, Right, Toast,} from 'native-base';
import { CheckBox } from 'react-native-elements'
export default function payerScreen({navigation}) {

    const [numerosocietaire, setnumerosocietaire] = useState('');
    const [mutuelle, setmutuelle] = useState('0');
    const [savetofavoris, setsavetofavoris] = useState(false);

    const showcotisations = () =>
    {
        Alert.alert('','Aucun contract trouve');
    }

    return (
        <Container>
            <Content style={[global.container,global.paddingContainer,{backgroundColor:'#242c62'}]}>
                <View style={{backgroundColor:'#fff',borderRadius:20,height:300,padding:20}}>
                   
                
                <Item style={[styles.listItemForm,{marginTop:0}]} >
                <Picker
                    note
                    mode="dialog"
                    style={[styles.dropDown]}
                    itemStyle={[styles.dropDownItem]}
                    onValueChange={(i)=>setmutuelle(i)}
                    selectedValue={mutuelle} >
                    <Picker.Item label="Mutuelle" value="0" />
                    <Picker.Item label="AXA" value="AXA" />
                    <Picker.Item label="CDF" value="CDF" />
                    <Picker.Item label="SALIX" value="SALIX" />
                </Picker>
            </Item>

            <Item style={[styles.listItemForm]}     >
                <Input placeholder='Numero de societeaire' style={[styles.innerInputForm]} onChange={(val)=>setnumerosocietaire({val})}  value={numerosocietaire} />
            </Item>

            <Button onPress={() => { showcotisations() }} full style={{ color: '#fff', alignSelf:'center', margin: 20,borderRadius: 6,width:'100%' }}>
                <Text style={{ color: '#fff' }} > Valider </Text>
            </Button>

            <Item style={[styles.listItemForm]} onPress={()=>setsavetofavoris(!savetofavoris)}>
                <CheckBox checked={savetofavoris}  onPress={()=>setsavetofavoris(!savetofavoris)} />
                <Text>Enregistrer dans favoris</Text>
            </Item>

            </View>

            </Content>
        </Container>
        
    );
}



