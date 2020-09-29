const { Router } = require("express");
const passport = require("passport");

const router = Router();

//-------------------------- Admin Auith Controller function ----------------------

const { adminLogin } = require("../controllers/adminAuthController");

//admin auth routes
router.post("/login", adminLogin);
// router.post("/lobout", adminLogout);

//exporting the admin Routes
module.exports = router;
