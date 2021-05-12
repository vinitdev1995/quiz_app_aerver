const express = require("express");
const evaluationQuiz = express.Router();
const Company = require("./company/router");

evaluationQuiz.use("/Company", Company);
module.exports = evaluationQuiz;