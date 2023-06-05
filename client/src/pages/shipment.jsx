import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Startimage from "../assets/quote-parallax.jpg";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const steps = [
  "Where from",
  "Where to",
  "What",
  "How",
  "Payment",
  "Review",
  "Complete",
];

const currencies = [
  {
    value: "INDIA",
    label: "INDIA",
  },
  {
    value: "USA",
    label: "USA",
  },
  {
    value: "CHINA",
    label: "CHINA",
  },
  {
    value: "JAPAN",
    label: "JAPAN",
  },
];

const imageStyle = {
  minHeight: "15rem",
  padding: "3rem 0",
};

const wordStyle = {
  // width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  flexDirection: "column",
  padding: "4rem 0 3rem 0",
  fontSize: "2.5rem",
};

const stepper = {
  paddingBottom: "2rem",
  width: "100%",
};

const boxHeading = {
  paddingBottom: "2rem",
};

const form = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "2rem 1rem",
  width: "100%",
};

const formContent = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
};

export default function Shipment() {

  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [department, setDepartment] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [otherAddress, setOtherAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  return (
    <>
      <Box>
        <Box>
          <CardMedia sx={imageStyle} image={Startimage}>
            <Container maxWidth="xl">
              <Typography variant="h4">Our Services</Typography>
              <h3>
                We freight to all over the world <br />
                The best logistic company, Fastly and Safely
              </h3>
            </Container>
          </CardMedia>
        </Box>
        <Container maxWidth="xl">
          <Typography variant="h2" sx={wordStyle}>
            Create New Shipment
          </Typography>

          <Grid xs={12} sx={stepper}>
            <Stepper activeStep={0} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>

          <Box sx={form} component="form">
            <Box sx={boxHeading}>
              <Typography variant="h4">
                Hello. Where are you shipping?
              </Typography>
              <Typography variant="p">*Indicates required field</Typography>
            </Box>

            <Grid container sx={formContent} spacing={1}>
              <Grid
                item
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                xs={12}
                lg={12}
              >
                <TextField
                  id="outlined-select-currency-native"
                  select
                  required
                  label="Country"
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Please select your country"
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value} onChange={(e) => setCountry(e.target.value)}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="outlined-basic"
                  label="Company or Name"
                  variant="outlined"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Contact"
                  variant="outlined"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Grid>
              <Grid
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                item
                xs={12}
                lg={12}
              >
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  placeholder="Street Address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  placeholder="Apartment, suite, unit, building,etc."
                  variant="outlined"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  placeholder="Department, c/o, etc."
                  variant="outlined"
                  margin="dense"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </Grid>
              <Grid
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                item
                xs={12}
                lg={12}
              >
                <TextField
                  id="outlined-basic"
                  label="Postal Code"
                  variant="outlined"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Other Address Information"
                  variant="outlined"
                  value={otherAddress}
                  onChange={(e) => setOtherAddress(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} lg={12}>
                <FormControlLabel
                  value="top"
                  control={<Checkbox value={checkbox} onChange={(e) => setCheckbox(e.target.value)}/>}
                  label="Is this a residential address?"
                  labelPlacement="start"
                />
              </Grid>

              <Grid
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                item
                xs={12}
                lg={12}
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Ext."
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <FormControlLabel
                  value="top"
                  control={<Checkbox value={checkbox} onChange={(e) => setCheckbox(e.target.value)}/>}
                  label="Send updates on this shipment"
                  labelPlacement="start"
                  checked={checkbox}
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <FormControlLabel
                  value="top"
                  control={<Checkbox value={checkbox} onChange={(e) => setCheckbox(e.target.value)}/>}
                  label="Save as new entry"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="top"
                  control={<Checkbox value={checkbox} onChange={(e) => setCheckbox(e.target.value)}/>}
                  label="Use this as my default address"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="top"
                  control={<Checkbox value={checkbox} onChange={(e) => setCheckbox(e.target.value)}/>}
                  label="Add a different return address"
                  labelPlacement="start"
                />
              </Grid>

              <Grid item xs={12} lg={12} spacing={2}>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" size="medium" color="success">
                    Continue
                  </Button>
                  <Button variant="contained" size="medium" color="error">
                    Cancel Shipment
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
