const { Router } = require("express");
const passport = require("passport");
const {
  userHome,
  adminHome,
  superAdminHome,
} = require("../controllers/homeController");

//to protect the route
const { restrictTo } = require("../middleware/protect");

const router = Router();

router.get(
  "/user/home",
  passport.authenticate("jwt", { session: false }),
  restrictTo("user"),
  userHome
);

router.get(
  "/admin/home",
  passport.authenticate("jwt", { session: false }),
  restrictTo("admin"),
  adminHome
);

router.get(
  "/superadmin/home",
  passport.authenticate("jwt", { session: false }),
  restrictTo("superadmin"),
  superAdminHome
);

module.exports = router;
