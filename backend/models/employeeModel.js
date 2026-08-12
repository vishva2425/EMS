const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    firstname:{
        type: String,
        required: [true, "First Name is Required"],
        trim: true,
    },
    lastname:{
        type: String,
        required: [true, "Last Name is Required"],
        trim: true,
    },
    gender:{
        type: String,
        required: [true, "Gender is Required"],
        trim: true,
        default: "Male",
    },
    dateofbirth:{
        type: Date,
        required: [true, "Date of Birth is Required"],
        trim: true,
    },
    bloodgroup:{
        type: String,
        required: [true, "Blood Group is Required"],
        trim: true,
        default: "A+ve",
    },
    maritalstatus:{
        type: String,
        required: [true, "Marital Status is Required"],
        trim: true,
        default: "Married",
    },
    email:{
        type: String,
        required: [true, "Email is Required"],
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address",]
    },
    phonenumber:{
        type: String,
        required: [true, "Phone Number is Required"],
        trim: true,
    },
    address:{
        type: String,
        required: [true, "Address is Required"],
        trim: true,
    },
    city:{
        type: String,
        required: [true, "City is Required"],
        trim: true,
    },
    state:{
        type: String,
        required: [true, "State is Required"],
        trim: true,
    },
    country:{
        type: String,
        required: [true, "Country is Required"],
        trim: true,
    },
    pincode:{
        type: String,
        required: [true, "Pincode is Required"],
        trim: true,
    },
    department:{
        type: String,
        required: [true, "Department is Required"],
        trim: true,
    },
    designation:{
        type: String,
        required: [true, "Designation is Required"],
        trim: true,
    },
    jobtitle:{
        type: String,
        required: [true, "Job Title is Required"],
        trim: true,
    },
    reportingmanager:{
        type: String,
        required: [true, "Reporting Manager is Required"],
        trim: true,
    },
    joiningdate:{
        type: Date,
        required: [true, "Joining Date is Required"],
        trim: true,
    },
    employmenttype:{
        type: String,
        required: [true, "Employee Type is Required"],
        trim: true,
        default: "Full Time",
    },
    worklocation:{
        type: String,
        required: [true, "Work Location is Required"],
        trim: true,
    },
    employeegrade:{
        type: String,
        required: [true, "Employee Grade is Required"],
        trim: true,
    },
    shift:{
        type: String,
        required: [true, "Shift is Required"],
        trim: true,
        default: "Morning",
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model("Employee", employeeSchema);