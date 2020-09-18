

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
const image1 = { uri: "https://www.alwihdainfo.com/photo/art/grande/29285521-28425818.jpg" };
const image2 = { uri: "https://www.idiotiki-syntaxi.gr/wp-content/uploads/2018/04/shutterstock_628366121_Saving-1024x610.jpg" };
const image3 = { uri: "https://www.top-faq.com/wp-content/uploads/2020/07/assurance-vie.jpg" };
const image4 = { uri: "https://www.bj-assurances.be/wp-content/uploads/2019/04/BJ_Assurance_familiale_header.jpg" };

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.index = 0;
  }
  componentDidMount() {
    setTimeout(() => { this.scrollView.scrollTo({ x: -30 }) }, 1) // scroll view position fix
  }


  render() {

    return (

      <Container>



        <Header name="Home" openDrawer={this.props.navigation} />

        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ width: '100%', height: '50%', backgroundColor: '#30336b', paddingLeft: 10 }} >

            <Text style={styles.titleFirst}>Our recommended products for you</Text>

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

                <ImageBackground source={image4} style={styles.image} imageStyle={{ borderRadius: 6 }}
                >
                  <View style={styles.viewChild}>

                    <Text style={styles.title1}>50%</Text>
                    <Text style={styles.title2}>Assurance home for you and your family</Text>
                    <Button style={{ color: '#fff', marginTop: 5, paddingLeft: 6, paddingRight: 6, alignSelf: 'flex-end' }} info><Text style={{ color: '#fff' }} > Take a lock </Text></Button>


                  </View>

                </ImageBackground>

              </View>


              <View style={styles.view}>

                <ImageBackground source={image2} style={styles.image} imageStyle={{ borderRadius: 6 }}
                >
                  <View style={styles.viewChild}>

                    <Text style={styles.title1}>50%</Text>
                    <Text style={styles.title2}>Assurance home for you and your family</Text>
                    <Button style={{ color: '#fff', marginTop: 5, paddingLeft: 6, paddingRight: 6, alignSelf: 'flex-end' }} warning><Text style={{ color: '#fff' }} > Take a lock </Text></Button>


                  </View>

                </ImageBackground>

              </View>
              <View style={styles.view}>

                <ImageBackground source={image1} style={styles.image} imageStyle={{ borderRadius: 6 }}
                >
                  <View style={styles.viewChild}>

                    <Text style={styles.title1}>50%</Text>
                    <Text style={styles.title2}>Assurance home for you and your family</Text>
                    <Button style={{ color: '#fff', marginTop: 5, paddingLeft: 6, paddingRight: 6, alignSelf: 'flex-end' }} warning><Text style={{ color: '#fff' }} > Take a lock </Text></Button>


                  </View>

                </ImageBackground>

              </View>
              <View style={styles.view}>

                <ImageBackground source={image3} style={styles.image} imageStyle={{ borderRadius: 6 }}
                >
                  <View style={styles.viewChild}>

                    <Text style={styles.title1}>50%</Text>
                    <Text style={styles.title2}>Assurance home for you and your family</Text>
                    <Button style={{ color: '#fff', marginTop: 5, paddingLeft: 6, paddingRight: 6, alignSelf: 'flex-end' }} warning><Text style={{ color: '#fff' }} > Take a lock </Text></Button>


                  </View>

                </ImageBackground>

              </View>


            </ScrollView>


          </View>


          <View style={{ width: '100%', height: '100%', }} >

            <View style={styles.actionsBlock}>

              <View style={{ flexDirection: 'row' }}>
                <View style={styles.div} >
                  <TouchableOpacity style={styles.divToutch}
                    onPress={() => this.props.navigation.navigate('Contract')}
                  >
                    <Text style={styles.titleDiv}>Prepare Create contrat</Text>
                    <FontAwesome5 color={'#fff'} name="file-signature" size={24} />
                    

                  </TouchableOpacity>
                </View>
                <View style={styles.div} >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Rdv')}
                    style={styles.divToutch} >

                    <Text style={styles.titleDiv}>Prendre RDV</Text>

                    <FontAwesome5  color={'#fff'} name="calendar-alt" size={24} />

                    

                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={styles.div} >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Devis')}

                    style={styles.divToutch} >

                    <Text style={styles.titleDiv}>Simuler devis</Text>
                    <FontAwesome5  color={'#fff'} name="calculator" size={24} />
                    

                  </TouchableOpacity>
                </View>
                <View style={styles.div} >
                  <TouchableOpacity style={styles.divToutch}

                    onPress={() => this.props.navigation.navigate('Guide')}
                  >

                    <Text style={styles.titleDiv}>Guider rensigner</Text>
                    <FontAwesome  color={'#fff'} size={24} name="handshake-o" />
                    

                  </TouchableOpacity>
                </View>

              </View>


            </View>

            <ScrollView
              ref={(scrollView) => { this.scrollView = scrollView; }}
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

                <View style={styles.viewChild2}>

                  <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: '40%', height: '100%', }} >
                      <Image source={image4} style={styles.imageDiv} />

                    </View>
                    <View style={{ width: '60%', height: '100%', padding: 5 }} >

                      <Text style={styles.titleScroll2}>Sinistres</Text>
                      <Text style={styles.descScroll2}>Commentez pour lancer une discussion, ajouter une le plan de travail.</Text>

                    </View>

                  </TouchableOpacity>

                </View>


              </View>

              <View style={styles.view2}>

                <View style={styles.viewChild2}>

                  <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: '40%', height: '100%', }} >
                      <Image source={image1} style={styles.imageDiv} />

                    </View>
                    <View style={{ width: '60%', height: '100%', padding: 5 }} >

                      <Text style={styles.titleScroll2}>Assurance vie</Text>
                      <Text style={styles.descScroll2}>Commentez pour lancer une discussion, ajouter une le plan de travail.</Text>

                    </View>

                  </TouchableOpacity>

                </View>


              </View>


              <View style={styles.view2}>

                <View style={styles.viewChild2}>

                  <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: '40%', height: '100%', }} >
                      <Image source={image3} style={styles.imageDiv} />

                    </View>
                    <View style={{ width: '60%', height: '100%', padding: 5 }} >

                      <Text style={styles.titleScroll2}>Assutrance Auto & Moto</Text>
                      <Text style={styles.descScroll2}>Commentez pour lancer une discussion, ajouter une le plan de travail.</Text>

                    </View>

                  </TouchableOpacity>

                </View>


              </View>


            </ScrollView>



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
    padding: 6,
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
    fontSize: 14,
    color: '#fff',
    width:'80%'
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
    width: width - 80,
    margin: 10,
    height: 150,
    borderRadius: 10,
    //paddingHorizontal : 30
  }, view2: {
    backgroundColor: '#666',
    width: width - 80,
    margin: 10,
    top: 60,
    height: 120,
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

  }, imageDiv: {
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
     top:-70
  },
  containerBottom:{
    position:'relative',
     top:60,
  }
});