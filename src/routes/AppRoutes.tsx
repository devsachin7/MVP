import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from '../guards/AuthGuard';
import DashboardLayout from '../layouts/DashboardLayout';
import PageNotFound from '../components/PageNotFound';
import NewSafetyAudit from '../pages/NewSafetyAudit';
import Review from '../pages/Review';
import Analytics from '../pages/Analytics';
import AddNewUser from '../pages/AddNewUser';
import AllUsers from '../pages/AllUsers';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/safety-audit/new-safety-audit" replace />} />
    <Route element={<AuthGuard><DashboardLayout /></AuthGuard>}>
      <Route path="safety-audit">
        <Route path="new-safety-audit" element={<NewSafetyAudit />} />
        <Route path="review" element={<Review />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
      <Route path="user-management">
        <Route path="add-new-user" element={<AddNewUser />} />
        <Route path="all-users" element={<AllUsers />} />
      </Route>
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes; 