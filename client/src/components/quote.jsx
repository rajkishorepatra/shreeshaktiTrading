import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

import { css } from "@emotion/react";

export default function Quote() {
  const styles = {
    quoteContainer: css`
      background: #24432f;
      padding: 3rem 0;
    `,
  };
  return (
    <>
      <Box sx={styles.quoteContainer}>
        <Container maxWidth="lg">
          <Box sx={{textAlign:'center'}}>
          <Typography variant="h3" >Get a free quote</Typography>
          <Typography variant="body1">
            We always use best and fastest fleets
          </Typography>
          </Box>

          <Box>
            <TextField
              fullWidth
              id="fullWidth"
              margin="dense"
              size="small"
              variant="filled"
              placeholder="Full Name"
            />
            <Box>
              <TextField
                margin="dense"
                fullWidth
                id="fullWidth"
                size="small"
                variant="filled"
                placeholder="Email"
              />
              <TextField
                margin="dense"
                fullWidth
                id="fullWidth"
                size="small"
                variant="filled"
                placeholder="Mobile"
              />
            </Box>

            <Box>
              <TextField
                margin="dense"
                fullWidth
                id="fullWidth"
                size="small"
                variant="filled"
                placeholder="Destination To"
              />
              <TextField
                margin="dense"
                fullWidth
                id="fullWidth"
                size="small"
                variant="filled"
                placeholder="Destination From"
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                margin="dense"
                id="fullWidth"
                size="small"
                variant="filled"
                placeholder="Shipping Type"
              />
              <TextField
                fullWidth
                id="fullWidth"
                margin="dense"
                size="small"
                variant="filled"
                placeholder="Date"
              />
            </Box>

            <TextField
              id="standard-multiline-static"
              multiline
              rows={4}
              margin="dense"
              fullWidth
              placeholder="Messege"
            />

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
