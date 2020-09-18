
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground, StatusBar, BackHandle } from 'react-native';
import {Button as ButtonNative, Icon} from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Container, Content, Footer, FooterTab,  Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Header = ({ isSelected, name, openDrawer, navigation }) => {



  /*<ButtonNative  active={name=='Services' ? true : false} block style={{backgroundColor:'black',flex:1,width:20,height:40,borderRadius:100}}  vertical onPress={() => openDrawer.navigate('Services')}
  >
    <MaterialCommunityIcons  color={'#fff'} name="plus" size={18} />
  </Button>*/

  return (


    <Footer>
    <FooterTab  style={{ backgroundColor: '#30336b' }}>
      <Button  active={name=='Home' ? true : false} vertical onPress={() => openDrawer.navigate('Home')}
      >
        <FontAwesome5 color={'#fff'} name="home" size={18} />
        <Text style={{ color: "#fff" }}>Acueil</Text>
      </Button>
      <Button  active={name=='Services' ? true : false}  vertical onPress={() => openDrawer.navigate('Services')}
      >
        <MaterialCommunityIcons color={'#fff'} name="cogs" size={18} />
        <Text style={{ color: "#fff" }}>Services</Text>
      </Button>
 

      <ButtonNative
      onPress={() => openDrawer.navigate(name!='Sinistre' ? 'Sinistre':'Home')}
      buttonStyle={{marginLeft:4,marginRight:4,backgroundColor:'black',padding:15,borderRadius:100}}
      icon={
        <Icon
          type='material-community'
          name={name!='Sinistre' ? "plus":"close"}
          size={name=='Sinistre'  ? 28:23 }
          color="white"
        />
      }
    />

      <Button  active={name=='TabContract' ? true : false}  vertical onPress={() => openDrawer.navigate('TabContract')}>
        <FontAwesome5 color={'#fff'} name="file-alt" size={18} />
        <Text style={{ color: "#fff" }}>Contrats</Text>
      </Button>
      <Button  active={name=='Account' ? true : false}  vertical onPress={() => openDrawer.navigate('Account')}
      >
        <MaterialCommunityIcons color={'#fff'} name="account-convert" size={18} />
        <Text style={{ color: "#fff" }}>Compte</Text>
      </Button>
    </FooterTab>
  </Footer>

  )
}



export default Header;