import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';

const Login: React.FC = () => {
  const { instance, accounts, inProgress } = useMsal();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (inProgress === InteractionStatus.None) {
      if (accounts.length === 0) {
        instance.loginRedirect();
      } else {
        navigate('/dashboard');
      }
    }
  }, [accounts, inProgress, instance, navigate]);
    
  // If user is already logged in, show a different button
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Checking authentication...</h2>
        <p className="text-gray-600 text-sm">Redirecting you to the appropriate page.</p>
      </div>
    </div>
  );
};

export default Login; 