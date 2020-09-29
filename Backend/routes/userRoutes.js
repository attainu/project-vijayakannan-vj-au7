const { Router } = require("express");
const passport = require("passport");
const upload = require('../utils/multer')

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
<<<<<<< HEAD
  UpdateContact,
} = require("../controllers/userController");
=======
} = require("../controllers/userAuthController");

//---------------------------- user controller function ------------------------------

const { contactUpdate } = require("../controllers/userController");

//---------------------------- user auth controller function ------------------------------

// user routes
>>>>>>> e911c489d2cb54a7bdd2ac1cdd75be9468f174c7

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

<<<<<<< HEAD
// router.post('/uploadPost', upload.single("imgUrl"), uploadDoc);
router.post('/uploadPost', upload.single("imgUrl"),function(req, res){
  uploadDoc
});

router.patch('/update/:id', UpdateContact);
=======
router.post(
  "/contactUpdate",
  passport.authenticate("jwt", { session: false }),
  contactUpdate
);

//exporting the user routes
>>>>>>> e911c489d2cb54a7bdd2ac1cdd75be9468f174c7
module.exports = router;
