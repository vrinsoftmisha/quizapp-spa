import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  ADMIN_DASHBOARD,
  ADMIN_LOGIN,
  ADMIN_SETTINGS,
  DASHBOARD,
  HOME,
  REGISTER,
  USER_LOGIN,
  USER_SETTINGS,
} from "./constant/routes";
import ProtectedRoute from "./components/auth-guard/login-guard";
import UserLogin from "./components/auth/user-login";
import AdminLogin from "./components/auth/admin-login";
import GlobalStateProvider from "./globalstate/globalstate-provider";
import SidebarLayout from "./components/main/sidebar/sidebar-layout";
import Home from "./components/main/home";
import UserDashboard from "./components/user-components/user-dashboard/user-dashboard";
import AdminDashboard from "./components/admin-components/admin-dashboard/admin-dashboard";
import UserSettings from "./components/user-components/user-settings/user-settings";
import AdminSettings from "./components/admin-components/admin-settings/admin-settings";
import Navbar from "./components/main/navbar/navbar";
import UserRegister from "./components/auth/register/user-register";

function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <SidebarLayout />
              </>
            }
          >
            <Route
              path={DASHBOARD}
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path={USER_SETTINGS}
              element={
                <ProtectedRoute>
                  <UserSettings />
                </ProtectedRoute>
              }
            />
            <Route
              path={ADMIN_SETTINGS}
              element={
                <ProtectedRoute>
                  <AdminSettings />
                </ProtectedRoute>
              }
            />
            <Route
              path={ADMIN_DASHBOARD}
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path={HOME}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path={USER_LOGIN} element={<UserLogin />} />
          <Route path={REGISTER} element={<UserRegister />} />

          <Route path={ADMIN_LOGIN} element={<AdminLogin />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Navigate to={USER_LOGIN} />} />
        </Routes>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App;
