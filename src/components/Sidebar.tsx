import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [safetyOpen, setSafetyOpen] = useState(true);
  const location = useLocation();
  // Check if any of the safety audit subroutes are active
  const isSafetyActive = [
    '/dashboard/new-safety-audit',
    '/dashboard/review',
    '/dashboard/analytics',
    '/dashboard' // in case index route
  ].some((path) => location.pathname === path);

  return (
    <>
      {/* Mobile sidebar backdrop - only for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-30 bg-white shadow-lg transform transition-all duration-300 ease-in-out lg:static lg:inset-0 ${
          isOpen ? 'w-64' : 'w-16'
        } ${isOpen ? 'translate-x-0' : 'translate-x-0'}`}
      >
        {/* Logo */}
        <div className={`flex items-center h-16 px-4 border-b border-gray-200 ${isOpen ? '' : 'justify-center'}`}>
          {isOpen ? (
            <>
              <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
            </>
          ) : (
            <img src="/logo_icon.png" alt="Logo Icon" className="h-8 w-auto" />
          )}
          <button 
            onClick={toggleSidebar}
            className={`p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 ml-auto ${isOpen ? '' : ''}`}
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isOpen ? 
              <ArrowLeftIcon className="w-5 h-5" /> : 
              <ArrowRightIcon className="w-5 h-5" />
            }
          </button>
        </div>

        <div className="p-2">
          <nav>
            <ul className="space-y-1">
              {/* Safety Audit Dropdown */}
              <li>
                <button
                  className={`flex items-center w-full py-2 ${isOpen ? 'px-4' : 'justify-center'} rounded-md text-base font-medium transition-colors ${
                    isSafetyActive ? 'bg-custom-gradient text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => isOpen && setSafetyOpen(!safetyOpen)}
                >
                  <span className={isOpen ? 'mr-3' : ''}>🛡️</span>
                  {isOpen && <span>Safety Audit</span>}
                  {isOpen && <span className="ml-auto">{safetyOpen ? '▾' : '▸'}</span>}
                </button>
                {isOpen && safetyOpen && (
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>
                      <NavLink
                        to="/dashboard/new-safety-audit"
                        className={({ isActive }) =>
                          `block py-2 px-4 rounded-md text-base transition-colors ${
                            isActive
                              ? 'bg-gray-100 text-gray-900 font-semibold'
                              : 'text-gray-800 font-normal hover:bg-gray-100'
                          }`
                        }
                      >
                        New Safety Audit
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/review"
                        className={({ isActive }) =>
                          `block py-2 px-4 rounded-md text-base transition-colors ${
                            isActive
                              ? 'bg-gray-100 text-gray-900 font-semibold'
                              : 'text-gray-800 font-normal hover:bg-gray-100'
                          }`
                        }
                      >
                        Review
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/analytics"
                        className={({ isActive }) =>
                          `block py-2 px-4 rounded-md text-base transition-colors ${
                            isActive
                              ? 'bg-gray-100 text-gray-900 font-semibold'
                              : 'text-gray-800 font-normal hover:bg-gray-100'
                          }`
                        }
                      >
                        Analytics
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 