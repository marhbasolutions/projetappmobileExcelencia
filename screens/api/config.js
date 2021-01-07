export const HOST = 'http://quickcar.irun-code.com';

export const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';

export const API_SIGN_IN = HOST + '/mobile/login';

export const API_SIGN_UP = HOST + '/mobile/signup';

export const API_FORGOT_PASSWORD = HOST + '/mobile/password';

export const API_UPDATE_PROFILE = HOST + '/mobile/updateuser';

export const API_GET_CATEGORIES = HOST + '/mobile/getcategoriesservices';

export const API_SERVICES_BY_CATEGORY = HOST + '/mobile/getservicesbycategory';

export const API_AGENCIES = HOST + '/mobile/getcityagencies';

export const API_AGENCIES_BY_CITY = HOST + '/mobile/getagenciesbycity';

export const API_CREATE_RDV = HOST + '/mobile/createrdv';

export const API_CREATE_PAYEMENT_RDV = HOST + '/mobile/addrdvpayment';

export const API_CREATE_SINISTRE = HOST + '/mobile/createsinistre';

export const API_CREATE_DEVIS = HOST + '/mobile/createdevis';

export const API_PHARMACY = HOST + '/mobile/pharmacygarde';

export const API_GET_USER = HOST + '/mobile/getuser';

export const API_GET_MY_RDV = HOST + '/mobile/mesrdv';

export const API_GET_MY_PAYEMENT_RDV = HOST + '/mobile/meyrdvpayment';

export const API_GET_MY_DEVIS = HOST + '/mobile/mesdevis';

export const API_GET_MY_NOTIS = HOST + '/mobile/mesnotfis';

export const API_CLOSE_RDV = HOST + '/mobile/closerdv';

export const API_GET_MY_SINISTRES = HOST + '/mobile/messinistres';

export const API_HAS_CONTRACT = HOST + '/mobile/hascontract';

export const API_GET_MY_COTISATIONS = HOST + '/mobile/mescotisations';

export const API_GET_MY_CONTRATS = HOST + '/mobile/mescontrats';

export const API_SUBSCRIBE = HOST + '/mobile/subscribe';

export const API_GET_TOBEPAYED = HOST + '/mobile/gettobepayed';

export const API_FETCH_NOTIFICATIONS = HOST + '/mobile/notifications?user=';

export const API_DISMISS_NOTIFICATIONS = HOST + '/mobile/setseen?notification=';

export const CLIENT_ID =
  'AbO_faZ-uGh7tDWo-Vhwgsy3qlUNpbJF-XoYUm6bQclzQJFO0xWW4D3SAclvqdUJWeqOvhzA5Jp17zax';
export const CLIENT_SECRET =
  'ENb-GmnKIIBo6c8V5tfxNu96jJNE2P1Mw9wVwhkB3_YhammwDrrQACKivCQhLsA8VnX4KfwpdJfJqmfU';

export const encodingData = data => {
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  return formBody;
};
