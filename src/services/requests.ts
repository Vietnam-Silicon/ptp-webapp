import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { toCamel, toSnake } from './transform';

const apiClient = axios.create({
  baseURL: 'http://ptp-directus-alb-1876176935.ap-southeast-1.elb.amazonaws.com', // Replace with your API base URL
  timeout: 30000, // Request timeout in milliseconds
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add any custom request headers or configurations here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle response data here
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

const call = async <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await apiClient.request<T>({
      url: endpoint,
      ...config,
      data: toSnake(config?.data || {}),
      params: toSnake(config?.params || {}),
      headers: {
        'Authorization': 'Bearer T4UdgMRWLswlnKUDfAKSgOP8iHJqundQ'
      }
    });
    return toCamel(response.data);
  } catch (error) {
    throw error;
  }
};

export const get = async <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> =>
  call<T>(endpoint, { ...config, method: 'GET' });

export const post = async <T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
  call<T>(endpoint, { ...config, method: 'POST', data });

export const put = async <T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
  call<T>(endpoint, { ...config, method: 'PUT', data });

export const remove = async <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> =>
  call<T>(endpoint, { ...config, method: 'DELETE' });
