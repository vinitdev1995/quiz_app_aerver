require("./modal");
const express = require("express");
const router = express.Router();
const controller = require("./controller");
const verifyToken = require("../auth/middleware");

router.post("/Id/:id/addProfileDetails", verifyToken, controller.create);
router.get("/getCompanyProfileDetails/Company/Id/:id", controller.getCompanyProfileById);
router.get("/getCompanyProfileDetails/Company/name/:name", controller.getCompanyProfileByName);
router.put("/putCompanyProfileDetails/Company/name/:name", controller.updateCompanyProfileByName);
router.post("/Id/:id/Test/Id/:testId", controller.sendMail);
router.post("/evaluationPendingSendMail/examId/:id", controller.sendMail);
module.exports = router;