// Debug utility functions

export const logAuthState = () => {
  console.log('Auth Debug Info:');
  console.log('Current Path:', window.location.pathname);
  console.log('Local Storage AuthData:', localStorage.getItem('authData'));
  console.log('Session Storage AuthData:', sessionStorage.getItem('authData'));
  
  // Check MSAL account in cache
  try {
    const msalAccounts = JSON.parse(localStorage.getItem('msal.account.keys') || '{}');
    console.log('MSAL Accounts:', msalAccounts);
  } catch (e) {
    console.log('Error parsing MSAL accounts:', e);
  }
};

// Debug redirection issues
export const reportRedirectIssue = (source: string, error?: unknown) => {
  console.group(`Redirect Issue (${source})`);
  console.log('Current URL:', window.location.href);
  console.log('Current Time:', new Date().toISOString());
  
  if (error) {
    console.error('Error:', error);
  }
  
  logAuthState();
  console.groupEnd();
}; 