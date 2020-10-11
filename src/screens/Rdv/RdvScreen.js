import React, { useEffect, useState } from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity ,Picker } from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item,Button } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';



import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';

import CustomFooter from '../../components/Footer/CustomFooter';



export default function LoginScreen({ navigation }) {


    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [period, setPeriod] = useState(null);


    useEffect(() => {
   
    }, []);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };


      const sendRdv = () => {

        var dataToSend = { daterdv: '7888',period: 12};

        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('http://quickcar.irun-code.com/mobile/getcontratsbyuser', {
            method: 'POST',
            headers: {
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formBody
          })
          .then((response) => response.json())
                .then((json) => {
                console.log(json);
            })
            .catch((error) => {
            console.error(error);
            });
      }
    
   

    return (
        <Container>
        <Content style={[global.container,global.paddingContainer]}>
            <View style={{alignItems:'center',flex:1}}>

                    <View style={[global.marginTop,{width:'100%'}]}>

                        <Text>Remplissez la date de rendez-vous </Text>

                        <TouchableOpacity onPress={showDatepicker} style={[styles.datePickerCom,global.marginTop]}>
                            <Text type='bold' >{ date.getFullYear()+'-'+date.getMonth()+1+'-'+date.getDate() }</Text>
                        </TouchableOpacity>

                        <View style={[styles.hourPeriodContainer,global.marginTop]}>
                            <Picker
                                note
                                style={{ width: '100%' }}
                                selectedValue={period}
                                onValueChange={(itemValue, itemIndex) => {
                                    setPeriod(itemValue);
                                  }}
                                itemStyle={{width:'100%'}}
                            >
                                <Picker.Item label="8 h 00 min – 9 h 00 min" value="1" />
                                <Picker.Item label="9 h 00 min – 10 h 00 min" value="2" />
                                <Picker.Item label="10 h 00 min – 11 h 00 min" value="3" />
                                <Picker.Item label="11 h 00 min – 12 h 00 min" value="4" />
                                <Picker.Item label="12 h 00 min – 13 h 00 min" value="5" />
                                <Picker.Item label="13 h 00 min – 14 h 00 min" value="6" />
                                <Picker.Item label="14 h 00 min – 15 h 00 min" value="7" />
                                <Picker.Item label="15 h 00 min – 16 h 00 min" value="8" />
                                <Picker.Item label="16 h 00 min – 17 h 00 min" value="9" />
                                <Picker.Item label="17 h 00 min – 18 h 00 min" value="10" />
                            </Picker>
                        </View>

                        <Button transparent onPress={()=>sendRdv()} style={[styles.validateRdvButton,global.marginTop]}>
                            <Text style={{color:'#fff'}}>Valider le rendez-vous </Text>
                        </Button>
                       
                        {show && (
                            <DateTimePicker
                            style={{
                                shadowColor: '#fff',
                                shadowRadius: 0,
                                shadowOpacity: 1,
                                shadowOffset: { height: 0, width: 0 },
                              }}
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            locale="es-ES"
                            minimumDate={new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate())}
                            />
                        )}

                    </View>
        
            </View>
               </Content>
        <CustomFooter  name="RDV" navigation={navigation} />
        </Container>
    );
}



