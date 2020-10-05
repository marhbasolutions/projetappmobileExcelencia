import React from 'react';
import {  View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity,ScrollView  } from 'react-native';
import { Container, Header, Content, List, ListItem,  Input, Item } from 'native-base';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import global from '../../styles/index';
import styles from './styles';
import Text from '../CustomText/CustomText';



export default class SideMenu extends React.Component {
    state = {
      routes: [
        {
          name: "Acceuil",
          icon: "ios-home",
          route:"Home",
        },
        {
          name: "Qui Sommes nous",
          icon: "ios-help-circle",
          route:"About"
        },
        {
          name: "Nos produits",
          icon: "ios-apps",
          route:"Services"
        },
        {
          name: "Prendre Rendez-vous",
          icon: "md-calendar",
          route:"RDV"
        },
        {
          name: "Assistance",
          icon: "md-information-circle",
          route:"Assistance"
        },
      ],
      routes2: [
        {
          name: "Pré-declarer un sinistre",
          icon: "md-create",
          route:"Sinistre"
        },
        {
          name: "Simuler un devis",
          icon: "ios-create",
          route:"Devis"
        },
        {
          name: "Payer mes cotisations",
          icon: "md-eye",
          route:"Cotisations",
          hasUpdate:true
        },
        {
          name: "Mes contrats",
          icon: "ios-document",
          route:"Contrats"
        },
      ],
      routes3: [
        {
          name: "Agences",
          icon: "ios-pin",
          route:"Agences"
        }
      ],
      routes4: [
        {
          name: "Meteo actuel",
          icon: "ios-partly-sunny",
          route:"Meteo"
        },
        {
          name: "Pharmacie de garde",
          icon: "ios-medkit",
          route:"Meteo"
        }
      ],
      routes5: [
        {
          name: "Numeros utiles",
          icon: "md-call",
          route:"Numeros"
        },
        {
          name: "deconexion",
          icon: "md-power",
          route:"Login"
        }
      ]
    }
  
    render() {
      return (
        <View style={[global.SideMenu]}>
          <Image source={require('../../assets/logo.png')}
            style={[global.img,styles.logoMenu]}>
  
          </Image>
          <ScrollView style={[styles.sideScroll]} showsVerticalScrollIndicator={false}>
            <View style={[styles.groupMenu]}>
            <Text style={[styles.bigTitle]}>A Propos</Text>
            { this.state.routes.map((item,index)=>{
              return <TouchableOpacity key={index} style={[styles.ItemMenu]} onPress={() => this.props.navigation.navigate(item.route)}>
              <Ionicons color='#fff' name={item.icon} size={28} />
              <Text style={[styles.ItemTextMenu]}>{item.name}</Text>
            </TouchableOpacity>;
            }) }
            <Text style={[styles.bigTitle]}>Espace assure</Text>
            { this.state.routes2.map((item,index)=>{
              return <TouchableOpacity key={index} style={[styles.ItemMenu]} onPress={() => this.props.navigation.navigate(item.route)}>
              <Ionicons color='#fff' name={item.icon} size={28} />
              <Text style={[styles.ItemTextMenu]}>{item.name}</Text>
            { item.hasUpdate  && (
              <Text style={[global.badgeText]}>New</Text>
            )}
            </TouchableOpacity>;
            }) }
            </View>
            <View style={[styles.groupMenu]}>
            <Text style={[styles.bigTitle]}>Localisation</Text>
            { this.state.routes3.map((item,index)=>{
              return <TouchableOpacity key={index} style={[styles.ItemMenu]} onPress={() => this.props.navigation.navigate(item.route)}>
              <Ionicons color='#fff' name={item.icon} size={28} />
              <Text style={[styles.ItemTextMenu]}>{item.name}</Text>
            </TouchableOpacity>;
            }) }
          </View>
          <View style={[styles.groupMenu]}>
            <Text style={[styles.bigTitle]}>Info Pratiques</Text>
            { this.state.routes4.map((item,index)=>{
              return <TouchableOpacity key={index} style={[styles.ItemMenu]} onPress={() => this.props.navigation.navigate(item.route)}>
              <Ionicons color='#fff' name={item.icon} size={28} />
              <Text style={[styles.ItemTextMenu]}>{item.name}</Text>
            </TouchableOpacity>;
            }) }
            </View>
            <View style={[styles.groupMenu]}>
            <Text style={[styles.bigTitle]}>Autres</Text>
            { this.state.routes5.map((item,index)=>{
              return <TouchableOpacity key={index} style={[styles.ItemMenu]} onPress={() => this.props.navigation.navigate(item.route)}>
              <Ionicons color='#fff' name={item.icon} size={28} />
              <Text style={[styles.ItemTextMenu]}>{item.name}</Text>
            </TouchableOpacity>;
            }) }
            </View>
          </ScrollView>
        </View>
      )
    }
  }