import axios from 'axios';
import https from 'https';
import Cookies from 'js-cookie';
import { baseUrl } from './url';

const instance = axios.create({
  baseURL: `${baseUrl}/`,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  headers: {
    Authorization: `Bearer ${Cookies.get('ssotok')}`,
  },
});

export default instance;
