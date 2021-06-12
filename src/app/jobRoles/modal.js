const mongoose = require("mongoose");
const jobRoles = mongoose.Schema({
    companyId: Number,
    companyName: String,
    JobId: String,
    JobRole: String,
    JobRoleDescription: String,
    JobLocations: String,
    TechStack: Array,
    JobStatus: String,
    JobApplicationLinks: [
        {
            jobApplicationSite: String
        }
    ]
});
module.exports = new mongoose.model("jobRoles", jobRoles);