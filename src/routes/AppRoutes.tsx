import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../guards/AuthGuard';
import DashboardLayout from '../layouts/DashboardLayout';
import PageNotFound from '../components/PageNotFound';
import Login from '../pages/Login';
import NewSafetyAudit from '../pages/NewSafetyAudit';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route element={<AuthGuard><DashboardLayout /></AuthGuard>}>
      <Route path="/dashboard">
        <Route index element={<NewSafetyAudit />} />
        <Route path="new-safety-audit" element={<NewSafetyAudit />} />
        <Route path="review" element={<div>Review Page</div>} />
        <Route path="analytics" element={<div>Analytics Page</div>} />
      </Route>
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes; 