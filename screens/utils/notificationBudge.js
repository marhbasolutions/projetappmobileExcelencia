import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {fetchNotifications} from './notificationsFunctions';
const NotificationBudge = () => {
  const [notifCount, setNotifCount] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('USER').then(user => {
      const {id} = JSON.parse(user);
      fetchNotifications(id).then(res => {
        if (res.success) {
          setNotifCount(res.notifications.length);
        }
      });
    });
  });

  if (notifCount > 0) {
    return (
      <Text
        style={{
          fontSize: 10,
          color: 'white',
          backgroundColor: 'red',
          borderRadius: 50,
          width: 17,
          height: 17,
          textAlign: 'center',
          paddingVertical: 1,
          position: 'absolute',
          top: 4,
          left: 4,
        }}>
        {notifCount}
      </Text>
    );
  } else {
    return <></>;
  }
};

export default NotificationBudge;
