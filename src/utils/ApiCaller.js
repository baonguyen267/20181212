import axios from 'axios';
import * as config from './../constants/Config';

export default function callApi(endpoint, method = 'GET', body){
    return(axios({
        method: method,
        url: `${config.ApiURL}/${endpoint}`,
        data: body
      }).catch(err => {
        console.log(err);
      }));
}