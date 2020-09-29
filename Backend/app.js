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
<<<<<<< HEAD
=======
//temp file declaration
app.use(
  fileupload({
    useTempFiles: true,
    limits: { fileSize: 50 * 1024 },
  })
);

>>>>>>> e911c489d2cb54a7bdd2ac1cdd75be9468f174c7
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
const publicRoutes = require("./routes/publicRouter");
const userRoutes = require("./routes/userRoutes");
<<<<<<< HEAD
const feedbackRoutes = require("./routes/feedbackRouter");
=======
const adminRoutes = require("./routes/adminRoutes");
const superAdminRoutes = require("./routes/superAdminRoutes");
>>>>>>> e911c489d2cb54a7bdd2ac1cdd75be9468f174c7

//Passport Middleware
app.use(passport.initialize());

//Passport Config.
require("./config/passport")(passport);

//Logger
app.use(morgan("tiny"));

//ROUTES
app.use("/api/public", publicRoutes);
app.use("/api/user", userRoutes);
<<<<<<< HEAD
app.use("/api/user", feedbackRoutes);
=======
app.use("/api/admin", adminRoutes);
app.use("/api/superadmin", superAdminRoutes);
>>>>>>> e911c489d2cb54a7bdd2ac1cdd75be9468f174c7

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
