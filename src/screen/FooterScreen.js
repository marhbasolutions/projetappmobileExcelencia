
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground, StatusBar, BackHandler, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Container, Content, Footer, FooterTab, Icon, Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Header = ({ isSelected, name, openDrawer, navigation }) => {



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