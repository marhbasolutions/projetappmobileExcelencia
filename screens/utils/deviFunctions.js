import axios from 'axios';
import {API_CREATE_DEVIS} from '../api/config';

export const storeDevis = (formData,token) => {

  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};

  return axios
    .post(API_CREATE_DEVIS, formData, {
      'content-type': 'application/json',
      accept: 'application/json'
    })
    .then(response => {
      return response.data;
    });
};
