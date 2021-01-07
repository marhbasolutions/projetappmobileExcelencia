import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {Container, Content} from 'native-base';
import {Icon , Image as IMGG } from 'react-native-elements';
import styles from './styles';
import Notifications from './InnerCompenents/Notifications';
import AsyncStorage from '@react-native-community/async-storage';

const slides = [
  {
    title: 'Choisissez votre metier,\n Nous vous accompagnons',
    image:require('../assets/slides/slide1.jpeg'),
    degrade: '#6a2c70',
  },
  {
    title: 'Nous prenons soins, \n devous & votre famille',
    image:require('../assets/slides/slide2.jpg'),
    degrade: '#1aa6b7',
  },
  {
    title: 'Une dévotion et chalenge,\n pour vous accompagner',
    image: require('../assets/slides/slide3.jpg'),
    degrade: '#625261',
  },
];

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH - SLIDER_WIDTH * 0.05);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const slidesBottom = [
  {
    name: 'Assurance Vie Particulier',
    thumbnail: require('../assets/slides/Retouche-Pension-min.jpg'),
    color: '#d7385e',
    icon: require('../assets/icon1.png'),
  },
  {
    name: 'Assurance Vie Entreprises',
    thumbnail: require('../assets/slides/Regional-MediaThon-Coming-to-Barbados-min.jpg'),
    color: '#0278ae',
    icon: require('../assets/icon2.png'),
  },
  {
    name: 'Assurance Non Vie Particulier',
    thumbnail:  require('../assets/slides/NSIA-Auto-HD-inc-min.jpg'),
    color: '#463333',
    icon: require('../assets/icon3.png'),
  },
  {
    name: 'Assurance Non Vie Entreprises',
    thumbnail: require('../assets/slides/Cargo-StayUpToDate-min.jpg'),
    color: '#2a3d66',
    icon: require('../assets/icon4.png'),
  },
];

