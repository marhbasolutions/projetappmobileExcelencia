import React, { useState} from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity,StatusBar  } from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item } from 'native-base';
import { Button } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import SegmentedControl from '@react-native-community/segmented-control';
import CutomHeader from '../../components/Header/CutomHeader';
import StepIndicator from 'react-native-step-indicator';
import AutoScreen from './AutoScreen';
import HabiatationScreen from './HabitationScreen';
import CustomFooter from '../../components/Footer/CustomFooter';

const renderHeader  = (coloractive,navigation) =>{
    return (
    <View>
        <StatusBar barStyle="light-content" backgroundColor={coloractive} />
  

        <CutomHeader isReturn={true} title='Simuler devis' navigation={navigation} color={coloractive}  />

  
      </View>);
}

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
  }

export default function SimulerDevis({ navigation }) {


    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [selectedIndex, setselectedIndex] = useState(0);
    const [currentPosition, setcurrentPosition] = useState(0);
    const [ColorBack, setColorBack] = useState('#242c62');

    const labels = ["Informations personneles", "Informations de vehicule", "Choix des garanties"];


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const handleInputValue = (val) => {
        setcurrentPosition(val)
     }
    

    return (
        <Container>
            {renderHeader(ColorBack,navigation)}
            <Content style={[global.container]}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ width: '100%', height: 170, backgroundColor: ColorBack }} >
                        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 10, marginTop: 10 }} >

                            <SegmentedControl
                                values={['Auto', 'Habitation']}
                                selectedIndex={selectedIndex}
                                backgroundColor={'#ffa502'}
                                // tintColor={'red'}
                                fontSize={22}
                                onChange={(event) => {
                                    setselectedIndex(event.nativeEvent.selectedSegmentIndex);
                                    if (selectedIndex == 0) {
                                        setColorBack('#6D214F')
                                    } else (
                                        setColorBack('#30336b')
                                    )

                                }}
                            />
                        </View>

                        <View style={{ padding: 10 }} >

                            <StepIndicator
                                customStyles={customStyles}
                                stepCount={3}
                                currentPosition={currentPosition}
                                labels={labels}
                            />

                        </View>
                    </View>
                    <Content style={[global.paddingContainer]} >
                        <View>
                        {selectedIndex == 0
                        ? <AutoScreen handleInput={handleInputValue} ColorBack={ColorBack} />
                        : <HabiatationScreen handleInput={handleInputValue} ColorBack={ColorBack} />}
                        </View>
                    </Content>
                    </View>

            </Content>

            <CustomFooter  name="Contrats" navigation={navigation} />
        </Container>
        
    );
}



