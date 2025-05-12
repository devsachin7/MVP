import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const sidebarSections = [
  {
    label: 'Safety Audit',
    icon: 'icon-LE-icon text-xl',
    basePath: '/safety-audit',
    subItems: [
      { label: 'New Safety Audit', path: '/safety-audit/new-safety-audit-1' },
      { label: 'Review', path: '/safety-audit/review' },
      { label: 'Analytics', path: '/safety-audit/analytics' },
    ],
  },
  {
    label: 'Administration',
    icon: 'icon-LE-user text-xl',
    basePath: '/administration',
    subItems: [
      { label: 'User Management', path: '/administration/user-management' },
    ],
  },
  // Add more sections as needed
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(() => {
    // By default, open all sections
    const initial: { [key: string]: boolean } = {};
    sidebarSections.forEach(section => {
      initial[section.label] = true;
    });
    return initial;
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to check if any subroute is active for a section
  const isSectionActive = (section: typeof sidebarSections[0]) => {
    // For Safety Audit, match any /safety-audit/* route
    if (section.basePath === '/safety-audit') {
      return location.pathname.startsWith('/safety-audit');
    }
    // For other sections, match subItems
    return section.subItems.some(item => location.pathname === item.path);
  };

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
            <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
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
              {sidebarSections.map(section => {
                const sectionActive = isSectionActive(section);
                return (
                  <li key={section.label}>
                    <button
                      className={`flex items-center w-full py-2 ${isOpen ? 'px-4' : 'justify-center'} rounded-md text-sm font-medium transition-colors ${
                        sectionActive ? 'bg-custom-gradient text-white' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        if (isOpen) {
                          if (section.subItems && section.subItems.length > 0) {
                            navigate(section.subItems[0].path);
                          }
                          setOpenSections(s => ({ ...s, [section.label]: true }));
                        }
                      }}
                    >
                      <span className={isOpen ? 'mr-3' : ''}>
                        {section.icon ? (
                          <i className={
                            section.icon + ' ' + (sectionActive ? 'text-white' : 'text-black')
                          }></i>
                        ) : null}
                      </span>
                      {isOpen && <span>{section.label}</span>}
                      {isOpen && <span className="ml-auto">{openSections[section.label] ? '▾' : '▸'}</span>}
                    </button>
                    {isOpen && openSections[section.label] && (
                      <ul className="ml-6 mt-1 space-y-1">
                        {section.subItems.map(item => (
                          <li key={item.path}>
                            <NavLink
                              to={item.path}
                              className={({ isActive }) =>
                                `block py-2 px-4 rounded-md text-sm transition-colors ${
                                  isActive
                                    ? 'bg-gray-100 text-gray-900 font-semibold'
                                    : 'text-gray-800 font-normal hover:bg-gray-100'
                                }`
                              }
                            >
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 