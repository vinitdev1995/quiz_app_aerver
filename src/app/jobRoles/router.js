require("./modal");
const express = require("express");
const router = express.Router();
const controller = require("./controller");
const verifyToken = require("../auth/middleware");

router.post("/Id/:id/addJobDetails", verifyToken, controller.createRole);
router.get("/getJobRoleDetail", controller.getAllJobRole);
router.get("/getJobRoleDetail/Id/:id", controller.getJobRoleById);
router.put("/updateJobRoleDetail/Id/:id", controller.updateJobRoleById);
module.exports = router;