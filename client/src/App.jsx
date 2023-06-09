import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// import pages
import RootLayout from "./pages/root-layout";
import HomePage from "./pages/home-page";
import MediaCard from "./pages/servicePage";
import TrackingPage from "./pages/tracking";
import Shipment from "./pages/shipment";
import AdminLogin from "./pages/admin/login";
import AdminLayout from "./pages/admin/admin-layout";
import AdminDashboard from "./pages/admin/dashboard";
import ErrorPage from "./pages/error-page";

// auth context provider
import { AuthContextProvider } from "./contexts/authContext";

// router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export default function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });

  return (
    <>
      <AuthContextProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes>
                <>
                  <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/services" element={<MediaCard />} />
                    <Route path="/tracking" element={<TrackingPage />} />
                    <Route path="/shipment" element={<Shipment />} />
                  </Route>
                  <Route path="/admin" element={<AdminLayout />}>
                    <Route path="login" element={<AdminLogin />} />
                    <Route
                      path="dashboard"
                      element={
                        <RequireAuth>
                          <AdminDashboard />
                        </RequireAuth>
                      }
                    />
                  </Route>
                  <Route path="*" element={<ErrorPage />} />
                </>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </LocalizationProvider>
      </AuthContextProvider>
    </>
  );
}

import { UserAuth } from "./contexts/authContext";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  let { currentUser } = UserAuth();
  let location = useLocation();
  return currentUser ? (
    children
  ) : (
    <Navigate to={"/admin/login"} state={{ from: location }} />
  );
}
