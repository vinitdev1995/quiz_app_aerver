const CompanyDetails = require("./modal");

exports.create = async (req, res) =>{
     try {
         const companyRecord = await CompanyDetails.create(req.body);
         res.status(200).send(companyRecord);
     }catch (e) {
         console.log(e);
         res.status(400);
     }
};

exports.findAll = async (req, res) =>{
    try {
        const companyRecord = await CompanyDetails.find({});
        res.status(200).send(companyRecord);
    } catch (e) {
        res.status(400);
    }
};

exports.findOne = async (req, res) =>{
    const _id = req.body.id;
    try {
        const companyRecord = await CompanyDetails.findById({_id});
        res.status(200).send(companyRecord);
    } catch (e) {
        res.status(400);
    }
};
exports.update = async (req, res) =>{
    const _id = req.params.id;
    try{
        const companyRecord = await CompanyDetails.findOneAndUpdate(_id, {$set: req.body});
        res.status(200).send(companyRecord);
    } catch (e) {
        res.status(200);
    }
};
exports.remove = async (req, res) =>{
    const _id = req.params.id;
    try{
        const companyRecord = await CompanyDetails.findOneAndDelete({_id});
        res.status(200).send(companyRecord);
    } catch (e) {
        res.status(200);
    }
};