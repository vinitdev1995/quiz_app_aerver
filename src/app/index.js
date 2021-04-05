const express = require("express");
const evaluationQuiz = express.Router();

const Company = require("./companyProfile/router");
evaluationQuiz.use("/Company", Company);
module.exports = evaluationQuiz;