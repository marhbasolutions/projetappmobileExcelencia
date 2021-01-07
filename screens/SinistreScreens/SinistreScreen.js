import React , { useState , useEffect } from 'react';
import { Image } from 'react-native';
import { View,Dimensions, Text, TouchableOpacity,StyleSheet,StatusBar,ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { Container,Content , Header} from 'native-base';
import {API_HAS_CONTRACT } from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';

const SinistreScreen = ({route,navigation}) => {

    const [hasContract, setHasContract] = useState(false);
    const [contractNumber, setContractNumber] = useState('');
    const [token, setToken] = useState('');

    useEffect(()=>{

        if(route.params != null && route.params.to != null )
        {
            let taregt = route.params.to;
            navigation.navigate(taregt);
        }

        AsyncStorage.getItem('USER_TOKEN').then(token => {
            setToken(token);
            AsyncStorage.getItem('USER_ID').then((user)=>{
                if(user != null )
                {
                    fetch(API_HAS_CONTRACT+'?user='+user, {
                        method: 'GET',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer '+token
                        }
                      })
                      .then((response) => response.json())
                            .then((json) => {
                                  if(json.success)
                                  {
                                    setHasContract(json.hascontract);
                                    setContractNumber(json.contractnumber);
                                  }
                        })
                        .catch((error) => {
                                  console.error(error);
                        });
                }  
              });
          });

       
      },[])

    return (
      <Container>
            <Header style={{backgroundColor:'#242c62',height:20,zIndex:1}}>
                <StatusBar backgroundColor='#242c62' barStyle='light-content'  />
            </Header>
                    <TouchableOpacity activeOpacity={0.9}  onPress={()=>navigation.navigate('SinistreDeclaration',{contract:contractNumber})} >
                        <View style={[styles.topSearchBar,{padding:8}]}>
                            <View style={{backgroundColor:'#30336b12',padding:3,borderRadius:100,marginRight:4}}>
                        <Icon
                        style={{margin:3}}
                        type='material-community'
                            name='biathlon'
                            color='#f6b932' />
                            </View>
                            <Text style={{fontSize:17,lineHeight:20}}>Je viens d'avoir un sinistre </Text>
            
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={{marginTop:6}} onPress={()=>navigation.navigate('MesSinistres',{contract:contractNumber})} >
                        <View style={[styles.topSearchBar,{padding:8}]}>
                            <View style={{backgroundColor:'#30336b12',padding:3,borderRadius:100,marginRight:4}}>
                        <Icon
                        style={{margin:3}}
                        type='material-community'
                            name='file-document'
                            color='#f6b932' />
                            </View>
                            <Text style={{fontSize:17,lineHeight:20}}>Suivre mes sinistres </Text>
            
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.9} style={{marginTop:6}} onPress={()=>navigation.navigate('Numbers')} >
                        <View style={[styles.topSearchBar,{padding:8}]}>
                            <View style={{backgroundColor:'#30336b12',padding:3,borderRadius:100,marginRight:4}}>
                        <Icon
                        style={{margin:3}}
                        type='material-community'
                            name='clipboard-plus'
                            color='#f6b932' />
                            </View>
                            <Text style={{fontSize:17,lineHeight:20}}>N° d'urgence</Text>
            
                        </View>
                    </TouchableOpacity>
              
        </Container>
    );
};


const styles = StyleSheet.create({
  topSearchBarContainer:{

  },
  topSearchBar: {
      elevation:4,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: "grey",
      shadowOpacity: 0.5,
      shadowRadius: 10,
      alignItems:'center',
      flexDirection:'row',
      width:'95%',
      backgroundColor:'white',
      borderRadius:10,
      alignSelf:'center',
      margin:2,
      padding:6,
      position:'relative',
      top:-20,
      zIndex:3
  },
  textTopSearchBar:{
      margin:6
  },
  rightIconSearch:{
      flexDirection:'row',
      alignItems:'center'
  },
  type:{
      alignItems:'center',
      justifyContent:'center',
      height:120,
      width:'46%',
      elevation:4,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: "grey",
      shadowOpacity: 0.5,
      shadowRadius: 10,
      backgroundColor:'white',
      margin:8,
      borderRadius:17
  },
  typeContainer:{
      flexDirection:'row',
      width:'100%',
      alignItems:'center',
      justifyContent:'space-evenly'
  },
  buttonConfirm:{
      width:'40%',
      borderRadius:50,
      alignSelf:'center',
      backgroundColor:'lightgray',
      fontFamily:'Raleway-Regular'
  }
})

export default SinistreScreen;
