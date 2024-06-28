import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import SpinnerLoader from "../components/overlayAndLoader/SpinnerLoader";
import AuthRoute from "../pages/auth/AuthPage";
import MasterLayout from "../pages/MasterLayout";
import Analytics from "../pages/modules/Analytics";
import Dashboard from "../pages/modules/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="auth/*" element={<AuthRoute />} />
        <Route path="*" element={<Navigate to="/auth" />} />
        <Route path="home" element={<MasterLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
