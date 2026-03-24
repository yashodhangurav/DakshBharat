const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  // Category allows you to filter between Hiring and Service Offering
  category: {
    type: String,
    enum: ["Job", "Service"],
    required: true,
    default: "Job"
  },

  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: 100,
  },

  // Can be a Company Name or an Individual Employee's Professional Name
  providerName: {
    type: String,
    required: true,
    trim: true
  },

  type: {
    type: String,
    required: true
  },

  description: {
    type: String,
    trim: true,
    maxlength: 1500
  },

  // Wage for Job, or Price for Service
  price: {
    type: Number,
    required: true,
    min: 0
  },

  priceUnit: {
    type: String,
    enum: [
      "per hour",
      "per day",
      "per job",
      "per repair",
      "per service",
      "per installation",
      "per fitting",
      "fixed"
    ],
    required: true
  },

  imageUrl: {
    url: String,
    filename: String,
  },

  location: {
    type: String,
    required: true,
    trim: true
  },

  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },

  // For Jobs: Skills needed. For Services: Features included.
  tags: [{
    type: String
  }],

  // PLATFORM LINKING:
  // 1. The person who posted it (Company or Employee)
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  // 2. The person assigned to do the job (if it's a Job listing)
  workerAssigned: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  // NEW: Applicants for Jobs
  applicants: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      resumeLink: String,
      resumeOriginalName: String,
      status: { type: String, enum: ["Pending", "Accepted", "Rejected", "Confirmed"], default: "Pending" },
      appliedAt: { type: Date, default: Date.now }
    }
  ],

  // 3. The Customer who booked the service (if it's a Service listing)
  serviceSeeker: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  status: {
    type: String,
    enum: ["Open", "Closed", "Available", "Booked", "In Progress", "Completed"]
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ]

}, { timestamps: true });

// Add 2dsphere index for Geospatial $near queries
listingSchema.index({ geometry: "2dsphere" });

// Middleware to clean up reviews when a listing is deleted
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;