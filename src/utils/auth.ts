interface AuthData {
  accessToken: string;
  idToken: string;
  account: {
    name: string;
    username: string;
    idTokenClaims: Record<string, unknown>;
  };
  expiresOn: number;
  timestamp: number;
}

/**
 * Get authentication data from storage
 * Checks localStorage first, then falls back to sessionStorage
 */
export const getAuthData = (): AuthData | null => {
  // Try localStorage first
  const localData = localStorage.getItem('authData');
  if (localData) {
    try {
      const authData = JSON.parse(localData) as AuthData;
      
      // Check if token is expired
      if (authData.expiresOn > Date.now()) {
        return authData;
      } else {
        // Clear expired token
        clearAuthData();
      }
    } catch (e) {
      console.error('Error parsing auth data:', e);
    }
  }
  
  // If not in localStorage or expired, try sessionStorage
  const sessionData = sessionStorage.getItem('authData');
  if (sessionData) {
    try {
      const authData = JSON.parse(sessionData) as AuthData;
      
      // Check if token is expired
      if (authData.expiresOn > Date.now()) {
        return authData;
      } else {
        // Clear expired token
        clearAuthData();
      }
    } catch (e) {
      console.error('Error parsing auth data:', e);
    }
  }
  
  return null;
};

/**
 * Get access token
 */
export const getAccessToken = (): string | null => {
  const authData = getAuthData();
  return authData ? authData.accessToken : null;
};

/**
 * Get id token
 */
export const getIdToken = (): string | null => {
  const authData = getAuthData();
  return authData ? authData.idToken : null;
};

/**
 * Get user info
 */
export const getUserInfo = () => {
  const authData = getAuthData();
  return authData ? authData.account : null;
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return getAuthData() !== null;
};

/**
 * Clear auth data from storage
 */
export const clearAuthData = (): void => {
  localStorage.removeItem('authData');
  sessionStorage.removeItem('authData');
};

/**
 * Store authentication data after successful login
 */
export const storeAuthData = (authResponse: {
  accessToken?: string;
  idToken?: string;
  account?: {
    name?: string;
    username?: string;
    idTokenClaims?: Record<string, unknown>;
  };
  expiresOn?: Date;
}): void => {
  if (!authResponse) return;
  
  const authData = {
    accessToken: authResponse.accessToken || '',
    idToken: authResponse.idToken || '',
    account: {
      name: authResponse.account?.name || '',
      username: authResponse.account?.username || '',
      idTokenClaims: authResponse.account?.idTokenClaims || {}
    },
    expiresOn: authResponse.expiresOn?.getTime() || Date.now() + 3600000, // 1 hour default expiry
    timestamp: Date.now()
  };
  
  // Store in sessionStorage and localStorage
  sessionStorage.setItem("authData", JSON.stringify(authData));
  localStorage.setItem("authData", JSON.stringify(authData));
}; 