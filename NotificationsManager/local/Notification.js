import React , {useEffect, useState} from 'react';

import PushNotification from "react-native-push-notification";

export default class Notification {

     pushLocal(message,datetimestamp)  {
        PushNotification.localNotificationSchedule({
            priority: "high",
            message: message, // (required)
            date: new Date(datetimestamp), // in 60 secs
          });
    }



 

}

