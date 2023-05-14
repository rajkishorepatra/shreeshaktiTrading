import "./App.css";
import Navbar from "./components/navbar";
import Quote from "./components/quote";
import Why from "./components/why";
import Services from "./components/services";
import { Box } from "@mui/material";


// import components
import PageFooter from "./components/footer";
import Clients from "./components/clients";
import PageHeader from "./components/header";
import NumbersSection from "./components/numbers";

export default function App() {
  return (
    <>
      <Navbar />
      <Box className="main content">
        {/* <Box sx={boxStyle}>
        <h1>OUR SERVICES</h1>
      <Stack direction="row" spacing={2} sx={stackView}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
      </Box> */}
      </Box>

      {/* <Services /> */}

      <Why />
      <Quote />
      <PageHeader />
      <NumbersSection />
      <Clients />
      <PageFooter />
    </>
  );
}