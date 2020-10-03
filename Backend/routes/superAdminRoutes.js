const { Router } = require("express");
const passport = require("passport");

//to protect the route
const { restrictTo } = require("../middleware/protect");

const router = Router();

//-----------------------Super Admin auth Controller function ---------  ----------------

const { superAdminLogin } = require("../controllers/superAdminAuthController");

//-------------------------- Admin Auith Controller function ----------------------------

const {
  adminRegister,
  adminDelete,
} = require("../controllers/adminAuthController");

//-------------------------- Super Admin Doc controller function --------------------------

const {
  uploadDoc,
  leaveDoc,
  leaveDocCancel,
  deleteDoc,
} = require("../controllers/adminDocController");

//-----------------------------  Super Admin controller function --------------------------

router.post("/superlogin", superAdminLogin);

//router.post("/superLogout", superAdminLogout);  // shoud be done

//------------------------- Admin Dept Admin controller function --------------------------

//admin auth routes
router.post(
  "/adminRegister",
  passport.authenticate("jwt", { session: false }),
  restrictTo("superadmin"),
  adminRegister
);
//delete the admin route
router.post(
  "/adminDelete",
  passport.authenticate("jwt", { session: false }),
  restrictTo("superadmin"),
  adminDelete
);

//super admin doc routes

//upload doctor detail with image
router.post(
  "/uploadDoc",
  passport.authenticate("jwt", { session: false }),
  restrictTo("superadmin"),
  uploadDoc
);

//delete doctor detail with image
router.post(
  "/deleteDoc",
  passport.authenticate("jwt", { session: false }),
  restrictTo("superadmin"),
  deleteDoc
);

//doctor leave route

router.post(
  "/leaveDoc",
  passport.authenticate("jwt", { session: false }),
  restrictTo("superadmin"),
  leaveDoc
);

router.post(
  "/leaveDocCancel",
  passport.authenticate("jwt", { session: false }),
  restrictTo("superadmin"),
  leaveDocCancel
);

//exporting the admin Routes
module.exports = router;
