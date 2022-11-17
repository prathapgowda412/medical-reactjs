import axios from 'axios';
import LocalstorageService from '../utils/storage/localstorage';

axios.defaults.baseURL = 'http://localhost:5001/';

// axios.defaults.headers.common['latitude'] = latitude;
// axios.defaults.headers.common['longitude'] = longitude;

axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.defaults.headers.common['Access-Control-Allow-Headers'] =
  'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version';

axios.defaults.headers.common['Access-Control-Max-Age'] = '600';

let userToken = LocalstorageService.getPatientToken();
console.log('user token', userToken);
if (userToken) axios.defaults.headers.common['auth-token'] = userToken;

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // toast.error('Network Error', { autoClose: 400 });

    return Promise.reject(error);
  }
);

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
