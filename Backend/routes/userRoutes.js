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

//---------------------------- user controller function ------------------------------

const { contactUpdate } = require("../controllers/userController");

//---------------------------- user auth controller function ------------------------------

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

router.post(
  "/contactUpdate",
  passport.authenticate("jwt", { session: false }),
  contactUpdate
);

//exporting the user routes
module.exports = router;
