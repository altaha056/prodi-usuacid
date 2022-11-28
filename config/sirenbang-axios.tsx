import axios from 'axios';
import https from 'https';
import { baseUrl } from './sirenbang-url';

const instance = axios.create({
  baseURL: `${baseUrl}/`,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

export default instance;
