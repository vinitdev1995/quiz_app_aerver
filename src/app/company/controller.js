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

exports.getCompanyProfileById = async (req, res) =>{
    try {
        const id = req.params.id;
        const companyRecord = await CompanyDetails.find({companyId: id});
        res.status(200).send(companyRecord);
    } catch (e) {
        res.status(400);
    }
};
