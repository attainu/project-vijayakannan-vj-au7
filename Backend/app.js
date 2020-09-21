const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
require("./database/mongodb");

//MIDDILWARES
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cookieParser());

//Cors method
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

// Routes
const userRoutes = require("./routes/userRoutes");

//Passport Middleware
app.use(passport.initialize());

//Passport Config.
require("./config/passport")(passport);

//Logger
app.use(morgan("tiny"));

//ROUTES
app.use("/api/user", userRoutes);

//Catching 404 Error
app.use((req, res, next) => {
  const error = new Error("INVALID ROUTE");
  error.status = 404;
  next(error);
});

//Error handler function
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

//server runing port
const PORT = process.env.PORT || 5000;
//server created
app.listen(PORT, () => {
  console.log(`Server Started ${PORT}`);
});
