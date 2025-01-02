import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

export interface Interceptor<V> {
  onFulfilled?: (value: V) => V | Promise<V>;
  onRejected?: (error: any) => any;
}

export default class Webclient {
  static webclient: AxiosInstance = axios.create();

  static initialize(
    requestInterceptor?: Interceptor<InternalAxiosRequestConfig>,
    responseInterceptor?: Interceptor<AxiosResponse>,
  ): void {
    this.webclient.interceptors.request.use(
      requestInterceptor?.onFulfilled,
      requestInterceptor?.onRejected,
    );

    this.webclient.interceptors.response.use(
      responseInterceptor?.onFulfilled,
      responseInterceptor?.onRejected,
    );
  }
}
