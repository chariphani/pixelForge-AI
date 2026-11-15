import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GenerateImage from "./pages/GenerateImage";
import Dashboard from "./pages/Dashboard";
import MyImages from "./pages/MyImages";
import ImageDetails from "./pages/ImageDetails";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: "linear-gradient(135deg, #27272a 0%, #09090b 60%, #022c22 100%)",
            color: "#ecfdf5",
            border: "1px solid rgba(52, 211, 153, 0.35)",
            borderBottom: "4px solid #022c22",
            borderRadius: "14px",
            padding: "12px 16px",
            fontSize: "14px",
            fontWeight: 500,
            boxShadow:
              "0 18px 40px -10px rgba(16, 185, 129, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)",
          },
          success: {
            iconTheme: { primary: "#34d399", secondary: "#09090b" },
          },
          error: {
            style: {
              border: "1px solid rgba(248, 113, 113, 0.4)",
              borderBottom: "4px solid #450a0a",
              boxShadow:
                "0 18px 40px -10px rgba(239, 68, 68, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)",
            },
            iconTheme: { primary: "#f87171", secondary: "#09090b" },
          },
          loading: {
            iconTheme: { primary: "#fbbf24", secondary: "#09090b" },
          },
        }}
      />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="generate" element={<GenerateImage />} />
              <Route path="my-images" element={<MyImages />} />
              <Route path="images/:id" element={<ImageDetails />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}