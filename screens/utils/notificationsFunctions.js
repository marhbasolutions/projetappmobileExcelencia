import axios from 'axios';
import {
  API_FETCH_NOTIFICATIONS,
  API_DISMISS_NOTIFICATIONS,
} from '../api/config';

export const fetchNotifications = (user_id,token) => {

  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};

  return axios
    .get(API_FETCH_NOTIFICATIONS + user_id, {
      'content-type': 'application/json',
      accept: 'application/json'
    })
    .then(response => {
      return response.data;
    });
};

export const dissmissNotification = (notif_id,token) => {

  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};

  return axios
    .get(API_DISMISS_NOTIFICATIONS + notif_id, {
      'content-type': 'application/json',
      accept: 'application/json'
    })
    .then(response => {
      return response.data;
    });
};
