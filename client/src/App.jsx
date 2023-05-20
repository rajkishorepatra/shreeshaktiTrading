// import pages
import RootLayout from "./pages/root-layout";
import HomePage from "./pages/home-page";
import MediaCard from "./pages/servicePage";
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
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />} />
                <Route path="services" element={<MediaCard />} />
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
    </>
  );
}
