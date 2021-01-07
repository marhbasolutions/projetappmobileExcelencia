import React from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { View, Text,  StyleSheet,ActivityIndicator,Dimensions } from 'react-native';
import { Icon  } from 'react-native-elements'
import { Button } from 'native-base';
import { HOST } from '../api/config';
import HTML from "react-native-render-html";


const  {height, width} = Dimensions.get('window');

const ServiceDetailDescriptionScreen = ({route,navigation}) => {
  const [service,setService] = React.useState(route.params!=null &&  route.params.service!=null ? route.params.service:null);
  const [saving, setsaving] = React.useState(false);  
  
  React.useEffect(() => {
    //setTimeout( setsaving(false),1000);
    console.log('sdsd',HOST + '/images/services/' + service.link)
  },[]);

  return (
     !saving ? (
      <View style={styles.container}>
        <View>
            <Button onPress={()=>navigation.navigate('ServiceSubscription',{service:service})} full  style={{paddingHorizontal:18,backgroundColor:'#f6d147',marginBottom:8,position:'absolute',zIndex:3,right:6,bottom:4,borderRadius:7}}>
                    <Icon type='material-community' name='check' color='#242c62' size={26} /> 
                    <Text style={{color:'#242c62',fontWeight:'bold'}}> Souscrire maintenant </Text>
           </Button>
            <Image
                source={{ uri: HOST + '/images/services/' + service.thumbnail}}
                style={styles.image} 
            />
        </View>
     

        <ScrollView style={styles.scrollContainer}>
          <HTML html={service.description} contentWidth={width} />
        </ScrollView>
       
      </View>
      ):(
        <ActivityIndicator
                style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
                color="#f6d147"
                size={50}
              />
      )
    );
};

export default ServiceDetailDescriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242c62",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#242c62",
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  title: {
    color: "#fff",
    fontSize: 18
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  image: {
    height:250,
    width:'100%'
  },
  text: {
    backgroundColor: "#242c62",
    color: "#fff",
    padding: 6,
    borderRadius: 6,
    width: "80%",
    },
    miniHeader: {
        color: "#242c62",
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 8
    }
});
