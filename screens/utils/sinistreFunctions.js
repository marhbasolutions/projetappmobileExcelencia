import axios from 'axios';
import {API_CREATE_SINISTRE} from '../api/config';

export const createSinistre = (formData,token) => {
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
  return axios
    .post(API_CREATE_SINISTRE, formData, {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json'
    })
    .then(response => {
      return response.data;
    });
};
