import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

export default function Quote() {
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <h1 style={{ paddingBottom: "2vh", fontSize: "3rem" }}>
            Get a free quote
          </h1>
          <h4 style={{ paddingBottom: "2vh", fontSize: "1.5rem" }}>
            We always use best and fastest fleets
          </h4>

          <TextField
            fullWidth
            label="Full Name"
            id="fullWidth"
            size="small"
            variant="standard"
            style={{ paddingTop: "2vh" }}
          />
          <Box>
            <Box>
              <TextField
                fullWidth
                label="Email"
                id="fullWidth"
                size="small"
                variant="standard"
                sx={{ maxWidth: "47%" }}
              />
              <TextField
                fullWidth
                label="Mobile"
                id="fullWidth"
                size="small"
                variant="standard"
                sx={{ maxWidth: "47%" }}
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                label="Destination To"
                id="fullWidth"
                size="small"
                variant="standard"
                sx={{ maxWidth: "47%" }}
              />
              <TextField
                fullWidth
                label="Destination From"
                id="fullWidth"
                size="small"
                variant="standard"
                sx={{ maxWidth: "47%" }}
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                label="Shipping Type"
                id="fullWidth"
                size="small"
                variant="standard"
                sx={{ maxWidth: "47%" }}
              />
              <TextField
                fullWidth
                label="Date"
                id="fullWidth"
                size="small"
                variant="standard"
                sx={{ maxWidth: "47%" }}
              />
            </Box>

            <Box>
              <TextField
                id="standard-multiline-static"
                label="Messege"
                multiline
                rows={6}
                fullWidth
              />
            </Box>

            <Box>
              <Button variant="contained" size="large">
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
