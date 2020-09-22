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
import detailsService from './src/screen/services/detailsService';

import Services from './src/screen/services/servicesScreen';
import Home from './src/screen/homeScreen';
import Header from './src/screen/HeaderScreen';
import LoginScreen from './src/screen/login/loginScreen';
import Text from './src/components/CustomText';

import * as Font  from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';


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
        name: "Acceuil",
        icon: "ios-home",
        route:"home"
      },
      {
        name: "Qui Sommes nous",
        icon: "ios-help-circle"
      },
      {
        name: "Nos produits",
        icon: "ios-apps"
      },
      // {
      //   name: "Rdv",
      //   icon: "ios-calendar"
      // },
      {
        name: "Simuler un devis",
        icon: "ios-create"
      },
      // {
      //   name: "Guide",
      //   icon: "md-information-circle-outline"
      // },
    ],
    routes2: [
      {
        name: "Payer mes cotisations",
        icon: "md-eye"
      },
      {
        name: "Mes contrats",
        icon: "ios-document"
      },
      {
        name: "pre-declarer un sinistre",
        icon: "md-create"
      },
    ],
    routes3: [
      {
        name: "Agences",
        icon: "ios-pin"
      }
    ],
    routes4: [
      {
        name: "Consulter la meteo",
        icon: "ios-partly-sunny"
      },
      {
        name: "Pharmacie de garde",
        icon: "ios-medkit"
      }
    ],
    routes5: [
      {
        name: "Numeros utiles",
        icon: "md-call"
      },
      {
        name: "deconexion",
        icon: "md-power"
      }
    ]
  }

  render() {
    return (
      <View style={styles.containerDrawer}>
        <Image source={require('./src/assets/logo.png')}
          style={{  alignSelf: 'center', resizeMode: 'cover', marginTop: 10, marginBottom: 6 }}>

        </Image>
        <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%'}}>

        <Text type='regular' style={styles.titleFirst}>A propos</Text>
        
        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes[0].icon} size={28} />
          <Text style={styles.title}>{this.state.routes[0].name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes[1].icon} size={28} />
          <Text style={styles.title}>{this.state.routes[1].name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes[2].icon} size={28} />
          <Text style={styles.title}>{this.state.routes[2].name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes[3].icon} size={28} />
          <Text style={styles.title}>{this.state.routes[3].name}</Text>
        </TouchableOpacity>

        <Text type='regular' style={styles.titleFirst}>Espace Assuré</Text>


        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes2[0].icon} size={28} />
          <Text style={styles.title}>{this.state.routes2[0].name}</Text>
          <Text style={{borderRadius:12,color:'white',backgroundColor:'#fe7171',paddingBottom:2,paddingLeft:2,paddingRight:2,textAlign:'center',width:40,position:'absolute',right:20}}>New</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes2[1].icon} size={28} />
          <Text style={styles.title}>{this.state.routes2[1].name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes2[2].icon} size={28} />
          <Text style={styles.title}>{this.state.routes2[2].name}</Text>
        </TouchableOpacity>


<Text type='regular' style={styles.titleFirst}>Localisation</Text>
<TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes3[0].icon} size={28} />
          <Text style={styles.title}>{this.state.routes3[0].name}</Text>
        </TouchableOpacity>


<Text type='regular' style={styles.titleFirst}>Infos pratiques</Text>

        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes4[0].icon} size={28} />
          <Text style={styles.title}>{this.state.routes4[0].name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes4[1].icon} size={28} />
          <Text style={styles.title}>{this.state.routes4[1].name}</Text>
        </TouchableOpacity>

<Text type='regular' style={styles.titleFirst}>Autres</Text>
<TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes5[0].icon} size={28} />
          <Text style={styles.title}>{this.state.routes5[0].name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate(this.state.routes[0].route)}>
          <Ionicons color='#fff' name={this.state.routes5[1].icon} size={28} />
          <Text style={styles.title}>{this.state.routes5[1].name}</Text>
        </TouchableOpacity>

        </ScrollView>


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
    detailsService: { screen : detailsService },
  },
  {
    initialRouteName: "Home",
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
      'Raleway-Black': require('./assets/fonts/Raleway-Black.ttf'),
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
      'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf')
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
    paddingTop: 40,
    alignItems: "center",
    flex: 1

  },
  listItem: {
    height:50,
    alignItems: "center",
    flexDirection: "row",
    width:'100%',
    marginBottom:3,
    marginLeft:8
  },
  title: {
    fontSize: 16,
    marginLeft: 20,
    color: '#fff',
    alignSelf:'center',
    alignItems:'center',
    flex:1
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
    width:'100%',
    color:'white',
    backgroundColor: '#f6b932',
    alignSelf: 'flex-start',
    padding:10

  },
});