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
  boxShadow:
    "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
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

          <Box sx={form}>
            <Box sx={boxHeading}>
              <Typography variant="h4">
                Hello. Where are you shipping?
              </Typography>
              <Typography variant="p">*Indicates required field</Typography>
            </Box>

            <Grid container sx={formContent} spacing={1}>
              <Grid
                item
                component="form"
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
                  margin="dense"
                />
              </Grid>
              <Grid
                component="form"
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

              <Grid item xs={12} lg={12}>
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
                item
                xs={12}
                lg={12}
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
              <Grid item xs={12} lg={12}>
                <FormControlLabel
                  value="top"
                  control={<Checkbox />}
                  label="Send updates on this shipment"
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12} lg={12}>
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
