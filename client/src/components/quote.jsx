import React from "react";
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

// animation
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Quote() {
  // animation
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -300px 0px" });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [destinationTo, setDestinationTo] = useState("");
  const [destinationFrom, setDestinationFrom] = useState("");
  const [date, setDate] = useState(null);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
    // console.log(
    //   name,
    //   email,
    //   mobile,
    //   destinationTo,
    //   destinationFrom,
    //   date,
    //   type,
    //   message
    // );
    let date_str = dayjs(date).format("DD/MM/YYYY");

    const response = await fetch(
      `https://shreeshaktiserver.onrender.com/quote`,
      {
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
      }
    )
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        // console.log(resData);
        if (resData.status === "success") {
          handleClick();
        } else if (resData.status === "fail") {
          console.log("Message failed to send");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

    submitButton: css`
      background-color: #9a6125;
      color: #fff;
      font-family: poppins;

      &:hover {
        background-color: #f07c00;
      }
    `,
  };

  return (
    <>
      <Box sx={styles.quoteContainer} ref={ref}>
        <Box sx={styles.quoteBack}></Box>
        <motion.div
          initial={"hidden"}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          <Container maxWidth="lg">
            <m.div>
              <Box sx={styles.formContainer}>
                <Box sx={styles.heading}>
                  <Typography
                    variant="h3"
                    sx={{ fontFamily: "bebas neue", color: "#F07C00" }}
                  >
                    Get a free quote
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "poppins", color: "#EAEAEA" }}
                  >
                    We always use best and fastest fleets
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "poppins",
                      color: "#E62E23",
                      fontSize: "0.7rem",
                    }}
                  >
                    * mark indicates required fields
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
                          required
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
                          required
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
                          required
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
                          required
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
                          required
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
                          required
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <DatePicker
                          label="Date"
                          sx={styles.datePickerField}
                          required
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
                        <Button
                          variant="contained"
                          size="large"
                          type="submit"
                          sx={styles.submitButton}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Box>
            </m.div>
          </Container>
        </motion.div>
      </Box>
    </>
  );
}
