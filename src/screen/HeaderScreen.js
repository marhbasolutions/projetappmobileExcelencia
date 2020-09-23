
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground, StatusBar, BackHandler, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Text from '../components/CustomText';

import styles from "./globalStyle/style";

const Header = ({ Isreturn, name, openDrawer, navigation, title, color }) => {

  var mycolor = "#30336b"
  if (color)
    mycolor = color


  return (


    <View style={{
      width: "100%",
      height: 55,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: mycolor,
      paddingHorizontal: 20
    }} >
      <StatusBar barStyle="light-content" backgroundColor={color} />


      {!Isreturn ? (
        <TouchableOpacity
          onPress={() => openDrawer.openDrawer()}
        >
          <Ionicons name="ios-menu" size={32} color={'#fff'} />
        </TouchableOpacity>
      ) :
        <TouchableOpacity
          onPress={() => openDrawer.navigate('Home')}
        >
          <Feather name="arrow-left" size={32} color="#fff" />
        </TouchableOpacity>

      }

      {title ? (
        <View style={styles.headerTextContainer}><Text style={styles.headerText} type="bold">{title}</Text></View>
      ) :
        null
      }


      <TouchableOpacity
        onPress={() => openDrawer.openDrawer()}
      >
        <MaterialIcons name="notifications" size={28} color={'#fff'} />
      </TouchableOpacity>

    </View>
  )
}



export default Header;