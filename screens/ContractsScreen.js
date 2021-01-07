import React , { useState,useEffect }from 'react';
import {  View ,Text, ActivityIndicator } from 'react-native';
import global from './globalSytle';
import { Container,Content, Header } from 'native-base';
import { List } from 'react-native-paper';
import CustomHeader from './InnerCompenents/CustomHeader';
import { API_GET_MY_CONTRATS } from './api/config';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ContractsScreen({navigation}) {

    const [saving, setsaving] = useState(true);
    const [contrats, setContrats] = useState([]);
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const [categoryConracts, setCategoryConracts] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('USER_ID').then((user)=>{
          if(user != null )
          {
            getContrats(user);
          }
          else
          {
            console.log('user unset');
          }
        });


        AsyncStorage.getItem('USER_TOKEN').then(token => {
          setToken(token);
        });
     
      }, []);

      const getContrats = (user) => {

  
        fetch(API_GET_MY_CONTRATS+'?user='+user, {
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
                      if(json.success && json.contrats!= null)
                      {
                        setContrats(json.contrats);
                        setCategoryConracts([... new Set(json.contrats.map(item => item.category))]);
                      }
            })
            .catch((error) => {
                      console.error(error);
            });
      }



    

    return (
        <Container>
            <CustomHeader props={{title:"Mes contrats",navigation:navigation}} />
            { !saving ? (<Content style={[global.container,styles.containerAbout]}>
                <View style={{flex:1}}>
                    { contrats.length > 0 ? (
                        <List.Section title="Les contrats">
                            { categoryConracts.map((item)=>{
                            return <List.Accordion
                                onPress={handlePress}
                                title={item}
                                left={props => <List.Icon {...props} icon="folder" />}>
                                  { contrats.map((item)=>{
                                      return <List.Item title={<TouchableOpacity style={{flexDirection:'row',justifyContent:'space-evenly'}}><Text>Contrat n° : {item.numero} </Text></TouchableOpacity>} left={props => <List.Icon color='#f6d147' style={{padding:0}} size={12}  icon="file" />} />
                                    })}
                                </List.Accordion>
                            })}
                        </List.Section>
                    ):(<Text style={{alignSelf:'center',flex:1,marginTop:'40%'}}>Vous n'avez aucun contrat en cours ... </Text>) }
                </View>
            </Content>):(
                <ActivityIndicator
                style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
                color="#f6d147"
                size={50}
              />
            )}
        </Container>
        
    );
}



