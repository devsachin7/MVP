export const saveAuthTokens = (tokens: any) => {
  if (tokens?.id_token) {
    localStorage.setItem('id_token', tokens.id_token);
  }
  if (tokens?.refresh_token) {
    localStorage.setItem('refresh_token', tokens.refresh_token);
  }
};

export const clearAuthTokens = () => {
  localStorage.removeItem('id_token');
  localStorage.removeItem('refresh_token');
};

export const getIdToken = () => localStorage.getItem('id_token');
export const getRefreshToken = () => localStorage.getItem('refresh_token'); 