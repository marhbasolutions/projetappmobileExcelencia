

import React, { Component } from "react";
import { StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Header from './HeaderScreen';
import FooterCompement from './FooterScreen';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Footer, FooterTab, Icon, Button } from 'native-base';
import Carousel from "@rhysforyou/react-native-carousel";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from '../components/CustomText';


const { width } = Dimensions.get('window');
const height = width*100 /60;
const image1 = { uri: "http://excel-assurance.com/wp-content/uploads/2019/08/Slide_1920x860CampagneFil3.jpg" };
const image2 = { uri: "http://excel-assurance.com/wp-content/uploads/2019/08/Black-female-boss-leading-corporate-meeting-talking-to-diverse-businesspeople-923039680_2125x1416-1168x779.jpeg" };
const image3 = { uri: "http://excel-assurance.com/wp-content/uploads/2019/10/slide2.jpg" };
const image4 = { uri: "https://www.bj-assurances.be/wp-content/uploads/2019/04/BJ_Assurance_familiale_header.jpg" };


const images = [
  'http://excel-assurance.com/wp-content/uploads/2019/10/NSIA-Auto-HD-inc-350x195.jpg',
  'http://excel-assurance.com/wp-content/uploads/2019/08/Retraite-retouche-V2-350x195.jpg',
  'http://excel-assurance.com/wp-content/uploads/2019/08/NSIA-Pr%C3%A9voyanceHD-inc-2-350x195.png'
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.index = 0;
  }
  componentDidMount() {
    //setTimeout(() => { this.scrollView.scrollTo({ x: -30 }) }, 1) // scroll view position fix
  }


  render() {

    return (

      <Container>



        <Header name="Home" openDrawer={this.props.navigation} />

        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ width: '100%', height: '50%', backgroundColor: '#30336b', paddingLeft: 10 }} >

          <ScrollView
              ref={(scrollView) => { this.scrollView = scrollView; }}
              style={styles.container}
              //pagingEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}

              decelerationRate={0}
              snapToInterval={width - 60}
              snapToAlignment={"center"}
              contentInset={{
                top: 0,
                // left: 30,
                bottom: 0,
                // right: 30,
              }}>
              <View style={styles.view}>

                <ImageBackground source={image1} style={styles.image} imageStyle={{ borderRadius: 6 }}>
                  <View style={styles.viewChild}>

                    <Text style={styles.title1}>50%</Text>
                    <Text style={styles.title2}>Assurance home for you and your family</Text>
                    


                  </View>

                </ImageBackground>

              </View>
              <View style={styles.view}>

                <ImageBackground source={image2} style={styles.image} imageStyle={{ borderRadius: 6 }}
                >
                  <View style={styles.viewChild}>

                    <Text style={styles.title1}>50%</Text>
                    <Text style={styles.title2}>Assurance home for you and your family</Text>
                    
                  </View>

                </ImageBackground>

              </View>
              <View style={styles.view}>

                <ImageBackground source={image3} style={styles.image} imageStyle={{ borderRadius: 6 }}
                >
                  <View style={styles.viewChild}>

                    <Text style={styles.title1}>50%</Text>
                    <Text style={styles.title2}>Assurance home for you and your family</Text>
                    

                  </View>

                </ImageBackground>

              </View>
              
            </ScrollView>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', position:'relative',top:-90}}>
            <Button onPress={()=>this.scrollView.scrollToEnd({animated: true})} style={{position:'relative',margin:5,backgroundColor:'transparent',height:15,borderRadius:100}}><Text style={{width:15,height:15,backgroundColor:'white',borderRadius:100}}></Text></Button>
            <Button onPress={()=>this.scrollView.scrollTo({x:400,animated: true})} style={{position:'relative',margin:5,height:15,borderRadius:100}}><Text style={{width:15,height:15,backgroundColor:'white',borderRadius:100}}></Text></Button>
            <Button onPress={()=>this.scrollView.scrollTo({x:0,animated: true})} style={{position:'relative',margin:5,height:15,borderRadius:100}}><Text style={{width:15,height:15,backgroundColor:'white',borderRadius:100,}}></Text></Button>
            </View>

                
          </View>


          <View style={{ width: '100%', height: '100%', }} >

            <View style={styles.actionsBlock}>

              <View style={{ flexDirection: 'row' }}>
                <View style={styles.div} >
                  <TouchableOpacity style={styles.divToutch}
                    onPress={() => this.props.navigation.navigate('Sinistre')}
                  >
                    <Text type='bold' style={styles.titleDiv}>Espace sinistre</Text>
                    <View style={{backgroundColor:'black',borderRadius:100,padding:10,justifyContent:'center'}}>
                    <FontAwesome5 color={'#fff'} style={{alignSelf:'center'}}  name="file-signature" size={24} />
                    </View>
                    

                  </TouchableOpacity>
                </View>
                <View style={styles.div} >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Rdv')}
                    style={styles.divToutch} >

                    <Text type='bold' style={styles.titleDiv}>Pré-declarer son sinistre</Text>

                    <FontAwesome5  color={'#fff'} name="calendar-alt" size={24} />

                    

                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={styles.div} >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Devis')}

                    style={styles.divToutch} >

                    <Text type='bold' style={styles.titleDiv}>Simuler un devis</Text>
                    <FontAwesome5  color={'#fff'} name="calculator" size={24} />
                    

                  </TouchableOpacity>
                </View>
                <View style={styles.div} >
                  <TouchableOpacity style={styles.divToutch}

                    onPress={() => this.props.navigation.navigate('Guide')}
                  >

                    <Text type='bold' style={styles.titleDiv}>Contacter son conseiller</Text>
                    <FontAwesome  color={'#fff'} size={24} name="handshake-o" />
                    

                  </TouchableOpacity>
                </View>

              </View>


            </View>

                <Text type='bold' style={{position:'absolute',top:70,marginLeft:10,fontSize:20}}>NOS PRODUITS ET SERVICES </Text>
                    <ScrollView
                      ref={(scrollView2) => { this.scrollView2 = scrollView2; }}
                      style={[styles.container,styles.containerBottom]}
                      //pagingEnabled={true}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}

                      decelerationRate={0}
                      snapToInterval={width - 60}
                      snapToAlignment={"center"}
                      contentInset={{
                        top: 200,
                        // left: 30,
                        bottom: 0,
                        // right: 30,
                      }}>
                      <View style={styles.view2}>

                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>

                        <ImageBackground source={{uri:images[0]}} style={{height:'100%',width:'100%',resizeMode:'cover'}} imageStyle={{ borderRadius: 6 }}>
                              <View style={{width:'auto',alignSelf: 'flex-start',position:'absolute',bottom:4,right:4 }}>
                                <Text type='bold' style={{color:'white',width:'100%',fontSize:23}}>NISA AUTO</Text>
                              </View>
                        </ImageBackground>
                        </TouchableOpacity>


                      </View>



                          <View style={styles.view2}>

                              <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>

                              <ImageBackground source={{uri:images[1]}} style={{height:'100%',width:'100%',resizeMode:'cover'}} imageStyle={{ borderRadius: 6 }}>
                                    <View style={{width:'auto',alignSelf: 'flex-start',position:'absolute',bottom:4,right:4 }}>
                                      <Text type='bold' style={{color:'white',width:'100%',fontSize:23}}>NISA RETRAITE</Text>
                                    </View>
                              </ImageBackground>
                              </TouchableOpacity>


                            </View>



                  



                      <View style={styles.view2}>

                          <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>

                          <ImageBackground source={{uri:images[2]}} style={{height:'100%',width:'100%',resizeMode:'cover'}} imageStyle={{ borderRadius: 6 }}>
                                <View style={{width:'auto',alignSelf: 'flex-start',position:'absolute',bottom:4,right:4 }}>
                                  <Text type='bold' style={{color:'white',width:'100%',fontSize:23}}>NSIA PREVOYANCES</Text>
                                </View>
                          </ImageBackground>
                          </TouchableOpacity>


                          </View>

                    </ScrollView>

            <View style={{flexDirection:'row',alignSelf:'center', alignItems:'center',justifyContent:'center', position:'absolute',top:'43%'}}>
            <Button onPress={()=>this.scrollView2.scrollToEnd({animated: true})} style={{position:'relative',margin:5,backgroundColor:'orange',height:15,width:40}}><Text style={{width:'100%',height:'100%',}}></Text></Button>
            <Button onPress={()=>this.scrollView2.scrollTo({x:400,animated: true})} style={{position:'relative',margin:5,backgroundColor:'orange',height:15,width:40}}><Text style={{width:'100%',height:'100%',backgroundColor:'orange',}}></Text></Button>
            <Button onPress={()=>this.scrollView2.scrollTo({x:0,animated: true})} style={{position:'relative',margin:5,backgroundColor:'orange',height:15,width:40}}><Text style={{width:'100%',height:'100%',backgroundColor:'orange',borderRadius:100,}}></Text></Button>
            </View>



          </View>




        </View>

        <FooterCompement isSelected={true} name="Home" openDrawer={this.props.navigation} />


      </Container>



    );
  };


}

