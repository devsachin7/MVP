import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../guards/AuthGuard';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../components/PageNotFound';
import Login from '../pages/Login';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route element={<AuthGuard><DashboardLayout /></AuthGuard>}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/review" element={<div>Review Page</div>} />
      <Route path="/analytics" element={<div>Analytics Page</div>} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes; 