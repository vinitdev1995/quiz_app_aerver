const express = require("express");
const evaluationQuiz = express.Router();
const Company = require("./company/router");
const JobRoles = require("./jobRoles/router");

evaluationQuiz.use("/Company", Company);
evaluationQuiz.use("/Company", JobRoles);
module.exports = evaluationQuiz;