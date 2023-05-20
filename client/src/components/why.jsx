// import "./component-css/why.css";
// import WhyImg from "../assets/why-1.jpg";
// export default function Why() {
//   return (
//     <div className="why">
//       <div className="why-text">
//         <h1>Why Choose Us?</h1>
//         <div className="row">
//           <div className="col1">
// <h2>OUR VISION</h2>
// <p>
//   With unwavering dedication and a relentless pursuit of innovation,
//   we aim to set new standards and achieve unparalleled success in
//   the global food and beverages trade industry.
// </p>
//             </div>
//             <div className="col2">
//   <h2>OUR MISSION</h2>
// <p>
//   We aim to build lasting relationship with our customers by
//   maintaining the highest standards of food quality and become the
//   most preferred and reliable food and beverages supplier.
// </p>
//             </div>
//             <div className="col3">
//               <h2>OUR PHILOSHOPHY</h2>
//             <p>
//               We are dedicated to providing a truly unique and exceptional
//               experience to our customers, setting new standards of excellence
//               in the food and beverages trade industry.
//             </p>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// }

import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";
import { Box } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const styleElement = {
  display: "flex",
  flexDirection: "column",
  // height: "100vh",
  position: "relative",
  isolation: "isolate",
  // backgroundColor: '#c3cbdc',
  // backgroundImage: 'linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)',
  justifyContent: "flex-start",
  padding: '5vh 5vw 5vh 5vw',
  // boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
};

const itemStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "12px",
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  fontSize: "1.1rem",
  border: 0
};

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100vw",
  // height: "14vh",
  paddingLeft: "5vw",
  textDecoration: "underline solid 2px yellow",
  fontSize: "2rem",
  paddingBottom: "2vh",
}

export default function DividerStack() {
  return (
    <Box
      sx={styleElement}
    >
      <Stack spacing={2} sx={headerStyle}>
        <h1>Why choose us?</h1>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{height: "40vh"}}
      >
        <Item sx={itemStyle}>
          <h2>OUR VISION</h2>
          <p>
            With unwavering dedication and a relentless pursuit of innovation,
            we aim to set new standards and achieve unparalleled success in the
            global food and beverages trade industry.
          </p>
        </Item>
        <Item sx={itemStyle}>
          <h2>OUR MISSION</h2>
          <p>
            We aim to build lasting relationship with our customers by
            maintaining the highest standards of food quality and become the
            most preferred and reliable food and beverages supplier.
          </p>
        </Item>
        <Item sx={itemStyle}>
          <h2>OUR PHILOSHOPHY</h2>
          <p>
            We are dedicated to providing a truly unique and exceptional
            experience to our customers, setting new standards of excellence in
            the food and beverages trade industry.
          </p>
        </Item>
      </Stack>
    </Box>
  );
}
