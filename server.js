const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const passport = require("passport");
const upload = require("express-fileupload");
const cors = require("cors");
const path = require("path");

require("dotenv/config");

const cookieSession = require("cookie-session");
// company routes
//bring all routes
const optAuth = require("./routes/api/v1/auth/otpAuth");

const addAccount = require("./routes/api/v1/accounts/account/addAccount");
const getAccount = require("./routes/api/v1/accounts/account/getAccount");


//passport
// const passport = require("./services/passport")
const app = express();
//cookie
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["akjsdfkjk"],
  })
);

//initialise passport
app.use(passport.initialize());
app.use(passport.session());

app.use(upload({ useTempFiles: true }));
app.use(cors());

//Middleware for bodyparser
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyparser.json({ limit: "50mb" }));
app.use(express.static(path.join(__dirname, "client/build")));

//mongoDB configuration
const db = require("./setup/myurl").mongoURL;

//Attempt to connect to database
mongoose
  .connect(db, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB connected successfully"))
  .catch((err) => console.log(err));

//import models
require("./models/User");

//Passport middleware
app.use(passport.initialize());

//Config for JWT strategy
require("./strategies/jsonwtStrategy")(passport);
require("./services/passport");

//actual routes
//call all route
app.use("/api/v1/auth/otpAuth", optAuth);
app.use("/api/v1/accounts/account/addAccount",addAccount)
app.use("/api/v1/accounts/account/getAccount",getAccount)
app.use("/api/v1/accounts/account/addCompany",addCompany)
app.use("/api/v1/accounts/account/addCompany",addCompany)
app.use("/api/v1/accounts/account/addCompany",getCompany)


app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const port = process.env.PORT || 2040;

app.listen(port, () => console.log(` App is running at ${port}`));
