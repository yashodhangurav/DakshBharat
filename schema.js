const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        
        // Changed from companyName to providerName to match model
        providerName: Joi.string().required(), 

        description: Joi.string().required(),
        location: Joi.string().required(),

        // Changed from pricePerDay to price to match model
        price: Joi.number().required().min(0),

        // Added priceUnit validation (per day, per hour, etc.)
        priceUnit: Joi.string().valid("per day", "per hour", "fixed").required(),

        // Added category validation for Tri-Platform logic
        category: Joi.string().valid("Job", "Service").required(),
        
        type: Joi.string().valid(
            "Plumbing", 
            "Electrical", 
            "Masonry", 
            "Solar", 
            "Carpentry", 
            "Cleaning",
            "Other"
        ).required(),

        status: Joi.string().valid("Open", "Closed", "Available", "Booked", "In Progress", "Completed"),

        // Changed from requiredSkills to tags to match model
        tags: Joi.string().allow('', null),

        imageUrl: Joi.string().allow('', null) 
    }).required()
});

// Review Schema
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
});