const HomeScreen = ({route,navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const {colors} = useTheme();
  const theme = useTheme();
  let carouselRef = useRef(null);
  let carouselRef2 = useRef(null);


  const renderItem = ({item, index}) => {
    return (
      <ImageBackground
        source={item.image}
        style={{height: 200, width: '100%'}}
        imageStyle={{borderRadius: 12}}>
        <LinearGradient
          colors={['#ffffff00', item.degrade]}
          start={{x: 0.92, y: 0}}
          style={{alignItems: 'center', borderRadius: 12, height: '100%'}}>
          <Text
            type="bold"
            style={{
              color: '#fff',
              alignSelf: 'flex-start',
              marginTop: '30%',
              marginLeft: 20,
              fontSize: 18,
            }}>
            {item.title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    );
  };

  const renderItem2 = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('Services')}>
        <ImageBackground
          source={item.thumbnail}
          style={{height: 200}}
          imageStyle={{borderRadius: 12}}>
          <LinearGradient
            colors={['#30336b10', item.color]}
            start={{x: 0.9, y: 0}}
            style={{
              borderRadius: 12,
              alignContent: 'center',
              flex: 1,
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <View style={{alignSelf: 'center'}}>
              <Image
                source={item.icon}
                style={{width: 60, height: 60, resizeMode: 'stretch'}}
              />
              <Text type="bold" style={{color: '#fff', fontSize: 18}}>
                {item.name}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <StatusBar backgroundColor="#242c62" barStyle="light-content" />
      { route.params &&  route.params.shownotif && (
                <Notifications data={[1,2,3]} />
      )}
      <Content>
        <View style={{flex: 1}}>
          <View style={[styles.backGroundHalf]} />
          <View style={styles.section}>
            <Carousel
              ref={c => {
                carouselRef = c;
              }}
              data={slides}
              layout={'default'}
              layoutCardOffset={9}
              renderItem={renderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              itemHeight={ITEM_HEIGHT}
              loop={true}
              autoplay={true}
              activeAnimationType="decay"
              currentIndex={activeSlide}
              autoplayDelay={5000}
              autoplayInterval={5000}
              slide
              onSnapToItem={slideridex => setActiveSlide(slideridex)}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {slides.map((item, index) => {
                let backgroundcurrent =
                  index == activeSlide ? 'yellow' : 'white';
                let sizeactive = index == activeSlide ? 15 : 10;
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      carouselRef.snapToItem(index);
                      carouselRef.stopAutoplay();
                      setActiveSlide(index);
                    }}
                    style={{
                      width: sizeactive,
                      height: sizeactive,
                      backgroundColor: backgroundcurrent,
                      borderRadius: 100,
                      alignSelf: 'center',
                      margin: 8,
                    }}>
                    <Text>.</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={styles.section}>
            <View style={[styles.rowServices]}>
              <View style={{paddingLeft: 5, paddingRight: 5, width: '50%'}}>
                <TouchableOpacity
                  style={[styles.homeBigButton]}
                  onPress={() => navigation.navigate('SinistresTab')}>
                  <Text type="bold" style={[styles.titleServiceHome]}>
                    Espace sinistre
                  </Text>
                  <View style={[styles.counterIconHome]}>
                    <Icon
                      type="font-awesome-5"
                      color={'#fff'}
                      name="file-signature"
                      size={16}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{paddingLeft: 5, paddingRight: 5, width: '50%'}}>
                <TouchableOpacity
                  style={[styles.homeBigButton]}
                  onPress={() => navigation.navigate('SinistresTab',{to:'SinistreDeclaration'})}>
                  <Text type="bold" style={[styles.titleServiceHome]}>
                    Pré-declarer son sinistre
                  </Text>
                  <View style={[styles.counterIconHome]}>
                    <Icon
                      type="font-awesome-5"
                      color={'#fff'}
                      name="edit"
                      size={17}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.rowServices, {marginTop: 12}]}>
              <View style={{paddingLeft: 5, paddingRight: 5, width: '50%'}}>
                <TouchableOpacity
                  style={[styles.homeBigButton]}
                  onPress={() => navigation.navigate('Devis')}>
                  <Text type="bold" style={[styles.titleServiceHome]}>
                    Simuler un devis
                  </Text>
                  <View style={[styles.counterIconHome]}>
                    <Icon
                      type="font-awesome-5"
                      color={'#fff'}
                      name="calculator"
                      size={17}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{paddingLeft: 5, paddingRight: 5, width: '50%'}}>
                <TouchableOpacity
                  style={[styles.homeBigButton]}
                  onPress={() => navigation.navigate('Support')}>
                  <Text type="bold" style={[styles.titleServiceHome]}>
                    Contacter son conseiller
                  </Text>
                  <View style={[styles.counterIconHome]}>
                    <Icon
                      type="font-awesome-5"
                      color={'#fff'}
                      name="handshake"
                      size={17}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text type="bold" style={[styles.servicestitle]}>
              Nos produits phares{' '}
            </Text>
            <Carousel
              ref={c => {
                carouselRef2 = c;
              }}
              data={slidesBottom}
              layout={'default'}
              layoutCardOffset={9}
              renderItem={renderItem2}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH * 0.75}
              itemHeight={ITEM_HEIGHT}
              loop={true}
              autoplay={true}
              activeAnimationType="decay"
              currentIndex={activeSlide2}
              autoplayDelay={5000}
              autoplayInterval={5000}
              slide
              onSnapToItem={slideridex => setActiveSlide2(slideridex)}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {slidesBottom.map((item, index) => {
                let backgroundcurrent =
                  index == activeSlide2 ? 'yellow' : '#242c62';
                let sizeactive = index == activeSlide2 ? 18 : 13;
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      carouselRef2.snapToItem(index);
                      carouselRef2.stopAutoplay();
                      setActiveSlide(index);
                    }}
                    style={{
                      width: sizeactive,
                      height: 6,
                      backgroundColor: backgroundcurrent,
                      borderRadius: 100,
                      alignSelf: 'center',
                      margin: 8,
                    }}>
                    <Text>.</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default HomeScreen;
