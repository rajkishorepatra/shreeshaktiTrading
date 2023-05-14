import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";


const box1Style = {
  width: "100vw",
  // backgroundImage: 'url("../assets/quote-parallax.jpg")',
//   backgroundolor: '#c3cbdc',
// backgroundImage: 'linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)',
backgroundColor: '#f9fcf',
backgroundImage: 'linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)',

  backgroundSize: "contain",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: -1,
  marginTop: "5vh",
  display: 'flex',
  flexDirection: 'row',
};

// const imgBox = {
//   width: "50vw",
//   borderTop: 'solid 3px #1a2f43',
//   height: "100%"

// };

const box2Style = {
  width: "50vw",
//   backgroundColor: '#f9fcf',
// backgroundImage: 'linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)',
  padding: "7vh 5vw 10vh 5vw",
};

const box3Style = {
  width: "100%",
};

const box4Style = {
  display: "flex",
  justifyContent: "space-between",
  padding: "2.5% 0 2.5% 0",
};

const multiLineText = {
  width: "100%",
  paddingTop: "2vh",
};

const buttonStyle = {
  paddingTop: "4%"
}

export default function Quote() {
  return (
    <>
      <Box sx={box1Style}>
        <Box sx={box2Style}>
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
          <Box sx={box3Style}>
            <Box sx={box4Style}>
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

            <Box sx={box4Style}>
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

            <Box sx={box4Style}>
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

            <Box sx={multiLineText}>
              <TextField
                id="standard-multiline-static"
                label="Messege"
                multiline
                rows={6}
                fullWidth
              />
            </Box>

            <Box style={buttonStyle}>
              <Button variant="contained" size="large" >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>

        {/* <Box sx={imgBox}>
          <img src="image" alt="" srcset="" />
        </Box> */}
      </Box>
    </>
  );
}
