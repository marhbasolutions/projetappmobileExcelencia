import { StatusBar } from 'expo-status-bar';
import React from 'react';
import global from './src/styles/index';
import { ActivityIndicator } from 'react-native';
import * as Font  from 'expo-font';

import AppContainer from './src/routes/SwitchNavigator';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Raleway-Black': require('./assets/fonts/Raleway-Black.ttf'),
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
      'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render(){
    return (
      this.state.fontLoaded ? (
        <AppContainer />
        ) : (
          <ActivityIndicator size="large" color='#f6b932' style={[global.indicator]} />)
    );
  }
 
}

