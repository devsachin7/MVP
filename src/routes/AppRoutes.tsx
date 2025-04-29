import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../guards/AuthGuard';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import NotFound from '../components/NotFound';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route element={<AuthGuard><DashboardLayout /></AuthGuard>}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/review" element={<div>Review Page</div>} />
      <Route path="/analytics" element={<div>Analytics Page</div>} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes; 