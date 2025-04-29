import React from 'react';
import { useMsal } from '@azure/msal-react';

const Navbar: React.FC = () => {
  const { instance } = useMsal();

  const handleLogout = async () => {
    localStorage.removeItem('id_token');
    await new Promise((res) => setTimeout(res, 500));
    instance.logoutRedirect();
  };

  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-3">
      <div className="font-semibold text-lg">Dashboard</div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded hover:bg-gray-200">
          <span className="material-icons">settings</span>
        </button>
        <button className="p-2 rounded hover:bg-gray-200" onClick={handleLogout}>
          <span className="material-icons">logout</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar; 