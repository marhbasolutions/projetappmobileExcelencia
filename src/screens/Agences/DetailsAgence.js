import React from 'react';
import {  SectionList,View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity  } from 'react-native';
import { Button } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content } from 'native-base';
import { Feather,FontAwesome,Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import CustomFooter from '../../components/Footer/CustomFooter';


export default function DetailsAgenceScreen({navigation}) {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const agences = [
        ['Excelencia centre ville'],
    ]

    const renderItem = (item) =>{
       return (
           <View style={[styles.containerCityAgence]}>
               <TouchableOpacity style={[styles.innerContainerCityAgence]}>
                    <View style={[styles.cityNameContainer]}>
                        <FontAwesome name='building-o' size={28} color='#f6d147' />  
                        <Text type='bold' style={{fontSize:16,marginLeft:8,}}>{item}</Text>
                    </View>
                    <View style={[styles.agenceNumberContainer]}>
                         <Ionicons name='ios-call' size={32} color='#f6d147' onPress={()=>alert('Appel')} /> 
                    </View>
           </TouchableOpacity> 
                <View
                    style={{
                        marginTop:17,
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                    />
           </View>
              
       )
    }
    

    return (
        <Container>
            <Content style={[global.container,global.paddingContainer]}>
            <SectionList
  
                sections={[
                    {title: 'D', data: agences[0]},
                ]}
                renderItem={({ item }) => renderItem(item)}
                renderSectionHeader={()=><Text type='bold' style={[styles.textAgenceName,{marginBottom:25,alignSelf:'flex-end'}]}> 3 Agences  </Text>}
                keyExtractor={(item, index) => index}
                />
            </Content>
          
        </Container>
        
    );
}



