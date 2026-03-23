import { BrowserRouter, Route, Routes, Outlet, useLocation, Navigate } from "react-router-dom";

import Layout_front from "./front/layout/layout_front.jsx";
import LandingPage from "./front/pages/LandingPage.jsx";
import LoginPage from "./front/pages/LoginPage.jsx";
import Layout from "./app/layout/Layout.jsx";
import Chat from "./app/pages/ChatPage.jsx";
import Settings from "./app/pages/SettingsPage.jsx";
import ChatPage from "./app/pages/proofChat.jsx";
import Users from "./app/pages/userspage.jsx";
import UserCreate from "./app/pages/userCreate.jsx";

import RoleProtectedRoute from "./app/protect_routes/protect_routes.jsx";

function RequireAuth() {
  const location = useLocation();
  const auth = localStorage.getItem("token") !== null;

  if (!auth) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

function RootRoute() {
  const auth = localStorage.getItem("token") !== null;

  if (!auth) {
    return <Outlet />;
  }

  return <Navigate to="/app" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootRoute />}>
          <Route path="/" element={<Layout_front />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<LoginPage />} />

        <Route element={<RequireAuth />}>
          <Route path="/app" element={<Layout />}>
            <Route index element={<Chat />} />
            <Route path="chat" element={<Chat />} />
            <Route path="settings" element={<Settings />} />
            <Route path="chatproof" element={<ChatPage />} />

            <Route
              path="users"
              element={
                <RoleProtectedRoute allowedRoles={[1, "1"]}>
                  <Users />
                </RoleProtectedRoute>
              }
            />

            <Route
              path="users/create"
              element={
                <RoleProtectedRoute allowedRoles={[1, "1"]}>
                  <UserCreate />
                </RoleProtectedRoute>
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;