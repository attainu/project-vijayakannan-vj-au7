const { Router } = require("express");
const passport = require("passport");

//to protect the route
const { restrictTo } = require("../middleware/protect");

//route instance
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

const { contactUpdate, userDelete } = require("../controllers/userController");

//---------------------------- appoinment controller function -----------------------

const {
  appoCheck,
  appoBook,
  appoCancel,
  appoView,
} = require("../controllers/appoimentController");

//---------------------------- user auth routes -------------------------

// user routes

router.post("/register", userRegister);

router.get("/userConfirmation/:token", userConfirmation);

router.post("/resendToken", verifyResendToken);

router.post("/login", userLogin);

router.post("/forgotPassword", forgotPassword);

router.post("/postOTP", postOTP);

router.post(
  "/updatePassword",
  passport.authenticate("jwt", { session: false }),
  restrictTo("user"),
  updatePassword
);

//router.post("/logout", userLogout);  // should be done

//---------------------------- user routes -------------------------

router.post(
  "/contactUpdate",
  passport.authenticate("jwt", { session: false }),
  restrictTo("user"),
  contactUpdate
);

router.post(
  "/userDelete",
  passport.authenticate("jwt", { session: false }),
  restrictTo("user"),
  userDelete
);

//---------------------------- appoinment route----------------------

router.post(
  "/appoCheck",
  passport.authenticate("jwt", { session: false }),
  restrictTo("user"),
  appoCheck
);

router.post(
  "/appoBook",
  passport.authenticate("jwt", { session: false }),
  restrictTo("user"),
  appoBook
);

router.post(
  "/appoCancel",
  passport.authenticate("jwt", { session: false }),
  restrictTo("user"),
  appoCancel
);

//----------------------- user appoinment route -----------------------

router.get(
  "/appoView",
  passport.authenticate("jwt", { session: false }),
  restrictTo("user"),
  appoView
);

//exporting the user routes
module.exports = router;
