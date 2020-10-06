const { Router } = require("express");

const router = Router();

//-------------------------- public Controller function ----------------------

const { feedback } = require("../controllers/publicController");

//-------------------------- admin doc Controller function -------------------

const { viewAllDoc } = require("../controllers/adminDocController");

// public route
router.post("/feedback", feedback);

//doctor route
router.get("/viewAllDoc", viewAllDoc);

//exporting the public route
module.exports = router;
