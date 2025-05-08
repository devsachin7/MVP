import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { ApiError, ApiResponse } from '../types/api';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
const TOKEN_COOKIE_NAME = 'auth_token';
const USE_LOCAL_STORAGE = import.meta.env.MODE === 'development';

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private getToken(): string | null | undefined {
    return USE_LOCAL_STORAGE
      ? localStorage.getItem(TOKEN_COOKIE_NAME)
      : Cookies.get(TOKEN_COOKIE_NAME);
  }

  private removeToken(): void {
    if (USE_LOCAL_STORAGE) {
      localStorage.removeItem(TOKEN_COOKIE_NAME);
    } else {
      Cookies.remove(TOKEN_COOKIE_NAME);
    }
  }

  private setupInterceptors(): void {
    // Request interceptor to add authorization token
    this.client.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle common errors
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // Handle token expiration
        if (error.response?.status === 401) {
          this.removeToken();
          window.location.href = '/login';
        }
        
        return Promise.reject(this.formatError(error));
      }
    );
  }

  private formatError(error: AxiosError): ApiError {
    const response = error.response;
    
    if (response?.data && typeof response.data === 'object') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorData = response.data as Record<string, unknown>;
      
      return {
        message: (errorData.message as string) || 'An error occurred',
        errors: errorData.errors as Record<string, string[]> | undefined,
        status: response.status
      };
    }
    
    return {
      message: error.message || 'Network error',
      status: response?.status
    };
  }

  public async get<T>(
    url: string, 
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await this.client.get(url, config);
    return response.data;
  }

  public async post<T, D = unknown>(
    url: string, 
    data?: D, 
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await this.client.post(url, data, config);
    return response.data;
  }

  public async put<T, D = unknown>(
    url: string, 
    data?: D, 
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await this.client.put(url, data, config);
    return response.data;
  }

  public async delete<T>(
    url: string, 
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await this.client.delete(url, config);
    return response.data;
  }
}

export const apiService = new ApiService(); 