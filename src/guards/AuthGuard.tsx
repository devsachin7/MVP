import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { instance, inProgress, accounts } = useMsal();

  useEffect(() => {
    if (accounts.length === 0 && inProgress === InteractionStatus.None) {
      instance.loginRedirect();
    }
  }, [accounts, inProgress, instance]);

  if (accounts.length === 0) {
    return null; // Show loader or splash screen if needed
  }

  return <>{children}</>;
};

export default AuthGuard;
