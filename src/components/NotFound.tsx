import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-50">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Page Not Found</p>
      <button
        className="px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
        onClick={() => navigate('/')}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default NotFound; 