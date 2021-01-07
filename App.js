import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Dialog, {
  DialogButton,
  DialogContent,
  DialogFooter,
} from 'react-native-popup-dialog';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {Portal, Provider as PaperProvider} from 'react-native-paper';

import {DrawerContent} from './screens/Drawer/DrawerContent';

import MainTabScreen from './screens/Tabs/MainTabScreen';
import ServicesStackScreen from './screens/Stacks/ServicesStack';
import SinistreStackScreen from './screens/Stacks/SinistreStack';
import RdvStackScreen from './screens/Stacks/RdvStack';
import AgenciesStackScreen from './screens/Stacks/AgenciesStack';
import RootStackScreen from './screens/Stacks/RootStackScreen';
import DevisStackScreen from './screens/Stacks/DevisStack';

import CotisationsStackScreen from './screens/Stacks/CotisationsStack';

import {AuthContext} from './components/context';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import Notifications from './screens/InnerCompenents/Notifications';
import {fetchNotifications} from './screens/utils/notificationsFunctions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Drawer = createDrawerNavigator();

const App = () => {
  const initialLoginState = {
    isLoading: true,
    openNotif: false,
    userToken: null,
    notifications: [],
    loadingNotif: false,
  };

  const [user, setUser] = useState(null);

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOADING':
        return {
          ...prevState,
          isLoading: true,
        };
      case 'OPEN_NOTIF':
        return {
          ...prevState,
          openNotif: true,
          loadingNotif: true,
        };
      case 'CLOSE_NOTIF':
        return {
          ...prevState,
          openNotif: false,
          loadingNotif: false,
        };
      case 'FETCH_NOTIF':
        return {
          ...prevState,
          notifications: action.notifications,
          loadingNotif: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async user => {
        dispatch({type: 'LOADING'});
        try {
          await AsyncStorage.setItem('USER', JSON.stringify(user));
          await AsyncStorage.setItem('USER_ID', `${user.id}`);
          await AsyncStorage.setItem('USER_TOKEN', `${user.salt}`);
          await AsyncStorage.setItem('USER_NAME', `${user.name}`);
          await AsyncStorage.setItem('USER_PHONE', `${user.phone}`);
          await AsyncStorage.setItem(
            'USER_HAS_RDV',
            `${JSON.stringify(user.hasrdv)}`,
          );
          await AsyncStorage.setItem(
            'USER_HAS_COTISATIONS',
            `${JSON.stringify(user.hascotisations)}`,
          );
          setUser(user);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGIN', token: user.id});
      },
      signOut: async () => {
        dispatch({type: 'LOADING'});
        try {
          await AsyncStorage.removeItem('USER_ID');
          setUser(null);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: async user => {
        dispatch({type: 'LOADING'});
        try {
          setUser(user);
          await AsyncStorage.setItem('USER', JSON.stringify(user));
          await AsyncStorage.setItem('USER_ID', `${user.id}`);
          await AsyncStorage.setItem('USER_TOKEN', `${user.salt}`);
          await AsyncStorage.setItem('USER_NAME', `${user.name}`);
          await AsyncStorage.setItem('USER_PHONE', `${user.phone}`);
          await AsyncStorage.setItem(
            'USER_HAS_RDV',
            `${JSON.stringify(user.hasrdv)}`,
          );
          await AsyncStorage.setItem(
            'USER_HAS_COTISATIONS',
            `${JSON.stringify(user.hascotisations)}`,
          );
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'REGISTER', token: user.id});
      },
      openNotification: async () => {
        dispatch({type: 'OPEN_NOTIF'});

        await AsyncStorage.getItem('USER_ID').then(userId => {
          fetchNotifications(userId).then(res => {
            if (res.success) {
              dispatch({type: 'FETCH_NOTIF', notifications: res.notifications});
            }
          });
        });
      },
      closeNotification: () => {
        dispatch({type: 'CLOSE_NOTIF'});
      },
    }),
    [],
  );

  useEffect(() => {
    if (user == null) {
      AsyncStorage.getItem('USER').then(user => {
        setUser(user);
      });
    }

    SplashScreen.hide();
    console.disableYellowBox = true;
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('USER_TOKEN');
      } catch (e) {
        console.log(e);
      }

      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 2000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator
          style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}
          color="#f6d147"
          size={50}
        />
      </View>
    );
  }

  return (
    <PaperProvider>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {loginState.userToken !== null ? (
            <Drawer.Navigator
              drawerContent={props => <DrawerContent {...props} user={user} />}
              drawerPosition="left">
              <Drawer.Screen name="HomeTab" component={MainTabScreen} />
              <Drawer.Screen name="Services" component={ServicesStackScreen} />
              <Drawer.Screen name="Sinistre" component={SinistreStackScreen} />
              <Drawer.Screen name="Rdv" component={RdvStackScreen} />
              <Drawer.Screen name="Devis" component={DevisStackScreen} />
              <Drawer.Screen
                name="Cotisations"
                component={CotisationsStackScreen}
              />
              <Drawer.Screen
                name="AgenciesStack"
                component={AgenciesStackScreen}
              />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
        <Portal>
          <Dialog
            visible={loginState.openNotif}
            onTouchOutside={() => dispatch({type: 'CLOSE_NOTIF'})}
            footer={
              <DialogFooter style={{marginTop: 0}}>
                <DialogButton
                  textStyle={{fontSize: 12}}
                  text="Fermer"
                  onPress={() => dispatch({type: 'CLOSE_NOTIF'})}
                />
              </DialogFooter>
            }>
            <DialogContent
              style={{height: windowHeight * 0.8, width: windowWidth * 0.9}}>
              <Notifications
                notifications={loginState.notifications}
                loadingNotif={loginState.loadingNotif}
              />
            </DialogContent>
          </Dialog>
        </Portal>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
