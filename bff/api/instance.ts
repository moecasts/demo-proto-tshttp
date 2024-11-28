import axios, { AxiosRequestConfig } from 'axios';
import camelcaseKeys from 'camelcase-keys';

export const createAxiosInstance = (config?: Partial<AxiosRequestConfig>) => {
  const instance = axios.create({
    timeout: 3000,
    withCredentials: true,
    ...config,
  });

  instance.interceptors.response.use(
    (response) => {
      const data = camelcaseKeys(response.data, { deep: true });

      return data;
    },
  );

  return instance;
};

export const instance = createAxiosInstance();
