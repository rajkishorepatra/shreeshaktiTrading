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
import {WhatsAppWidget} from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

// auth context provider
import { AuthContextProvider } from "./contexts/authContext";

// router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import logo from "./assets/shreeshakti-logo.svg";

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
                  <Route path="/shreeshaktiTrading" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    <Route
                      path="/shreeshaktiTrading/services"
                      element={<MediaCard />}
                    />
                    <Route
                      path="/shreeshaktiTrading/tracking"
                      element={<TrackingPage />}
                    />
                    <Route
                      path="/shreeshaktiTrading/shipment"
                      element={<Shipment />}
                    />
                  </Route>
                  <Route
                    path="/shreeshaktiTrading/admin"
                    element={<AdminLayout />}
                  >
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
                  <Route
                    path="*"
                    element={
                      <div>
                        <h2>Sorry</h2>
                        <p>Page not found</p>
                      </div>
                    }
                  />
                </>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </LocalizationProvider>
      </AuthContextProvider>
      <WhatsAppWidget phoneNumber="7846996759" companyName="Shreeshakti Tradings" replyTimeText="online" message={"Hello!\nLeave a messege for us"}/>
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
    <Navigate
      to={"/shreeshaktiTrading/admin/login"}
      state={{ from: location }}
    />
  );
}