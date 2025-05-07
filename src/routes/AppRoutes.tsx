import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from '../guards/AuthGuard';
import DashboardLayout from '../layouts/DashboardLayout';
import PageNotFound from '../components/PageNotFound';
import NewSafetyAudit1 from '../pages/safety-audit/NewSafetyAudit1';
import Review from '../pages/Review';
import Analytics from '../pages/Analytics';
import AddNewUser from '../pages/AddNewUser';
import AllUsers from '../pages/AllUsers';
import NewSafetyAudit2 from '../pages/safety-audit/NewSafetyAudit2';
import NewSafetyAudit3 from '../pages/safety-audit/NewSafetyAudit3';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/safety-audit/new-safety-audit-1" replace />} />
    <Route element={<AuthGuard><DashboardLayout /></AuthGuard>}>
      <Route path="safety-audit">
        <Route path="new-safety-audit-1" element={<NewSafetyAudit1 />} />
        <Route path="new-safety-audit-2" element={<NewSafetyAudit2 />} />
        <Route path="new-safety-audit-3" element={<NewSafetyAudit3 />} />
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