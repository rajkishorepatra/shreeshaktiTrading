// import HomePage from "./pages/homePage";
// import { BrowserRouter } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <HomePage />
//     </BrowserRouter>
//   );
// }

import * as React from "react";
import Navbar from "./components/navbar";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Startimage from "./assets/quote-parallax.jpg";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const steps = [
  "WHERE FROM",
  "WHERE GOING",
  "WHAT",
  "HOW",
  "PAYMENT",
  "REVIEW",
  "COMPLETE",
];

const imageStyle = {
  width: "100vw",
  height: "27vh",
  flexWrap: "wrap",
  zIndex: -1,
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
  padding: "5vh 5vw 5vh 5vw",
  color: "yellow",
  fontSize: "1.3rem",
  alignContent: "center",
};

const currencies = [
  {
    value: "USD",
    label: "UNITED STATES",
  },
  {
    value: "EUR",
    label: "INDIA",
  },
  {
    value: "BTC",
    label: "JAPAN",
  },
  {
    value: "JPY",
    label: "AMERICA",
  },
];

const bodyStyle ={
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
};

const row1 = {
  display: "flex",
  flexDirection: "row",
};

const headText = {
  fontSize: '2rem',
  paddingBottom: '8vh',
  textDecoration: 'underline solid 2px yellow',
}

const stepper = {
  width: '100vw',
  paddingRight : '2vw',
  paddingBottom: '4vh',
};

const form = {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
}

const headerTitle = {
  fontSize: '1.2rem',
  padding: '5vh 0 5vh 0',
};

export default function App() {

  return (
    <>
      <Navbar />

        <Box>
          <CardMedia sx={imageStyle} image={Startimage}>
            <h1>Create new shipment</h1>
            <h3>
              We freight to all over the world <br />
              The best logistic company, Fastly and Safely
            </h3>
          </CardMedia>
        </Box>
         
      <Box sx={bodyStyle}>
        <Box sx={headText}>
          <h3>Create new shipping</h3>
        </Box>

        <Box sx={stepper}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box sx={form}>
          <Box sx={headerTitle}>
            <h3>Hello, where are you shipping from?</h3>
            <p>*Indicates required field</p>
          </Box>

          <Box sx={row1}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                size="small"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-basic"
                label="COMPANY OR NAME"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-basic"
                label="CONTACT"
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>

          <Box sx={row1}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-basic"
                label="COMPANY OR NAME"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-basic"
                label="CONTACT"
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>

          <Box sx={row1}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Postal code"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-basic"
                label="COMPANY OR NAME"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-basic"
                label="CONTACT"
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>
          <Box>
          <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Is this a residential address?"
          labelPlacement="start"
        />
          </Box>

          <Box sx={row1}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Postal code"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-basic"
                label="COMPANY OR NAME"
                variant="outlined"
                size="small"
              />
              <TextField
                id="outlined-basic"
                label="CONTACT"
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>

          <Box>
          <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Send updates on this shipment"
          labelPlacement="start"
        />
          </Box>

          <Box sx={row1}>
            <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Save as new entry"
          labelPlacement="top"
        />
            <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Use this as my default address"
          labelPlacement="top"
        />
            <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Add a different return address"
          labelPlacement="top"
        />
          </Box>

          <Box>
          <Button variant="text">Continue</Button>
          <Button variant="text">Cancel Shipment</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
