import axios from 'axios';
import {
  API_FORGOT_PASSWORD,
  API_SIGN_IN,
  API_SIGN_UP,
  API_UPDATE_PROFILE,
} from '../api/config';

export const login = userData => {
  let token = '54DkpdSaSSxpCI/7x5hSjquQoGvUHYTf7p32sap.Lss';
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
  return axios
    .post(API_SIGN_IN, userData, {
      'content-type': 'application/json',
      accept: 'application/json'
    })
    .then(response => {
      return response.data;
    });
};

export const register = userData => {
  let token = '54DkpdSaSSxpCI/7x5hSjquQoGvUHYTf7p32sap.Lss';
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};

  return axios
    .post(API_SIGN_UP, userData, {
      'content-type': 'application/json',
      accept: 'application/json'
    })
    .then(response => {
      return response.data;
    });
};

export const forgotPassword = (userData,token) => { 
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};

  return axios
    .post(API_FORGOT_PASSWORD, userData, {
      'content-type': 'application/json',
      accept: 'application/json'
    })
    .then(response => {
      return response.data;
    });
};

export const changeProfile = (userData,token) => {
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
  return axios
    .post(API_UPDATE_PROFILE, userData, {
      'content-type': 'application/json',
      accept: 'application/json'
    })
    .then(response => {
      return response.data;
    });
};
