const express = require("express")
const bodyparser = require("body-parser")
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const upload = require("express-fileupload")

//bring all route
const addAccount = require("./routes/api/v1/accounts/account/addAccount");
const getAccount = require("./routes/api/v1/accounts/account/getAccount");
const addCompany = require("./routes/api/v1/accounts/company/addCompany");
const getCompany = require("./routes/api/v1/accounts/company/getCompany");
const addLoan = require("./routes/api/v1/accounts/loan/addLoan");
const getLoan = require("./routes/api/v1/accounts/loan/getLoan");
const addLoan = require("./routes/api/v1/accounts/loan/addLoan");
const addPayment = require("./routes/api/v1/accounts/loan/add");

const app = express();
app.use(upload({useTempfiles:true}))

//configure middleware
app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(bodyparser.json({limit:"50mb"}));
app.use(express.static(path.join(__dirname,"client/build")));

//passport setup session
app.use(cookieSession({
    maxAge:24 * 60 * 60 * 1000,
    keys:['asdflkjhg']
}))

app.use(passport.initialize());
app.use(passport.session());

//passport strategy
require("./Models/User")
require("./strategies/jsonwtStrategy")(passport)

//call all route
app.use("/api/v1/accounts/account/addAccount",addAccount);
app.use("/api/v1/accounts/account/getAccount",getAccount);
app.use("/api/v1/accounts/company/addCompany",addCompany);
app.use("/api/v1/accounts/company/getCompany",getCompany);
app.use("/api/v1/accounts/loan/addLoan",addLoan);
app.use("/api/v1/accounts/loan/getLoan",getLoan);


//data base connection
const db = require("./setup/myurl").mongoURL;

mongoose
.connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("MongoDb connected"))
.catch(Err => console.log(Err))

app.get("/*",function(req,res){
    res.sendFile(
        path.join(__dirname,"./client/build/index.html"),
        function(err){
            res.status(500).send(err);
        }
    )
})

//setup server listiening

const port = process.env.PORT ||2050;

app.listen(port, () => {
    console.log(`Server is running at ${port}` )
})