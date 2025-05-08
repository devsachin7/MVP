import { apiService } from '../services/api';
import { AuthResponse, User, UserCredentials, SignupCredentials } from '../types/auth';
import { ApiResponse } from '../types/api';
import { mockLogin, mockSignup } from './mock';

// Flag to determine if we should use mock data (useful for development)
const USE_MOCK = import.meta.env.MODE === 'development';

export const authApi = {
  login: (credentials: UserCredentials): Promise<ApiResponse<AuthResponse>> => {
    if (USE_MOCK) {
      return mockLogin(credentials.email, credentials.password)
        .then(data => ({
          data,
          message: 'Login successful',
          success: true,
        }))
        .catch(error => Promise.reject({ 
          message: error.message || 'Login failed',
          success: false,
        }));
    }
    
    return apiService.post<AuthResponse, UserCredentials>('/auth/login', credentials);
  },
  
  signup: (credentials: SignupCredentials): Promise<ApiResponse<AuthResponse>> => {
    if (USE_MOCK) {
      return mockSignup(credentials.name, credentials.email)
        .then(data => ({
          data,
          message: 'Signup successful',
          success: true,
        }))
        .catch(error => Promise.reject({ 
          message: error.message || 'Signup failed',
          success: false,
        }));
    }
    
    return apiService.post<AuthResponse, SignupCredentials>('/auth/signup', credentials);
  },
  
  logout: (): Promise<ApiResponse<boolean>> => {
    if (USE_MOCK) {
      return Promise.resolve({
        data: true,
        message: 'Logout successful',
        success: true,
      });
    }
    
    return apiService.post<boolean>('/auth/logout');
  },
  
  getCurrentUser: (): Promise<ApiResponse<User>> => {
    if (USE_MOCK) {
      const token = localStorage.getItem('auth_token');
      
      if (!token) {
        return Promise.reject({
          message: 'No token found',
          success: false,
        });
      }
      
      // Simulate getting current user from token
      return Promise.resolve({
        data: {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          role: 'admin',
        },
        message: 'User retrieved successfully',
        success: true,
      });
    }
    
    return apiService.get<User>('/auth/me');
  },
  
  refreshToken: (): Promise<ApiResponse<{ token: string }>> => {
    if (USE_MOCK) {
      return Promise.resolve({
        data: { token: 'mock-jwt-token-' + Date.now() },
        message: 'Token refreshed',
        success: true,
      });
    }
    
    return apiService.post<{ token: string }>('/auth/refresh');
  },
}; 