const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/contactUs", function(req, res) {
  let mailOptions = {
    from: `${req.body.email}`,
    to: process.env.EMAIL,
    subject: `Messege from ${req.body.name}`,
    text: `${req.body.message}`,
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

app.post("/quote", function(req, res) {
  console.log(req.body.date);
  let mailOptions = {
    from: `${req.body.email}`,
    to: process.env.EMAIL,
    subject: `Quote from ${req.body.name}`,
    text: `${req.body.name} have requested a quote below are the details of the shipment \n 
    phone number -: ${req.body.mobile}\n
    email -: ${req.body.email}\n
    origin -: ${req.body.origin}\n
    pickup -: ${req.body.destinationFrom}\n
    destination-: ${req.body.destinationTo}\n
    date -: ${req.body.date}\n
    message -: ${req.body.message}`,
    html: `<h3>${req.body.name} have requested a quote below are the details of the shipment </h3><br>
    <table style="width:70%; border:1px solid black;">
    <tr>
    <th>Name</th>
    <th>${req.body.name}</th>
    </tr>
    <tr>
    <th>Email</th>
    <th>${req.body.email}</th>
    </tr>
    <tr>
    <th>phone number</th>
    <th>${req.body.mobile}</th>
    </tr>
    <tr>
    <th>Destination from</th>
    <th>${req.body.destinationFrom}</th>
    </tr>
    <tr>
    <th>Destination to</th>
    <th>${req.body.destinationTo}</th>
    </tr>
    <tr>
    <th>Good type</th>
    <th>${req.body.type}</th>
    </tr>
    <tr>
    <th>Start date</th>
    <th>${req.body.date_str}</th>
    </tr>
    <tr>
    <th>Message</th>
    <th>${req.body.message}</th>
    </tr>
    </table>`,
  };
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
