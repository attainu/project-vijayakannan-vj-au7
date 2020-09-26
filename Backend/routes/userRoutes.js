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
} = require("../controllers/userController");

const { uploadDoc } = require("../controllers/doctorController");

router.post("/register", userRegister);

router.post("/userConformation/:token", userConfirmation);

router.post("/verifyResendToken", verifyResendToken);

router.post("/login", userLogin);

router.post("/forgotPassword", forgotPassword);

router.post("/postOTP", postOTP);

router.post(
  "/updatePassword",
  passport.authenticate("jwt", { session: false }),
  updatePassword
);

// router.post('/uploadPost', upload.single("imgUrl"), uploadDoc);
router.post("/uploadDoc", uploadDoc);

module.exports = router;
