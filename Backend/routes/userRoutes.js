const { Router } = require("express");
const passport = require("passport");

const router = Router();

const {
  userRegister,
  userConfirmation,
  verifyResendToken,
  userLogin,
  forgotPassword,
  postOTP,
  updatePassword,
  UpdateContact,
} = require("../controllers/userController");

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
router.patch("/ContactUpdate", passport.authenticate("jwt", { session: false }), UpdateContact);

module.exports = router;
