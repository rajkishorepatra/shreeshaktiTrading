// import components
import PageFooter from "./components/footer";
import Clients from "./components/clients";
import PageHeader from "./components/header";
import NumbersSection from "./components/numbers";
import Navbar from "./components/navbar";
import Quote from "./components/quote";
import WhySection from "./components/why";
import ServiceSection from "./components/services-section";

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
        <Navbar />
        <PageHeader />
        <WhySection />
        <ServiceSection />
        <Quote />
        <Clients />
        <NumbersSection />
        <PageFooter />
      </ThemeProvider>
    </>
  );
}
