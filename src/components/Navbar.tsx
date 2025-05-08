import React, { useState, useRef, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { MenuIcon, UserIcon, LogoutIcon } from '../icons';
import { getUserInfo, clearAuthData } from '../utils/auth';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { instance, accounts } = useMsal();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Clear our stored auth data
    clearAuthData();
    // Use MSAL to logout
    instance.logoutRedirect();
  };

  // Get user from both our local storage and MSAL
  const userInfo = getUserInfo();
  const msalAccount = accounts[0];
  
  // Get user display name from stored auth data, fallback to MSAL account data
  const userName = userInfo?.name || 
                msalAccount?.idTokenClaims?.given_name as string || 
                (msalAccount?.idTokenClaims?.name as string) || 
                msalAccount?.name || 
                'User';
  
  // Get user email from stored auth data, fallback to MSAL account data
  const userEmail = userInfo?.username || 
                 (msalAccount?.idTokenClaims?.emails as string[])?.[0] || 
                 (msalAccount?.idTokenClaims?.email as string) || 
                 msalAccount?.username || 
                 '';

  return (
    <header className="bg-white shadow-sm z-10 sticky top-0">
      <div className="flex justify-between items-center px-4 py-3 lg:px-6">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-gray-500 lg:hidden hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          aria-label="Open sidebar"
        >
          <MenuIcon className="h-6 w-6" />
        </button>

        <div className="flex-1 lg:ml-4">
          <h1 className="text-lg font-semibold text-gray-900 lg:hidden">React Dashboard</h1>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center text-sm p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <UserIcon className="h-5 w-5" />
            </div>
            <span className="ml-2 hidden lg:block text-gray-700">{userName}</span>
            <svg className="ml-1 h-5 w-5 text-gray-400 hidden lg:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">
                <p className="font-medium">{userName}</p>
                <p className="text-sm text-gray-500 truncate">{userEmail}</p>
              </div>
              <a
                href="/dashboard/profile"
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <UserIcon className="h-4 w-4 mr-2" />
                Profile
              </a>
              <button
                onClick={handleLogout}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogoutIcon className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar; 