const styles = StyleSheet.create({
  container: {

    // flex:1,
    // height:'100%'

  },
  div: {
    width: '50%', height: '100%', padding: 8,
  },
  titleScroll2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#30336b',

  },
  descScroll2: {
    fontSize: 13,
    color: '#30336b',

  },
  divToutch: {
    width: '100%', height: 60, backgroundColor: '#f6b93b', padding: 8, borderRadius: 6,
    padding: 7,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 15,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  titleDiv: {
    fontSize: 16,
    color: '#fff',
    width:'75%',
  },
  titleFirst: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    paddingLeft: 10,
    marginBottom: 6

  },
  title1: {

    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    // opacity: 1,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    textShadowColor: 'black'
  },
  title2: {

    fontSize: 16,
    // fontWeight: 'bold',
    color: '#fff',
    // opacity: 1,
    marginTop: 8,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    textShadowColor: 'black'
  },
  loginButton: {
    height: 53,

    backgroundColor: '#f9db4d',

  },
  view: {
    backgroundColor: '#666',
    width: width - 40,
    margin: 10,
    height: 150,
    borderRadius: 10,

    //paddingHorizontal : 30
  }, view2: {
    backgroundColor: '#666',
    width: width - 80,
    margin: 10,
    top: 60,
    height: 130,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  viewChild: {
    // backgroundColor: '#666',
    // opacity: 0.9,
    padding: 10,

    width: '100%',
    height: '100%',
  },
  viewChild2: {
    // opacity: 0.9,
    borderRadius: 10,

    width: '100%',
    height: '100%',
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  image: {
    flex: 1,
    opacity: 0.8,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf:'center',
    width:'100%'
  }, 
  imageDiv: {
    flex: 1,
    opacity: 0.8,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 10,

  },
  actionsBlock:{
     flex: 1, 
     flexDirection: 'column', 
     padding: 10 ,
     position:'absolute',
     top:-90
  },
  containerBottom:{
    position:'relative',
     top:40,
  }
});