const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");
const maptilerClient = require("@maptiler/client");
maptilerClient.config.apiKey = process.env.MAPTILER_API_KEY;

module.exports.home = async (req, res) => {
  res.render("listings/home.ejs");
};

module.exports.index = async (req, res) => {
  // We fetch all, but in the frontend, you can now filter by category: Job vs Service
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.guide = (req, res) => {
  res.render("listings/guide.ejs");
};

module.exports.testimonial = (req, res) => {
  res.render("listings/testimonials.ejs");
};

module.exports.new = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.show = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner")
    .populate("workerAssigned") // Added to see who is working on it
    .populate("serviceSeeker"); // Added to see which Customer booked it

  if (!listing) {
    req.flash("error", "The listing you requested does not exist!");
    return res.redirect("/home/listings");
  }
  res.render("listings/show.ejs", { listing });
};






module.exports.createListing = async (req, res) => {
  let listingData = req.body.listing;

  // Format tags (replaces requiredSkills logic)
  if (listingData.tags) {
    listingData.tags = listingData.tags
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag !== "");
  }

  // Geocode location
  const geoData = await maptilerClient.geocoding.forward(listingData.location, { limit: 1 });

  const newListing = new Listing(listingData);
  newListing.owner = req.user._id; 
  newListing.geometry = geoData.features[0].geometry; 
  
  if (req.user.role === 'company') {
      newListing.status = 'Open';
  } else if (req.user.role === 'employee') {
      newListing.status = 'Available';
  }
  
  // Set Provider Name automatically from the logged-in User
  // If it's a company, use company name, otherwise use username
  newListing.providerName = req.user.role === 'company' ? req.user.companyDetails.name : req.user.username;

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    newListing.imageUrl = { url, filename };
  }

  await newListing.save();
  req.flash("success", `New ${listingData.category} posted successfully!`);
  res.redirect("/home/listings");
};

module.exports.edit = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/home/listings");
  }
  res.render("listings/edit.ejs", { listing });
};

module.exports.update = async (req, res) => {
  let { id } = req.params;
  let listingData = req.body.listing;

  // 1. Process tags string into an array (Only if it's a string)
  if (listingData.tags && typeof listingData.tags === "string") {
    listingData.tags = listingData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
  }

  // Geocode location
  const geoData = await maptilerClient.geocoding.forward(listingData.location, { limit: 1 });
  listingData.geometry = geoData.features[0].geometry;

  // 2. Find and Update the core data
  let listing = await Listing.findByIdAndUpdate(id, { ...listingData });

  // 3. Handle Image Update (Only if a new file is uploaded)
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.imageUrl = { url, filename };
    await listing.save(); // Save the new image details
  }

  req.flash("success", "Listing successfully updated!");
  res.redirect(`/home/listings/${id}`);
};


module.exports.delete = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/home/listings");
};

// --- NEW TRI-PLATFORM FEATURE: BOOKING ---
// For Customers to book a Service or Workers to apply for a Job
module.exports.assignUser = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    
    if (listing.category === "Job") {
        listing.workerAssigned = req.user._id;
        listing.status = "In Progress";
    } else {
        listing.serviceSeeker = req.user._id;
        listing.status = "Booked";
    }

    await listing.save();
    req.flash("success", "Action successful!");
    res.redirect(`/home/listings/${id}`);
};

module.exports.chatbot = (req, res) => {
  res.render("listings/chatbot.ejs");
};