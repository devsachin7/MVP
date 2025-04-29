import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white shadow h-full transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <span className={`font-bold text-xl transition-opacity ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Logo</span>
          <button onClick={() => setSidebarOpen((v) => !v)} className="ml-2 p-2 rounded hover:bg-gray-200">
            <span className="material-icons">menu</span>
          </button>
        </div>
        <nav className="mt-4 flex flex-col gap-2">
          {/* Example nav items */}
          <a href="/" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded">
            <span className="material-icons">dashboard</span>
            {sidebarOpen && <span>Dashboard</span>}
          </a>
          <a href="/review" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded">
            <span className="material-icons">assignment</span>
            {sidebarOpen && <span>Review</span>}
          </a>
          <a href="/analytics" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded">
            <span className="material-icons">bar_chart</span>
            {sidebarOpen && <span>Analytics</span>}
          </a>
        </nav>
      </aside>
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
        {/* Footer */}
        <footer className="bg-white shadow text-center py-2 text-gray-500 text-sm">
          © 2025 McCarthy Vaughn Partnership. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout; 