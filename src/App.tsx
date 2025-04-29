import React from 'react';
import { useMsal } from '@azure/msal-react';
import { Button, Typography, Container } from '@mui/material';
import { loginRequest } from './authConfig';

const App: React.FC = () => {
  const { instance, accounts } = useMsal();

  const login = () => {
    instance.loginRedirect();
  };

  const logout = () => {
    instance.logoutRedirect();
  };

  const callApi = async () => {
    const result = await instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    });

    const res = await fetch('https://localhost:7245/api/secure', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${result.accessToken}`
      }
    });

    const data = await res.json();
    console.log('API Response:', data);
  };

  const callAdminApi = async () => {
    const result = await instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    });

    const res = await fetch('https://localhost:7245/api/secure/admin', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${result.accessToken}`
      }
    });

    if (res.status === 403) {
      alert('🚫 You are not authorized as Admin!');
    } else {
      const data = await res.json();
      console.log('Admin API Response:', data);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Azure AD B2C POC</Typography>

      {accounts.length > 0 ? (
        <>
          <p>Welcome, {accounts[0].username}</p>
          <Button variant="contained" color="primary" onClick={callApi}>Call Protected API</Button>
          <Button onClick={callAdminApi}>Call Admin-Only API</Button>
          <Button variant="contained" color="secondary" onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="contained" color="primary" onClick={login}>
          Login
        </Button>
      )}
    </Container>
  );
};

export default App;
