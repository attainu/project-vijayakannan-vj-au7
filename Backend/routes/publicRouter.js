const { Router } = require("express");

const router = Router();

const { feedback } = require("../controllers/publicController");

router.post("/feedback", feedback);

module.exports = router;
