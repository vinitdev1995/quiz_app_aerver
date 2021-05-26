require('dotenv').config();
const jobDetails = require("./modal");

exports.createRoles = async (req, res) =>{
    try {
        const result = await jobDetails.create(req.body);
        res.status(200).send(result);
    }catch (e) {
        console.log(e);
        res.status(400);
    }
};