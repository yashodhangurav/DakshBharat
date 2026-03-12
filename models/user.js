const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passwordLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, "Please provide a valid email address"],
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
        match: [/^[0-9]{10}$/, "Please provide a valid 10-digit phone number"],
    },
    
    // --- THE TRI-PLATFORM ROLE SYSTEM ---
    role: {
        type: String,
        enum: ["company", "employee", "customer", "admin"],
        required: true,
        default: "customer"
    },

    // --- COMPANY SPECIFIC FIELDS ---
    // Only used if role is 'company'
    companyDetails: {
        name: { type: String, trim: true },
        registrationNumber: { type: String }, // GST or Business ID
        industry: { type: String }, // e.g., Construction, IT, Plumbing
        website: { type: String },
    },

    // --- EMPLOYEE SPECIFIC FIELDS ---
    // Only used if role is 'employee'
    employeeDetails: {
        skills: [{ type: String }], // Array of skills
        experienceYears: { type: Number, default: 0 },
        resumeUrl: { type: String },
        currentStatus: { 
            type: String, 
            enum: ["Available", "On Job", "Not Looking"], 
            default: "Available" 
        },
    },

    // --- GENERAL FIELDS (Shared across all) ---
    location: {
        type: String,
        required: [true, "Location is required"],
        trim: true,
    },
    profileImage: {
        url: { type: String, default: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg" },
        filename: String,
    },
    bio: {
        type: String,
        trim: true,
        maxlength: [500, "Bio is too long"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    reputationScore: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    joinedAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

userSchema.plugin(passwordLocalMongoose);
module.exports = mongoose.model("User", userSchema);