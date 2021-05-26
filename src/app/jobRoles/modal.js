const mongoose = require("mongoose");
const jobRoles = mongoose.Schema({
    companyId:Number,
    JobRole: String,
    JobRoleDescription: String,
    JobLocations: Array,
    TechStack: Array,
    JobStatus:String,
    JobApplicationLinks: [
        {
            jobApplicationSite: String
        }
    ]
});
module.exports = new mongoose.model("jobRoles", jobRoles);