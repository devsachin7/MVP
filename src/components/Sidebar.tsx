import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  UsersIcon, 
  ChartBarIcon, 
  CogIcon, 
  ArrowLeftIcon,
  ArrowRightIcon
} from '../icons'; // We'll create these icons later

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <HomeIcon className="w-5 h-5" /> },
    { name: 'Users', path: '/dashboard/users', icon: <UsersIcon className="w-5 h-5" /> },
    { name: 'Analytics', path: '/dashboard/analytics', icon: <ChartBarIcon className="w-5 h-5" /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <CogIcon className="w-5 h-5" /> },
  ];

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
        <div className={`flex items-center h-16 px-4 border-b border-gray-200 ${isOpen ? 'justify-between' : 'justify-center'}`}>
          {isOpen && <div className="text-xl font-bold text-primary">Dashboard</div>}
          
          {/* Toggle Button for desktop */}
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
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
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center py-2 ${isOpen ? 'px-4' : 'px-0 justify-center'} rounded-md transition-colors ${
                        isActive 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                    title={!isOpen ? item.name : undefined}
                  >
                    <span className={`inline-flex ${isOpen ? 'mr-3' : 'mr-0'} text-current`}>{item.icon}</span>
                    {isOpen && <span>{item.name}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 