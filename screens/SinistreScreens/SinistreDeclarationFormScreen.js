import React, {useState, useEffect} from 'react';
import {
  PermissionsAndroid,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container, Content, Button} from 'native-base';
import styles from '../styles';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import {FlatGrid} from 'react-native-super-grid';
import ImageView from 'react-native-image-viewing';
import {createSinistre} from '../utils/sinistreFunctions';
import FlashMessage , { showMessage, hideMessage } from "react-native-flash-message";


const SinistreDeclarationFormScreen = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);
  const [imgCoverURL, setimgCoverURL] = useState();
  const [imgCover, setimgCover] = useState(false);
  const [captures, setcaptures] = useState([]);
  const [message,setMessage] = useState('');
  const [token, setToken] = useState('');

  const {activeSinistre} = route.params;
  useEffect(() => {
    AsyncStorage.getItem('USER_TOKEN').then(token => {
      setToken(token);
    });
  },[]);

  const options = {
    title: 'Choisir des captures',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const selectimagesPermited = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        selectimages();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const selectimages = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const name = `${new Date().getTime() +
          '.' +
          response.fileName.split('.')[1]}`;
        const file = {
          uri: response.uri,
          type: response.type,
          name: name,
          filename: name,
        };
        const source = 'data:image/jpeg;base64,' + response.data;

        setcaptures([...captures, file]);

        //console.log(captures.length);
      }
    });
  };

  const saveSinistre = () => {
    setLoading(true);

    var data = new FormData();
    data.append('type', activeSinistre);
    data.append('description', String(message));
    data.append('contract', 123);

    // captures.forEach(element => {
    //   data.append('captures[]', element);
    // });

    for (let i = 0; i < captures.length; i++) {
      data.append(`capture-${i}`, captures[i]);
    }

    createSinistre(data,token).then(res => {
      setLoading(false);
          if(res.success)
          {
            showMessage({
              message: res.message,
              type: "success",
            });
          } 
          else
          {
            showMessage({
              message: res.message,
              type: "danger",
            });
          }
    });
  };

  const getUrlImg = imgURL => {
    setimgCoverURL([{uri: imgURL.uri}]);
    setimgCover(true);
  };

  const closeCoverImg = () => {
    setimgCover(false);
  };

  const filterImages = item => {
    const newCaptures = captures.filter(image => image !== item);
    setcaptures(newCaptures);
  };

  const renderGridItem = ({item}) => {
    return (
      <View style={{borderRadius: 5}}>
        <Icon
          name="ios-close"
          size={20}
          color="white"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: 'red',
            zIndex: 9999,
          }}
          onPress={() => filterImages(item)}
        />
        <TouchableOpacity onPress={() => getUrlImg(item)}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
            }}
            source={{
              uri: item.uri,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Container>
      <Content style={{padding: 8}}>
        <ScrollView style={{flex: 1, paddingBottom: 30}}>
          <View style={[{width: '100%'}]}>
            <Text style={[styles.label, {marginTop: 10}]}>
              {' '}
              Selectionner des captures{' '}
            </Text>

            <View style={{marginTop: 10}}>
              <Button
                transparent
                onPress={() => selectimagesPermited()}
                style={[
                  styles.button,
                  {backgroundColor: '#f6d147', width: 100},
                ]}>
                <Icon name="ios-add" size={20} color="black" />
              </Button>
              <FlatGrid
                keyExtractor={(item, index) => index}
                itemDimension={100}
                data={captures}
                spacing={10}
                renderItem={renderGridItem}
              />
            </View>

            <Text style={[styles.label, {marginTop: 10}]}>
              {' '}
              Votre message {' '}
            </Text>

            <TextInput
            style={{borderWidth:1,marginTop:10,borderRadius:10,borderColor:'#242c62'}}
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => setMessage(String(text))}
            value={String(message)}/>

            <Button
              transparent
              style={[styles.button]}
              onPress={!loading ? saveSinistre : null}>
              {loading ? (
                <ActivityIndicator
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    flex: 1,
                  }}
                  color="#f6d147"
                  size={30}
                />
              ) : (
                <Text style={{color: '#fff'}}>Valider</Text>
              )}
            </Button>
          </View>
        </ScrollView>
      </Content>
      <ImageView
        images={imgCoverURL}
        imageIndex={0}
        visible={imgCover}
        onRequestClose={() => closeCoverImg()}
      />
      <FlashMessage position="top" /> 
    </Container>
  );
};

export default SinistreDeclarationFormScreen;