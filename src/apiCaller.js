import axios from 'axios';
import * as Config from './containers/Config.js';

export default function callApi(endpoint, method, body){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        // withCredentials: true
      }).catch((err) => {
          console.log(err);
        });
        
}