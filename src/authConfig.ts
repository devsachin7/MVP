import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "0cac9ec5-1cfd-42ba-844d-588c6b96f2a2",
    authority: "https://McCarthyVaughnB2C.b2clogin.com/McCarthyVaughnB2C.onmicrosoft.com/B2C_1_B2C_1A_SIGNIN",
    knownAuthorities: ["McCarthyVaughnB2C.b2clogin.com"],
    redirectUri: "https://localhost:5173/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false
  }
};


export const loginRequest = {
  scopes: ["https://McCarthyVaughnB2C.onmicrosoft.com/mvp-portal-api/demo.read"]
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const initializeMsal = async () => {
  await msalInstance.initialize(); // ensures internal state is ready
  return msalInstance;
};