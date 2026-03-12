const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js")
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

// Multer & Cloudinary for Image Uploads
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage }); 

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
    
module.exports = router;