import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AutoScreen from './devis_screens/AutoScreen';
import HabitationScreen from './devis_screens/habitationScreen';

const DevisScreen = ({navigation}) => {
  const [slectedView, setSelectedView] = useState('auto');
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={styles.switcherContainer}>
          <TouchableOpacity
            onPress={() => setSelectedView('auto')}
            style={[
              styles.switcherButton,
              slectedView == 'auto' && styles.switcherButtonBg,
            ]}>
            <Text style={{color: slectedView !== 'auto' ? '#fff' : '#000'}}>
              Auto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedView('habitation')}
            style={[
              styles.switcherButton,
              slectedView == 'habitation' && styles.switcherButtonBg,
            ]}>
            <Text
              style={{color: slectedView !== 'habitation' ? '#fff' : '#000'}}>
              Habitation
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        {slectedView === 'auto' ? <AutoScreen /> : <HabitationScreen />}
      </View>
    </View>
  );
};

export default DevisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242c62',
  },
  switcherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    backgroundColor: 'rgba(85,85,85, 0.5)',
    borderRadius: 50,
    padding: 3,
  },
  switcherButton: {
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  switcherButtonBg: {
    backgroundColor: '#fff',
  },
});
