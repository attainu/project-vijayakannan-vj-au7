const { Router } = require("express");
const { uploadDoc } = require("../controllers/doctorController");

const router = Router();

//upload doctor detail with image
router.post("/uploadDoc", uploadDoc);

module.exports = router;
