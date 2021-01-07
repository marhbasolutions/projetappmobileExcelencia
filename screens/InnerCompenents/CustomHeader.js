import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import {Header} from 'native-base';
import {AuthContext} from '../../components/context';
import NotificationBudge from '../utils/notificationBudge';

export default function CustomHeader({props}) {
  const {openNotification} = useContext(AuthContext);
  return (
    <Header
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: '#242c62',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      transparent={true}
      androidStatusBarColor="#242c62"
      iosBarStyle="light-content">
      <Icon.Button
        name="ios-menu"
        size={25}
        backgroundColor="#242c62"
        onPress={() => props.navigation.openDrawer()}
      />
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 17}}>
        {props.title}
      </Text>
      <Icon.Button
        name="ios-notifications"
        size={25}
        backgroundColor="#242c62"
        onPress={openNotification}>
        <NotificationBudge />
      </Icon.Button>
    </Header>
  );
}
