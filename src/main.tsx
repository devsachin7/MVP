import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MsalProvider } from '@azure/msal-react';
import { initializeMsal } from './authConfig';

const root = ReactDOM.createRoot(document.getElementById("root")!);

initializeMsal().then((msalInstance) => {
  root.render(
    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </React.StrictMode>
  );
});