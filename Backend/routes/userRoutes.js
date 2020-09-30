const { Router } = require("express");
const passport = require("passport");

const router = Router();

//---------------------------- user auth controller function -------------------------

const {
  userRegister,
  userConfirmation,
  verifyResendToken,
  userLogin,
  forgotPassword,
  postOTP,
  updatePassword,
} = require("../controllers/userAuthController");

//---------------------------- user controller function ----------------------------

const { contactUpdate } = require("../controllers/userController");

//---------------------------- appoinment controller function -----------------------

const {
  appoCheck,
  appoBook,
  appoCancel,
} = require("../controllers/appoimentController");

//---------------------------- user auth routes -------------------------

// user routes

router.post("/register", userRegister);

router.get("/userConformation/:token", userConfirmation);

router.post("/verifyResendToken", verifyResendToken);

router.post("/login", userLogin);

router.post("/forgotPassword", forgotPassword);

router.post("/postOTP", postOTP);

router.post(
  "/updatePassword",
  passport.authenticate("jwt", { session: false }),
  updatePassword
);

//---------------------------- user routes -------------------------

router.post(
  "/contactUpdate",
  passport.authenticate("jwt", { session: false }),
  contactUpdate
);

//---------------------------- appoinment route----------------------

router.post("/appocheck", appoCheck);

router.post("/appobook", appoBook);

router.post("/appocancel", appoCancel);

//exporting the user routes
module.exports = router;
