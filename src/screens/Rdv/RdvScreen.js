import React, { useEffect } from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item,Button } from 'native-base';
import {Calendar, CalendarList, Agenda,LocaleConfig} from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';

import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';

import CustomFooter from '../../components/Footer/CustomFooter';



export default function LoginScreen({ navigation }) {

    useEffect(() => {
        LocaleConfig.locales['fr'] = {
            monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
            monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
            dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
            dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
            today: 'Aujourd\'hui'
          };
          LocaleConfig.defaultLocale = 'fr';
    }, []);

    return (
        <Container>
        <Content style={[global.container,global.paddingContainer]}>
        <Text style={[global.h2]}>Veuillez choisir une date </Text>
                    <View style={[global.marginTop]}>
                        <Calendar
                            style={[{
                                borderWidth: 1,
                                borderColor: '#242c62',
                            }]}
                            markingType={'period'}
                            theme={{
                                arrowColor: '#f6d147',
                                monthTextColor:  '#f6d147',
                                indicatorColor:  '#f6d147',
                                textDayFontFamily: 'Raleway-Regular',
                                textMonthFontFamily: 'Raleway-Regular',
                                textDayHeaderFontFamily: 'Raleway-Regular',
                                textDayFontWeight: '300',
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: '300',
                                textDayFontSize: 16,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 16,
                                selectedDayBackgroundColor: '#f6d147',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                todayTextColor: '#f6d147',
                                dayTextColor: '#2d4150',
                            }}
                            />
                            <Text style={[global.h2,global.marginTop]}>Rencontrer notre personnel</Text>
                    
                            <View style={[styles.personnelContainer,global.marginTop]}>
                                    <Ionicons color='#242c62' style={{margin:5}} name='ios-person' size={40} />
                                    <View style={{padding:4}}>
                                        <Text type='bold'>Astrea POATY</Text>
                                        <Text>Régleur Sinistres</Text>
                                    </View>
                            </View>
                            <Button onPress={() => alert('Valider')  } full style={[global.marginTop,styles.validateRdvButton]}>
                                <Text style={{ color: '#fff' }} > Valider </Text>
                            </Button>
                        </View>
        </Content>
        <CustomFooter  name="RDV" navigation={navigation} />
        </Container>
    );
}



