
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground, StatusBar, BackHandler, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Header = ({ Isreturn, name, openDrawer, navigation }) => {



  return (


    <View style={{
      width: "100%",
      height: 45,
      flexDirection: "row",
      justifyContent: "space-between",
      // alignItems: "center",
      backgroundColor: '#30336b',
      paddingHorizontal: 20
    }} >
      <StatusBar barStyle="light-content" backgroundColor="#30336b" />


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

      <TouchableOpacity
        onPress={() => openDrawer.openDrawer()}
      >
        <MaterialIcons name="notifications" size={28} color={'#fff'} />
      </TouchableOpacity>

    </View>
  )
}



export default Header;