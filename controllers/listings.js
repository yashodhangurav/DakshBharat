const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");
const maptilerClient = require("@maptiler/client");
maptilerClient.config.apiKey = process.env.MAPTILER_API_KEY;

module.exports.home = async (req, res) => {
  res.render("listings/home.ejs");
};

module.exports.index = async (req, res) => {
  let query = {};
  if (req.user) {
      if (req.user.role === 'employee') {
          query.category = 'Job';
      } else if (req.user.role === 'customer' || req.user.role === 'company') {
          query.category = 'Service';
      }
  }

  // Handle Geolocation Search
  if (req.query.lat && req.query.lng) {
      query.geometry = {
          $near: {
              $geometry: {
                  type: "Point",
                  coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
              },
              $maxDistance: 50000 // 50km search radius max
          }
      };
  }

  const allListings = await Listing.find(query);
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
    
    if (listing.category === "Service") {
        listing.serviceSeeker = req.user._id;
        listing.status = "Booked";
        await listing.save();
        req.flash("success", "Service booked successfully!");
    }
    
    res.redirect(`/home/listings/${id}`);
};

module.exports.applyForJob = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/apply.ejs", { listing });
};

module.exports.submitApplication = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    
    const alreadyApplied = listing.applicants.some(app => app.user.toString() === req.user._id.toString());
    if (alreadyApplied) {
        req.flash("error", "You have already applied for this job.");
        return res.redirect(`/home/listings/${id}`);
    }
    
    let resumeLink = "";
    let resumeOriginalName = "";
    if (typeof req.file !== "undefined") {
        resumeLink = req.file.path;
        resumeOriginalName = req.file.originalname;
    } else {
        req.flash("error", "Please upload a resume file.");
        return res.redirect(`/home/listings/${id}/apply`);
    }
    
    listing.applicants.push({ user: req.user._id, resumeLink, resumeOriginalName });
    await listing.save();
    
    req.flash("success", "Application submitted successfully!");
    res.redirect(`/home/listings/${id}`);
};

module.exports.viewApplicants = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("applicants.user");
    res.render("listings/applicants.ejs", { listing });
};

module.exports.updateApplicantStatus = async (req, res) => {
    const { id, userId, status } = req.params;
    
    // Ensure valid status
    if (!['Accepted', 'Rejected'].includes(status)) {
        req.flash("error", "Invalid status update.");
        return res.redirect(`/home/listings/${id}/applicants`);
    }

    const listing = await Listing.findById(id);
    
    // Find the applicant and update
    const applicantIndex = listing.applicants.findIndex(app => app.user.toString() === userId);
    if (applicantIndex === -1) {
        req.flash("error", "Applicant not found.");
        return res.redirect(`/home/listings/${id}/applicants`);
    }
    
    listing.applicants[applicantIndex].status = status;
    
    // If accepted, we simulate the hiring by assigning the worker Assiged flag 
    // BUT we don't end it here. The employee now must interact with the Post-Hire workflow.
    if (status === 'Accepted') {
        listing.workerAssigned = userId;
    }
    
    await listing.save();
    
    // NOTIFY THE EMPLOYEE
    const User = require("../models/user.js");
    const userToNotify = await User.findById(userId);
    if (userToNotify) {
        userToNotify.notifications.push({
            message: `Your application for "${listing.title}" was ${status}.`,
            link: status === 'Accepted' ? `/home/listings/${listing._id}/post-hire-options` : `/home/listings/${listing._id}`
        });
        await userToNotify.save();
    }
    
    req.flash("success", `Applicant has been ${status}.`);
    // Redirecting back to referring page if it's the dashboard, else specific job page
    const referer = req.get('Referer');
    if (referer && referer.includes('/company-dashboard')) {
        res.redirect('/home/company-dashboard');
    } else {
        res.redirect(`/home/listings/${id}/applicants`);
    }
};

// NEW: Helper to safely download exact resume file bypassing Cloudinary's raw constraints
module.exports.downloadResume = async (req, res) => {
    let { id, userId } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found.");
        return res.redirect("back");
    }
    
    const applicant = listing.applicants.find(app => app.user.toString() === userId);
    if (!applicant || !applicant.resumeLink) {
        req.flash("error", "Resume not available.");
        return res.redirect("back");
    }
    
    try {
        const response = await fetch(applicant.resumeLink);
        if (!response.ok) throw new Error("Failed to fetch from cloud storage");
        
        const contentType = response.headers.get("content-type") || "application/octet-stream";
        let filename = applicant.resumeOriginalName || "candidate_resume.pdf";
        
        res.setHeader("Content-Type", contentType);
        res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
        
        const arrayBuffer = await response.arrayBuffer();
        return res.send(Buffer.from(arrayBuffer));
    } catch (err) {
        console.error("Resume download error:", err);
        req.flash("error", "Error downloading the file. Please try again.");
        return res.redirect("back");
    }
};

module.exports.companyDashboard = async (req, res) => {
    // Only allow companies to view this general dashboard
    if (req.user.role !== 'company') {
        req.flash('error', 'Only companies can access the employer dashboard.');
        return res.redirect('/home');
    }
    
    // Find all 'Job' category listings for this company and populate applicants
    const myJobs = await Listing.find({ owner: req.user._id, category: 'Job' }).populate("applicants.user");
    res.render("listings/company_dashboard.ejs", { myJobs });
};

module.exports.clearNotifications = async (req, res) => {
    const User = require("../models/user.js");
    const user = await User.findById(req.user._id);
    if (user && user.notifications) {
        user.notifications.forEach(n => n.isRead = true);
        await user.save();
    }
    // Update session user to prevent stale read cache immediately
    req.user.notifications = user.notifications;
    res.redirect(req.get('Referer') || '/home');
};

module.exports.postHireOptions = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("owner");
    res.render("listings/post_hire_options.ejs", { listing });
};

module.exports.processPostHireOptions = async (req, res) => {
    let { id } = req.params;
    let { option } = req.body;
    
    if (option === 'freelance') {
        req.user.employeeDetails.employmentType = 'Freelance';
        await req.user.save();
        req.flash("success", "Account updated to Freelancer successfully.");
    } else if (option === 'delete') {
        await Listing.deleteMany({ owner: req.user._id, category: 'Service' });
        req.user.employeeDetails.employmentType = 'Hired Full-Time';
        await req.user.save();
        req.flash("success", "Your service listings were successfully deleted and account updated.");
    }

    // NEW: Mark the application as Confirmed
    const listing = await Listing.findById(id);
    if (listing) {
        const applicantIndex = listing.applicants.findIndex(app => app.user.toString() === req.user._id.toString());
        if (applicantIndex !== -1) {
            listing.applicants[applicantIndex].status = "Confirmed";
            await listing.save();
        }
    }
    
    // NEW: Clear the notifications that linked to this job
    const User = require("../models/user.js");
    const userToUpdate = await User.findById(req.user._id);
    if (userToUpdate && userToUpdate.notifications) {
        userToUpdate.notifications.forEach(n => {
            if (n.link && n.link.includes(id)) {
                n.isRead = true;
            }
        });
        await userToUpdate.save();
        req.user.notifications = userToUpdate.notifications;
    }
    
    res.redirect(`/home/listings/${id}`);
};

module.exports.chatbot = (req, res) => {
  res.render("listings/chatbot.ejs");
};