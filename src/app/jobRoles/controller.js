require('dotenv').config();
const jobDetails = require("./modal");

exports.createRole = async (req, res) =>{
    try {
        const result = await jobDetails.create(req.body);
        res.status(200).send(result);
    }catch (e) {
        console.log(e);
        res.status(400);
    }
};

exports.getJobRoleById = async (req, res) =>{
    try {
        const id = req.params.id;
        const jobRoleRecord = await jobDetails.findOne({JobId: id});
        res.status(200).send(jobRoleRecord);
    } catch (e) {
        res.status(400);
    }
};

exports.getAllJobRole = async (req, res) =>{
    try {
        const jobRoleRecord = await jobDetails.find();
        res.status(200).send(jobRoleRecord);
    } catch (e) {
        res.status(400);
    }
};

exports.updateJobRoleById = async (req, res) =>{
    try {
        const id = req.params.id;
        const jobRoleRecord = await jobDetails.findOneAndUpdate({ JobId: id }, req.body);
        res.status(200).send(jobRoleRecord);
    } catch (e) {
        res.status(400);
    }
};