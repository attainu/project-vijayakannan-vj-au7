const { Router } = require("express");

const router = Router();

const { feedback } = require("../controllers/feedbackController");

router.post("/feedback", feedback);

module.exports = router;
