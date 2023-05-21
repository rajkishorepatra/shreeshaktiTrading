import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Startimage from "../assets/quote-parallax.jpg";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
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
  fontSize: "2rem",
  paddingBottom: "2rem",
};

const boxHeading = {
  paddingBottom: '2rem',
};

const form = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#dde0da",
  padding: '1rem'
}

const formContent = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}
export default function Shipment() {
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
          <Typography variant="h2" sx={wordStyle}>Create New Shipment</Typography>

          <Grid xs={12} sx={stepper}>
            <Stepper activeStep={0} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>

          <Box sx={form}>
            <Box sx={boxHeading}>
              <Typography variant="h4">
                Hello. Where are you shipping?
              </Typography>
              <Typography variant="p">*Indicates required field</Typography>
            </Box>

            <Grid sx={formContent}>
              <Grid
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                xs={12}
                item
              >
                <TextField
                  id="outlined-select-currency-native"
                  select
                  required
                  label="Country"
                  defaultValue="INDIA"
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Please select your currency"
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="outlined-basic"
                  label="Company or Name"
                  variant="outlined"
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Contact"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  placeholder="Street Address"
                  required
                />
                <TextField
                  id="outlined-basic"
                  placeholder="Apartment, suite, unit, building,etc."
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  placeholder="Department, c/o, etc."
                  variant="outlined"
                />
              </Grid>
              <Grid
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Postal Code"
                  variant="outlined"
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Other Address Information"
                  variant="outlined"
                />
              </Grid>

              <Grid>
                <FormControlLabel
                  value="top"
                  control={<Checkbox />}
                  label="Is this a residential address?"
                  labelPlacement="start"
                />
              </Grid>

              <Grid
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Ext."
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <FormControlLabel
                  value="top"
                  control={<Checkbox />}
                  label="Send updates on this shipment"
                  labelPlacement="start"
                />
              </Grid>
              <Grid>
                <FormControlLabel
                  value="top"
                  control={<Checkbox />}
                  label="Save as new entry"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="top"
                  control={<Checkbox />}
                  label="Use this as my default address"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="top"
                  control={<Checkbox />}
                  label="Add a different return address"
                  labelPlacement="start"
                />
              </Grid>

              <Grid>
                <Button variant="contained" size="medium" color="success">
                  Continue
                </Button>
                <Button variant="contained" size="medium" color="error">
                  Cancel Shipment
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
