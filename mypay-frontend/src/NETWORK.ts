import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import CONFIGDATA from './CONFIG';

const axios = require('axios');

// Create an instance using the config defaults provided by the library
const instance: AxiosInstance = axios.create({
  baseURL: CONFIGDATA.API_URL,
});

async function NetworkRequest(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  url: string,
  data?: any,
  headerRequired: boolean = true,
) {
  if (headerRequired) {
    // Alter defaults after instance has been created
    instance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('JWT')}`;
  }
  let response;

  try {
    switch (method) {
      case 'GET':
        response = await instance.get(url);
        return response;

        break;
      case 'POST':
        response = await instance.post(url, data);
        return response;

        break;
      case 'PUT':
        response = await instance.put(url, data);
        return response;

        break;
      case 'PATCH':
        response = await instance.patch(url, data);
        return response;

        break;
      case 'DELETE':
        response = await instance.delete(url);
        return response;

        break;

      default:
        return AxiosError.ERR_BAD_OPTION;
        break;
    }
  } catch (error) {
    return error;
  }
}

export default NetworkRequest;
