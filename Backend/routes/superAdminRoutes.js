const { Router } = require("express");
const passport = require("passport");

const router = Router();

//-----------------------Super Admin auth Controller function ---------  ----------------

const { superAdminLogin } = require("../controllers/superAdminAuthController");

//-------------------------- Admin Auith Controller function ----------------------------

const {
  adminRegister,
  adminConfirmation,
  verifyResendToken,
  updatePassword,
  forgotPassword,
  postOTP,
} = require("../controllers/adminAuthController");

//-------------------------- Super Admin Doc controller function --------------------------

const {
  uploadDoc,
  leaveDoc,
  leaveDocCancel,
} = require("../controllers/adminDocController");

//-----------------------------  Super Admin controller function --------------------------

router.post("/superlogin", superAdminLogin);

//------------------------- Admin Dept Admin controller function --------------------------

//admin auth routes
router.post("/register", adminRegister);

router.get("/userConformation/:token", adminConfirmation);

router.post("/verifyResendToken", verifyResendToken);

router.post("/forgotPassword", forgotPassword);

router.post("/postOTP", postOTP);

router.post(
  "/updatePassword",
  passport.authenticate("jwt", { session: false }),
  updatePassword
);

//super admin doc routes

//upload doctor detail with image
router.post("/uploadDoc", uploadDoc);

router.post("/leaveDoc", leaveDoc);

router.post("/leaveDocCancel", leaveDocCancel);

//exporting the admin Routes
module.exports = router;
