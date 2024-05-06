import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { Default } from '../const.ts';
import { getToken } from 'services/token.ts';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: Default.BaseURL as string,
    timeout: Default.Timeout as number,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;
  });

  return api;
};
