require("./modal");
const express = require("express");
const router = express.Router();
const controller = require("./controller");
const verifyToken = require("../auth/middleware");

router.post("/Id/:id/addProfileDetails", verifyToken, controller.create);
router.get("/getCompanyProfileDetails/Company/Id/:id", controller.getCompanyProfileById);

module.exports = router;