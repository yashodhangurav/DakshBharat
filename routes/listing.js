const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js")
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

// Multer & Cloudinary for Image Uploads
const multer = require('multer');
const { storage, documentStorage } = require("../cloudConfig.js");
const upload = multer({ storage }); 
const uploadDocument = multer({ storage: documentStorage });

// Home & Informational Routes
router.get("/", wrapAsync(listingController.home));
router.get("/guide", listingController.guide);
router.get("/testimonials", listingController.testimonial);
router.get("/chatbot", listingController.chatbot);

// Main Marketplace Routes (Jobs & Services)
router.route("/listings")
    .get(wrapAsync(listingController.index)) // View all listings
    .post(
        isLoggedIn, 
        upload.single('listing[imageUrl]'), 
        validateListing, 
        wrapAsync(listingController.createListing) // Create Job/Service
    );

// New Listing Form
router.get("/listings/new", isLoggedIn, listingController.new);

// Individual Listing Operations
router.route("/listings/:id")
    .get(wrapAsync(listingController.show)) // View Details
    .put(
        isLoggedIn,
        isOwner, 
        upload.single('listing[imageUrl]'), 
        validateListing, 
        wrapAsync(listingController.update) // Update Listing
    )
    .delete(
        isLoggedIn,
        isOwner, 
        wrapAsync(listingController.delete) // Delete Listing
    );

// Edit Listing Form
router.get("/listings/:id/edit", 
    isLoggedIn,
    isOwner, 
    wrapAsync(listingController.edit)
);

// --- NEW TRI-PLATFORM ROUTE: BOOKING / APPLYING ---
// This handles Employees applying for Jobs OR Customers booking Services
router.post("/listings/:id/assign", 
    isLoggedIn, 
    wrapAsync(listingController.assignUser)
);

router.get("/listings/:id/post-hire-options",
    isLoggedIn,
    wrapAsync(listingController.postHireOptions)
);

router.post("/listings/:id/post-hire-options",
    isLoggedIn,
    wrapAsync(listingController.processPostHireOptions)
);

// --- NEW APPLICATION FLOW ROUTES ---
router.get("/company-dashboard", isLoggedIn, wrapAsync(listingController.companyDashboard));
router.get("/notifications/clear", isLoggedIn, wrapAsync(listingController.clearNotifications));

router.get("/listings/:id/apply", isLoggedIn, wrapAsync(listingController.applyForJob));
router.post("/listings/:id/apply", isLoggedIn, uploadDocument.single('resumeFile'), wrapAsync(listingController.submitApplication));

router.get("/listings/:id/applicants", isLoggedIn, isOwner, wrapAsync(listingController.viewApplicants));
router.post("/listings/:id/applicants/:userId/:status", isLoggedIn, isOwner, wrapAsync(listingController.updateApplicantStatus));

router.get("/listings/:id/applicants/:userId/download-resume", isLoggedIn, isOwner, wrapAsync(listingController.downloadResume));
    
module.exports = router;