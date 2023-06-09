import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { css } from "@emotion/react";
import dayjs from "dayjs";
// framer motion
import { m } from "framer-motion";

// import background images
import quoteBackground from "../assets/quote-parallax.jpg";

export default function Quote() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [destinationTo, setDestinationTo] = useState("");
  const [destinationFrom, setDestinationFrom] = useState("");
  const [date, setDate] = useState(null);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const handleQuoteForm = async (e) => {
    e.preventDefault();
    console.log(
      name,
      email,
      mobile,
      destinationTo,
      destinationFrom,
      date,
      type,
      message
    ); 
    let date_str = dayjs(date).format("DD/MM/YYYY");
    console.log(date_str);

    const response = await fetch("http://localhost:3001/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        destinationTo,
        destinationFrom,
        date_str,
        type,
        message,
      }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .catch((err) => {
        console.log(err);
      }
    );
  };

  const styles = {
    heading: css`
      color: white;
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        text-align: center;
      }
    `,
    quoteContainer: css`
      min-height: 90vh;
      position: relative;
      isolation: isolate;
      @media (min-width: 768px) {
        background: url(${quoteBackground}) no-repeat center center;
        background-size: cover;
      }
    `,
    formContainer: css`
      padding: 3rem 0.5rem;
      @media (min-width: 768px) {
        max-width: 50%;
      }
    `,
    quoteBack: css`
      display: block;
      width: 100%;
      height: 100%;
      max-width: 55%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0.9;
      background: rgba(0, 0, 0, 0.7);
      @media (max-width: 768px) {
        max-width: 100%;
      }
    `,
    formInputField: css`
      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      & label {
        color: #999;
      }
      & label.Mui-focused {
        color: white;
      }
      & input {
        color: white;
      }

      & textarea {
        color: white;
      }

      & label.Mui-focused {
        color: white;
      }
      & .MuiInput-underline:after {
        border-bottom-color: white;
      }
      & .MuiOutlinedInput-root {
        & fieldset {
          border-color: #999;
        }
        &:hover fieldset {
          border-color: white;
        }
        &.Mui-focused fieldset {
          border-color: #ddd;
        }
      }
    `,
    datePickerField: css`
      width: 100%;
      svg {
        color: #999;
      }
      svg: hover {
        color: white;
      }
      & label {
        color: #999;
      }
      & label.Mui-focused {
        color: #999;
      }
      & input {
        color: white;
      }
      & .MuiOutlinedInput-root {
        & fieldset {
          border-color: #999;
        }
        &:hover fieldset {
          border-color: white;
        }
        &.Mui-focused fieldset {
          border-color: #ddd;
        }
      }
    `,

    inputElement: css`
      font-family: "poppins";
    `,
  };

  return (
    <>
      <Box sx={styles.quoteContainer}>
        <Box sx={styles.quoteBack}></Box>
        <Container maxWidth="lg">
          <m.div>
            <Box sx={styles.formContainer}>
              <Box sx={styles.heading}>
                <Typography
                  variant="h3"
                  sx={{ color: "yellow", fontFamily: "bebas neue" }}
                >
                  Get a free quote
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: "poppins" }}>
                  We always use best and fastest fleets
                </Typography>
              </Box>
              <Box>
                <form onSubmit={(e) => handleQuoteForm(e)}>
                  <Grid container spacing={1} sx={styles.inputElement}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="name"
                        label="Full Name"
                        sx={styles.formInputField}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        type="email"
                        sx={styles.formInputField}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        //
                        fullWidth
                        id="mobile"
                        label="Mobile"
                        sx={styles.formInputField}
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        type="number"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        //
                        fullWidth
                        id="destinationTo"
                        label="Destination To"
                        sx={styles.formInputField}
                        value={destinationTo}
                        onChange={(e) => setDestinationTo(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="destinationFrom"
                        label="Destination From"
                        sx={styles.formInputField}
                        value={destinationFrom}
                        onChange={(e) => setDestinationFrom(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="shipmentType"
                        label="Shipping Type"
                        sx={styles.formInputField}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <DatePicker
                        label="Date"
                        sx={styles.datePickerField}
                        value={date}
                        onChange={(value) => setDate(value)}
                        slotProps={{ textField: { variant: "outlined" } }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        id="Messege"
                        multiline
                        rows={4}
                        fullWidth
                        label="Messege"
                        sx={styles.formInputField}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" size="large" type="submit">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Box>
          </m.div>
        </Container>
      </Box>
    </>
  );
}
