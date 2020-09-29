const { Router } = require("express");
const passport = require("passport");
const upload = require('../utils/multer')

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

const uploadDoc = require("../controllers/doctorController")



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

// router.post('/uploadPost', upload.single("imgUrl"), uploadDoc);
router.post('/uploadPost', upload.single("imgUrl"),function(req, res){
  uploadDoc
});

router.patch('/update/:id', UpdateContact);
module.exports = router;
