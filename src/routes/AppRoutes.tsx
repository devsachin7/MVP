import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../guards/AuthGuard';
import DashboardLayout from '../layouts/DashboardLayout';
import PageNotFound from '../components/PageNotFound';
import NewSafetyAudit1 from '../pages/safety-audit/NewSafetyAudit1';
import Review from '../pages/safety-audit/review';
import Analytics from '../pages/Analytics';
import NewSafetyAudit2 from '../pages/safety-audit/NewSafetyAudit2';
import ReviewAuditDetails from '../pages/safety-audit/review/ReviewAuditDetails';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import UserManagement from '../pages/administration/components/UserManagement/UserManagement';
import TradePartners from '../pages/administration/components/TradePartners/TradePartners';

const AppRoutes: React.FC = () => (
  <Routes>
    {/* <Route path="/" element={<Navigate to="/safety-audit/new-safety-audit-1" replace />} /> */}
    <Route path="/" element={<Login/>} />
    <Route element={<AuthGuard><DashboardLayout /></AuthGuard>}>
    <Route path="/dashboard" element={<Dashboard />} />
      <Route path="safety-audit">
        <Route path="new-safety-audit-1" element={<NewSafetyAudit1 />} />
        <Route path="new-safety-audit-2" element={<NewSafetyAudit2 />} />
        <Route path="review" element={<Review />} />
        <Route path="review-audit-details" element={<ReviewAuditDetails />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
      <Route path="leadership-engagement">
        {/* <Route path="all-users" element={<AllUsers />} /> */}
      </Route>
      <Route path="administration">
        <Route path="user-management" element={<UserManagement/>} />
        <Route path="trade-partners" element={<TradePartners/>} />
      </Route>
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes; 