import React, { useEffect , useState } from 'react';
import { Dimensions,FlatList, SectionList,View ,Text,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity,SafeAreaView  } from 'react-native';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import { Container,Content } from 'native-base';
import { Searchbar } from 'react-native-paper';
import global from '../globalSytle';
import { API_AGENCIES } from '../api/config';

const width = Dimensions.get('window').width;

export default function AgenciesScreen({route,navigation}) {

    const [saving, setsaving] = useState(false);
    const [agences,setAgences] = useState([]);
    const [agenceSerach,setAgencesSerach] = useState(agences);
    const [searchQuery,setSearchQuery] =  useState('');
    const [token, setToken] = useState('');
    
    useEffect(()=>{
        setsaving(true);
        AsyncStorage.getItem('USER_TOKEN').then(token => {
            setToken(token);
            fetch(API_AGENCIES, {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer '+token
                }
              })
              .then((response) => response.json())
                    .then((json) => {
                        setsaving(false);
                          if(json.success)
                          {
                            setAgences(json.data);
                            setAgencesSerach(json.data);
                          }
                })
                .catch((error) => {
                          console.error(error);
                });
          });
        
    },[]);

    const onChangeSearch = query => {
        setSearchQuery(query);
        if(query.trim()!='')
            setAgencesSerach(agences.filter((item)=>String(item.name).includes(query)));
        else
            setAgencesSerach(agences);
    }
    

    const renderItem = (item) =>{
       return (
           <View style={[styles.containerCityAgence]}>
               <TouchableOpacity style={[styles.innerContainerCityAgence]} onPress={()=>navigation.navigate('AgencyCity',{city:item.name})} >
                    <View style={[styles.cityNameContainer]}>
                        <Icon type='font-awesome' name='building-o' size={28} color='#f6d147' />  
                        <Text type='meduim' style={{fontSize:16,marginLeft:8}}>{item.name}</Text>
                    </View>
                    <View style={[styles.agenceNumberContainer]}>
                        <Text type='bold' style={[styles.textAgenceName]}> {item.nbagencies} Agence(s)  </Text>
                        <Icon type='font-awesome'  name='angle-right' size={27} color='#f6d147' /> 
                    </View>
                </TouchableOpacity>
           </View>    
       )
    }
    

    return (
        <Container>
            <Content style={[global.container,global.paddingContainer]}>
            <Searchbar
                placeholder="Chercher par ville"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{borderColor:'#242c62',borderWidth:1}}
                />
            <FlatList 
                style={{marginTop:20}}
                 data={agenceSerach}
                 renderItem={({item}) => renderItem(item)}
                 keyExtractor={(item, index) => index.toString()}
                />
            </Content>
        </Container>
        
    );
}



