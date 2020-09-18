import React from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity , ActivityIndicator } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack"
import { Ionicons } from '@expo/vector-icons';
import Rdv from './src/screen/rdv/rdvScreen';
import Contract from './src/screen/contract/contractScreen';
import Devis from './src/screen/devis/deviScreen';
import Guide from './src/screen/guide/guideScreen';
import TabContract from './src/screen/contract/TabContractScreen';
import Account from './src/screen/account/accountScreen';
import Sinistre from './src/screen/sinistre/SinistreScreen';

import Services from './src/screen/services/servicesScreen';
import Home from './src/screen/homeScreen';
import Header from './src/screen/HeaderScreen';
import LoginScreen from './src/screen/login/loginScreen';
import Text from './src/components/CustomText';

import * as Font  from 'expo-font';


// const Header =({name, openDrawer})=> (
//     <View style={styles.header}>
//       <TouchableOpacity onPress={()=>openDrawer()}>
//         <Ionicons name="ios-menu" size={32} />
//       </TouchableOpacity>
//       <Text>{name}</Text>
//       <Text style={{width:50}}></Text>
//     </View>
//   )


const Profile = ({ navigation }) => (
  <View style={styles.container}>
    <Header name="Profile" openDrawer={navigation.openDrawer} />
    <Text style={{ padding: 20 }}>
      Profile    </Text>
    <Text style={{ padding: 20 }}>
      In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada elit.
    </Text>
  </View>
)

const Settings = ({ navigation }) => (
  <View style={styles.container}>
    <Header name="Settings" openDrawer={navigation.openDrawer} />
    <Text style={{ padding: 20 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dictum sapien, nec viverra orci. Morbi sed maximus purus. Phasellus quis justo mi. Nunc ut tellus lectus.
    </Text>
    <Text style={{ padding: 20 }}>
      In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada elit.
    </Text>
  </View>
)

function Item({ item, navigate }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => navigate(item.name)}>
      <Ionicons color='#fff' name={item.icon} size={28} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

class Sidebar extends React.Component {
  state = {
    routes: [
      {
        name: "Home",
        icon: "ios-home"
      },
      {
        name: "Account",
        icon: "ios-contact"
      },
      {
        name: "Rdv",
        icon: "ios-settings"
      },
      // {
      //   name: "Rdv",
      //   icon: "ios-calendar"
      // },
      {
        name: "Devis",
        icon: "ios-calculator"
      },
      // {
      //   name: "Guide",
      //   icon: "md-information-circle-outline"
      // },
    ]
  }

  render() {
    return (
      <View style={styles.containerDrawer}>
        <Image source={require('./src/assets/logo.png')}
          style={{ width: 260, height: 80, alignSelf: 'center', resizeMode: 'cover', marginTop: 22, marginBottom: 22 }}>

        </Image>

        <Text style={styles.titleFirst}>A propos</Text>
        <View style={styles.sidebarDivider}></View>
        <FlatList
          style={{ width: "100%", marginLeft: 30 }}
          data={this.state.routes}
          renderItem={({ item }) => <Item item={item} navigate={this.props.navigation.navigate} />}
          keyExtractor={item => item.name}
        />

        <Text style={styles.titleFirst}>Espace Societere</Text>
        <View style={styles.sidebarDivider}></View>
        <FlatList
          style={{ width: "100%", marginLeft: 30 }}
          data={this.state.routes}
          renderItem={({ item }) => <Item item={item} navigate={this.props.navigation.navigate} />}
          keyExtractor={item => item.name}
        />


      </View>
    )
  }
}

const Drawer = createDrawerNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        drawerLockMode: 'locked-closed'
      }

    },

    Profile: { screen: Profile },
    Home: { screen: Home },
    Rdv: { screen: Rdv },
    Settings: { screen: Settings },
    Contract: { screen: Contract },
    Devis: { screen: Devis },
    Services: { screen: Services },
    Guide: { screen: Guide },
    TabContract: { screen: TabContract },
    Account: { screen: Account },
    Sinistre: { screen: Sinistre },


  },
  {
    initialRouteName: "LoginScreen",
    unmountInactiveRoutes: true,
    headerMode: "none",
    contentComponent: props => <Sidebar {...props} />
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer: {
      screen: Drawer,

    },

  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
    unmountInactiveRoutes: true,
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false
    }),
  }
)

const AppContainer = createAppContainer(AppNavigator);



export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf')
    });

    this.setState({ fontLoaded: true });
  }


  render() {
    return (
      <>
       {this.state.fontLoaded ? (
        <AppContainer />
        ) : (
          <ActivityIndicator size="large" />
        )}
      </>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#30336b",
    paddingTop: 40,
    alignItems: "center",
    flex: 1,
  },
  containerDrawer: {
    backgroundColor: "#30336b",
    padding: 10,
    paddingTop: 40,
    alignItems: "center",
    flex: 1

  },
  listItem: {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    marginLeft: 20,
    color: '#fff'
  },
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20
  },
  sidebarDivider: {
    height: 1,
    width: "100%",
    backgroundColor: "#718093",
    marginVertical: 10
  },
  titleFirst: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#f6b932',
    alignSelf: 'flex-start'

  },
});