

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground, StatusBar, BackHandle } from 'react-native';
import {Button as ButtonNative, Icon} from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Container, Content, Footer, FooterTab,  Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from '../CustomText/CustomText';

export default function CustomFooter({navigation,name})  {


  return (
    <Footer>
    <FooterTab  style={{ backgroundColor: '#30336b',padding:0 }}>

      <Button  active={name=='Home' ? true : false} vertical onPress={() => navigation.navigate('Home')}
      >
        <FontAwesome5 color={'#fff'} name="home" size={18} />
        <Text style={{ color: "#fff" }}>Acueil</Text>
      </Button>

      <Button  active={name=='Services' ? true : false}  vertical onPress={() => navigation.navigate('Services')}
      >
        <MaterialCommunityIcons color={'#fff'} name="cogs" size={18} />
        <Text style={{ color: "#fff" }}>Services</Text>
      </Button>

      <ButtonNative
      onPress={() => navigation.navigate('Sinistre')}
      buttonStyle={{marginLeft:4,marginRight:4,backgroundColor:'black',padding:15,borderRadius:100}}
      icon={
        <Icon
          type='material-community'
          name={name!='Sinistre' && name!='Sinistre'  ? "plus":"close"}
          size={name=='Sinistre' || name=='Sinistre'  ? 28:23 }
          color="white"
        />
      }
    />

      <Button  active={name=='Contrats' ? true : false}  vertical onPress={() => navigation.navigate('Contrats')}>
        <FontAwesome5 color={'#fff'} name="file-alt" size={18} />
        <Text  style={{ color: "#fff" }}>Contrats</Text>
      </Button>
      <Button  active={name=='Account' ? true : false}  vertical onPress={() => navigation.navigate('Account')}
      >
        <MaterialCommunityIcons color={'#fff'} name="account-convert" size={18} />
        <Text style={{ color: "#fff" }}>Compte</Text>
      </Button>
    </FooterTab>
  </Footer>

  )
}



