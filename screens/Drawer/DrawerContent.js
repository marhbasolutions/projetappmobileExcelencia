import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../../components/context';
import {Image} from 'react-native';

export function DrawerContent(props) {
  const paperTheme = useTheme();
  const {signOut} = React.useContext(AuthContext);
  const [user, setUser] = useState(
    props.user.name != null ? props.user : JSON.parse(props.user),
  );
  return (
    <View style={{flex: 1, backgroundColor: '#242c62'}}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      {user != null && (
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingBottom: 6,
          }}>
          <Avatar.Image
          style={{backgroundColor:'white'}}
            source={{
              uri:
                'https://i.pinimg.com/474x/67/c3/d6/67c3d63e215e034e01d45c8256d720d3.jpg',
            }}
            size={50}
          />
          <View style={{marginLeft: 15, flexDirection: 'column'}}>
            {user.name != null && (
              <Title style={styles.title}>{String(user.name)}</Title>
            )}
            {user.phone != null && (
              <Caption style={styles.caption}>{user.phone}</Caption>
            )}
          </View>
        </View>
      )}

      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <View style={styles.drawerHeading}>
              <Text style={styles.textHeading}>A propos</Text>
            </View>

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="ios-home" color="#f4f4f4" size={size} />
              )}
              label="Accueil"
              labelStyle={{color: '#f4f4f4'}}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="ios-help-circle" color="#f4f4f4" size={size} />
              )}
              label="Qui Sommes nous"
              labelStyle={{color: '#f4f4f4'}}
              onPress={() => {
                props.navigation.navigate('About');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="ios-apps" color="#f4f4f4" size={size} />
              )}
              label="Nos produits"
              labelStyle={{color: '#f4f4f4'}}
              onPress={() => {
                props.navigation.navigate('Services');
              }}
            />

            {user != null && !user.hasrdv ? (
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="md-calendar" color="#f4f4f4" size={size} />
                )}
                label="Prendre Rendez-vous"
                labelStyle={{color: '#f4f4f4'}}
                onPress={() => {
                  props.navigation.navigate('Rdv');
                }}
              />
            ) : (
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="md-calendar" color="#f4f4f4" size={size} />
                )}
                label="Mes rendez-vous"
                labelStyle={{color: '#f4f4f4'}}
                onPress={() => {
                  props.navigation.navigate('Rdv', {to: 'MesRDV'});
                }}
              />
            )}
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="md-information-circle"
                  color="#f4f4f4"
                  size={size}
                />
              )}
              label="Assistance"
              labelStyle={{color: '#f4f4f4'}}
              onPress={() => {
                props.navigation.navigate('Support');
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            {user != null && user.hascotisations && (
              <View
                style={{
                  position: 'absolute',
                  zIndex: 3,
                  right: 3,
                  top: '66%',
                  backgroundColor: '#ec5858',
                  borderRadius: 30,
                  paddingHorizontal: 5,
                }}>
                <Text style={{color: 'white', fontSize: 13}}>New</Text>
              </View>
            )}
            <View style={styles.drawerHeading}>
              <Text style={styles.textHeading}>Espace Assuré</Text>
            </View>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="pencil-outline" color="#f4f4f4" size={size} />
              )}
              label="Pré-declarer un sinistre"
              labelStyle={{color: '#f4f4f4'}}
              onPress={() => {
                props.navigation.navigate('Sinistre');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="ios-create" color="#f4f4f4" size={size} />
              )}
              label="Simuler un devis"
              labelStyle={{color: '#f4f4f4'}}
              onPress={() => {
                props.navigation.navigate('Devis');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="card" color="#f4f4f4" size={size} />
              )}
              label="Payer mes cotisations"
              labelStyle={{color: '#f4f4f4'}}
              onPress={() => {
                props.navigation.navigate('Cotisations');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="ios-document" color="#f4f4f4" size={size} />
              )}
              label="Mes contrats"
              labelStyle={{color: '#f4f4f4'}}
              onPress={() => {
                props.navigation.navigate('ContractsTab');
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <View style={styles.drawerHeading}>
              <Text style={styles.textHeading}>Localisation</Text>
            </View>
          </Drawer.Section>

          <DrawerItem
            icon={({color, size}) => (
              <Icon name="location" color="#f4f4f4" size={size} />
            )}
            label="Agences"
            labelStyle={{color: '#f4f4f4'}}
            onPress={() => {
              props.navigation.navigate('AgenciesStack');
            }}
          />

          <Drawer.Section style={styles.drawerSection}>
            <View style={styles.drawerHeading}>
              <Text style={styles.textHeading}>Info Pratiques</Text>
            </View>
          </Drawer.Section>

          <DrawerItem
            icon={({color, size}) => (
              <Icon name="ios-partly-sunny" color="#f4f4f4" size={size} />
            )}
            label="Météo actuel"
            labelStyle={{color: '#f4f4f4'}}
            onPress={() => {
              props.navigation.navigate('Weather');
            }}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Icon name="ios-medkit" color="#f4f4f4" size={size} />
            )}
            label="Pharmacie de garde"
            labelStyle={{color: '#f4f4f4'}}
            onPress={() => {
              props.navigation.navigate('Weather');
            }}
          />

          <Drawer.Section style={styles.drawerSection}>
            <View style={styles.drawerHeading}>
              <Text style={styles.textHeading}>Autres</Text>
            </View>
          </Drawer.Section>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="md-call" color="#f4f4f4" size={size} />
            )}
            label="Numéros utiles"
            labelStyle={{color: '#f4f4f4'}}
            onPress={() => {
              props.navigation.navigate('Numbers');
            }}
          />
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-outline" color={'white'} size={size} />
          )}
          labelStyle={{color: '#f4f4f4'}}
          label="Se deconnecter"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#242c62',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#fff',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: '#fff',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 0,
  },
  bottomDrawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  logo: {
    marginTop: 25,
    marginBottom:10,
    alignSelf: 'center',
  },
  drawerHeading: {
    backgroundColor: '#f9db4d',
    padding: 10,
    fontSize: 20,
  },
  textHeading: {
    color: '#f4f4f4',
    fontSize: 20,
    color: '#242c62',
  },
});
