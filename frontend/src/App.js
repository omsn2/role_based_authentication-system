import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages & Components
import ResetPassword from './pages/ResetPassword';
import AdminDashboard from './components/AdminDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './layouts/MainLayout';

import AdminEmployeePanel from './components/AdminEmployeePanel';
import AdminOrganizationPanel from './components/AdminOrganizationPanel';

import AddEmployee from './components/AddEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import ViewEmployees from './components/ViewEmployees';
import AssignDepartment from './components/AssignDepartment';
import AssignRole from './components/AssignRole';
import SetNewPassword from './pages/SetNewPassword';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes - No layout */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />

          {/* Protected/Internal Routes with Logo/Header (via MainLayout) */}
          <Route element={<MainLayout />}>
            {/* Dashboards */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/manager"
              element={
                <ProtectedRoute role="manager">
                  <ManagerDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/employee"
              element={
                <ProtectedRoute role="employee">
                  <EmployeeDashboard />
                </ProtectedRoute>
              }
            />

            {/* Admin Panels */}
            <Route path="/admin/employee" element={<AdminEmployeePanel />} />
            <Route path="/admin/organization" element={<AdminOrganizationPanel />} />

            {/* Employee Actions */}
            <Route path="/admin/employee/add" element={<AddEmployee />} />
            <Route path="/admin/employee/delete" element={<DeleteEmployee />} />
            <Route path="/admin/employee/view" element={<ViewEmployees />} />

            {/* Organization Actions */}
            <Route path="/admin/organization/assign-department" element={<AssignDepartment />} />
            <Route path="/admin/organization/assign-role" element={<AssignRole />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
