import Cookies from 'js-cookie';
import { AuthResponse, SignupCredentials, User, UserCredentials } from '../types/auth';
import { authApi } from '../api/auth.api';

const TOKEN_COOKIE_NAME = 'auth_token';
const TOKEN_EXPIRY_DAYS = 7;
const USE_LOCAL_STORAGE = import.meta.env.MODE === 'development';

class AuthService {
  async login(credentials: UserCredentials): Promise<AuthResponse> {
    const response = await authApi.login(credentials);
    this.setToken(response.data.token);
    return response.data;
  }

  async signup(credentials: SignupCredentials): Promise<AuthResponse> {
    const response = await authApi.signup(credentials);
    this.setToken(response.data.token);
    return response.data;
  }

  async logout(): Promise<void> {
    try {
      await authApi.logout();
    } catch (err) {
      // Continue with logout even if API call fails
      console.error('Logout API call failed:', err);
    } finally {
      this.removeToken();
      window.location.href = '/login';
    }
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      if (!this.getToken()) {
        return null;
      }
      
      const response = await authApi.getCurrentUser();
      return response.data;
    } catch (err) {
      this.removeToken();
      return null;
    }
  }

  setToken(token: string): void {
    if (USE_LOCAL_STORAGE) {
      localStorage.setItem(TOKEN_COOKIE_NAME, token);
      return;
    }
    
    Cookies.set(TOKEN_COOKIE_NAME, token, { 
      expires: TOKEN_EXPIRY_DAYS,
      secure: window.location.protocol === 'https:',
      sameSite: 'strict'
    });
  }

  getToken(): string | undefined | null {
    if (USE_LOCAL_STORAGE) {
      return localStorage.getItem(TOKEN_COOKIE_NAME);
    }
    
    return Cookies.get(TOKEN_COOKIE_NAME);
  }

  removeToken(): void {
    if (USE_LOCAL_STORAGE) {
      localStorage.removeItem(TOKEN_COOKIE_NAME);
      return;
    }
    
    Cookies.remove(TOKEN_COOKIE_NAME);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const authService = new AuthService();