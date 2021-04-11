const CompanyDetails = require("./modal");

exports.create = async (req, res) =>{
     try {
         const { companyId } = req.body;
         let result = null;
         const isExists = await CompanyDetails.find({companyId});
         if (isExists && isExists.length) {
             result = await CompanyDetails.updateOne({ companyId }, req.body);
         } else {
             result = await CompanyDetails.create(req.body);
         }
         res.status(200).send(result);
     }catch (e) {
         console.log(e);
         res.status(400);
     }
};

exports.getCompanyProfileById = async (req, res) =>{
    try {
        const id = req.params.id;
        const companyRecord = await CompanyDetails.findOne({companyId: id});
        res.status(200).send(companyRecord);
    } catch (e) {
        res.status(400);
    }
};

exports.getCompanyProfileByName = async (req, res) =>{
    try {
        const name = req.params.name;
        console.log(name);
        const companyRecord = await CompanyDetails.findOne({ companyName: { "$regex": name, "$options": "i" } });
        res.status(200).send(companyRecord);
    } catch (e) {
        res.status(400);
    }
};