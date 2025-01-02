import { Method } from 'axios';
import Webclient from './Webclient';

const DEFAULT_JSON_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const apiRequest = async <T>(
  endpoint: string,
  method: Method,
  data?: any,
  params?: { [k: string]: any },
  headers?: { [key: string]: string },
): Promise<T> => {
  try {
    const url = `http://localhost:8080${endpoint}`;

    const response = await Webclient.webclient.request<T>({
      url,
      method,
      headers: {
        ...DEFAULT_JSON_HEADERS,
        ...headers,
      },
      params,
      data,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message || 'An error occurred';
  }
};
