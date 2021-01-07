import React, {useState,useEffect} from 'react';
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Input,
  Item,
} from 'native-base';
import {Button} from 'react-native-elements';
import styles from './styles';
import SegmentedControl from '@react-native-community/segmented-control';
import StepIndicator from 'react-native-step-indicator';
import AutoScreen from './AutoScreen';
import HabiatationScreen from './HabitationScreen';
import global from '../globalSytle';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-community/async-storage';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#f6d147',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#f6d147',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#f6d147',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#f6d147',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#242c62',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#f6d147',
};

export default function SimulerDevis({navigation}) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [currentPosition, setcurrentPosition] = useState(0);
  const [ColorBack, setColorBack] = useState('#242c62');
  const [token, setToken] = useState('');


  useEffect(() => {
    AsyncStorage.getItem('USER_TOKEN').then(token => {
      setToken(token);
    });
  }, []);

  const labels = [
    'Informations personneles',
    selectedIndex == 0
      ? 'Informations de vehicule'
      : "Informations d'habitation",
    'Choix des garanties',
  ];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const handleInputValue = val => {
    setcurrentPosition(val);
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={ColorBack} />
      <Content>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View
            style={[
              {width: '100%', backgroundColor: ColorBack},
              global.paddingContainer,
            ]}>
            <View>
              <SegmentedControl
                style={{width: 300, alignSelf: 'center', marginTop: 60}}
                values={['Auto', 'Habitation']}
                selectedIndex={selectedIndex}
                backgroundColor={'#ffa502'}
                // tintColor={'red'}
                fontSize={22}
                onChange={event => {
                  setselectedIndex(event.nativeEvent.selectedSegmentIndex);
                  if (selectedIndex == 0) {
                    setColorBack('#6D214F');
                  } else {
                    setColorBack('#242c62');
                  }
                }}
              />
            </View>

            <View style={{marginTop: 15}}>
              <StepIndicator
                customStyles={customStyles}
                stepCount={3}
                currentPosition={currentPosition}
                labels={labels}
              />
            </View>
          </View>
         
            <View style={{flex: 1}}>
              {selectedIndex == 0 ? (
                <AutoScreen
                  token={token}
                  navigation={navigation}
                  handleInput={handleInputValue}
                  ColorBack={ColorBack}
                />
              ) : (
                <HabiatationScreen
                token={token}
                  navigation={navigation}
                  handleInput={handleInputValue}
                  ColorBack={ColorBack}
                />
              )}
            </View>
        </View>
      </Content>
    </Container>
  );
}
