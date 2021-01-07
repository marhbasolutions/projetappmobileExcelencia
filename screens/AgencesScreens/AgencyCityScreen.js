import React, { useEffect , useState } from 'react';
import { Dimensions,Linking,FlatList, SectionList,View ,Text, ScrollView  } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import { Container,Content } from 'native-base';
import { Searchbar } from 'react-native-paper';
import global from '../globalSytle';
import { API_AGENCIES_BY_CITY } from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';

const width = Dimensions.get('window').width;

export default function AgencyCityScreen({route,navigation}) {

    const [saving, setsaving] = useState(false);
    const [agences,setAgences] = useState([]);
    const [agenceSerach,setAgencesSerach] = useState(agences);
    const [searchQuery,setSearchQuery] =  useState('');
    const [city,setCity] =  useState('');
    const [token, setToken] = useState('');

    useEffect(()=>{
        setsaving(true);
        if(route.params != null  && route.params.city != null)
        {
            AsyncStorage.getItem('USER_TOKEN').then(token => {
                setToken(token);
                fetch(API_AGENCIES_BY_CITY+'?city='+route.params.city, {
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
            
        }
    },[]);


    const onChangeSearch = query => {
        setSearchQuery(query);
        if(query.trim()!='')
            setAgencesSerach(agences.filter((item)=>String(item.name).includes(query)  || String(item.phone).includes(query) || String(item.adress).includes(query)));
        else
            setAgencesSerach(agences);
    }
    

    const renderItem = (item) =>{
       return (
           <View style={[styles.containerCityAgence]}>
               <View style={[styles.innerContainerCityAgence]} >
                    <View style={[styles.cityNameContainer]}>
                        <Icon type='font-awesome' name='map-marker' size={28} color='#f6d147' />
                        <View style={{marginLeft:8}}> 
                            <Text type='meduim' style={{fontSize:16}}>{item.name}</Text>
                            <Text  style={{fontSize:14}}>{item.adress}</Text>
                        </View> 
                    </View>
                    <View style={[styles.agenceNumberContainer]}>
                        <Text type='bold' style={[styles.textAgenceName,{marginRight:7}]}> {item.phone} </Text>
                        <Icon onPress={()=>Linking.openURL(`tel:${item.phone}`)} type='font-awesome'  name='phone' size={27} color='#f6d147' /> 
                    </View>
                </View>
           </View>    
       )
    }
    

    return (
        <Container>
            <Content style={[global.container,global.paddingContainer]}>
            <Searchbar
                placeholder="Nom, adresse ou téléphone"
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



