const { Router } = require("express");
const passport = require("passport");

const router = Router();

//-------------------------- Admin Auith Controller function ----------------------

const {
  adminConfirmation,
  verifyResendToken,
  adminLogin,
  updatePassword,
  forgotPassword,
  postOTP,
} = require("../controllers/adminAuthController");

//admin auth routes
router.get("/userConformation/:token", adminConfirmation);

router.post("/verifyResendToken", verifyResendToken);

router.post("/login", adminLogin);

router.post("/forgotPassword", forgotPassword);

router.post("/postOTP", postOTP);

router.post(
  "/updatePassword",
  passport.authenticate("jwt", { session: false }),
  updatePassword
);

// router.post("/logout", adminLogout); // shoud be done

//-------------------------- Appoinment Controller function ----------------------

//router.post("/appoAdminView", appoAdminView);  should be done

//exporting the admin Routes
module.exports = router;
