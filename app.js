const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

// View engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Was not working without it
app.locals.layout = false;

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/aboutUs", (req, res) => {
  res.render("aboutUs");
});

app.get("/skills", (req, res) => {
  res.render("skills");
});

app.get("/ourProjects", (req, res) => {
  res.render("ourProjects");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

//after post request
app.post("/send", (req, res) => {
  const output = `
    <p>Masz nową prośbę o kontakt</p>
    <h3>Szczegóły</h3>
    <p>Email: ${req.body.email}</p>
    <h3>Wiadomość:</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "bkg.company0@gmail.com",
      pass: "BKGcompany!",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: '"BKG" <bkg.company0@gmail.com>', // sender address
    to: "bkg.company0@gmail.com", // list of receivers
    subject: "BKG CONTACT", // Subject line
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.render("contact", { msg: "Wiadomość została wysłana" });
  });
});

app.listen(process.env.PORT || 3000);
