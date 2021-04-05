const mongoose = require("mongoose");
const User = mongoose.Schema({
   companyName: String,
   companyImage: String,
   companyDescription: String,
   locationForCompany: Array,
   employeeRange: String,
   fundingStage: String,
   fundingAmount: Number,
   companyAbout: String,
   mission: String,
   teamsAndProcesses: String,
   techStack: String,
   workLifeAndCulture: String,
   companyImages: String,
   perksAndBenefits: String,
   companyLinkedInURL: String,
   companyFacebookURL: String,
   externalMediaLinksCompany: String,
   role: String,
   companyCareersPageLinkURL: String
});
module.exports = new mongoose.model("CompanyDetails", User);