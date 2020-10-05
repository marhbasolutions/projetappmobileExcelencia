import React from 'react';
import {  SectionList,View ,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,TouchableOpacity,SafeAreaView  } from 'react-native';
import { Button } from 'react-native-elements';
import global from '../../styles/index';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import { Container,Content } from 'native-base';
import { Feather,FontAwesome,Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import CustomFooter from '../../components/Footer/CustomFooter';


export default function AgencesScreen({navigation}) {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const agences = [
        ['Brazzaville','Dolisie','Loandjili','Madingou','Owando','Kinkala','Impfondo','Ouesso','Dolisie','Sibiti'],
    ]

    const renderItem = (item) =>{
       return (
           <View style={[styles.containerCityAgence]}>
               <TouchableOpacity style={[styles.innerContainerCityAgence]} onPress={()=>navigation.navigate('DetailsAgence',{ville:item})} >
                    <View style={[styles.cityNameContainer]}>
                        <FontAwesome name='building-o' size={28} color='#f6d147' />  
                        <Text type='meduim' style={{fontSize:16,marginLeft:8}}>{item}</Text>
                    </View>
                    <View style={[styles.agenceNumberContainer]}>
                        <Text type='bold' style={[styles.textAgenceName]}> { (Math.random()*10).toFixed(0) } Agences  </Text>
                         <Ionicons name='ios-arrow-forward' size={27} color='#f6d147' /> 
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
            <Text style={[global.h2]}>Veuillez choisir une date </Text>
            <SafeAreaView style={{flex: 1}}>
            <SectionList
            style={[global.marginTop]}
                sections={[
                    {title: 'D', data: agences[0]},
                ]}
                renderItem={({ item }) => renderItem(item)}
                renderSectionHeader={()=>
                <Searchbar
                    style={[styles.searchStyle]}
                    placeholder="Cherche par ville"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                  />}
               
                keyExtractor={(item, index) => index}
                />
                </SafeAreaView>
            </Content>
            <CustomFooter  name="Agences" navigation={navigation} />
        </Container>
        
    );
}



