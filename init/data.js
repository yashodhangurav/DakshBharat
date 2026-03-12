const sampleListings = [
  {
    category: "Job",
    title: "On-Site Solar Panel Technician",
    providerName: "EcoVolt Renewables",
    type: "Solar",
    description: "Looking for an experienced technician to handle a large-scale solar installation project in Nashik. Tools will be provided by the company.",
    price: 1200,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
      filename: "solarjob1"
    },
    location: "Nashik, Maharashtra",
    tags: ["Installation", "Wiring", "Safety Certified"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Master Electrical Repairs",
    providerName: "Rahul Sharma (Expert)",
    type: "Electrical",
    description: "Available for industrial and residential electrical maintenance. 10+ years of experience in high-voltage wiring and circuit repairs.",
    price: 450,
    priceUnit: "per hour",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      filename: "elecservice1"
    },
    location: "Pune, Maharashtra",
    tags: ["Maintenance", "Fault Finding", "Quick Response"],
    status: "Open"
  },
  {
    category: "Job",
    title: "Heavy Machinery Mason",
    providerName: "Skyline Constructions",
    type: "Masonry",
    description: "Immediate requirement for skilled masons for a commercial housing project. Must have experience with heavy-duty concrete mixers.",
    price: 1500,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?auto=format&fit=crop&w=800&q=80",
      filename: "masonjob1"
    },
    location: "Aurangabad, Maharashtra",
    tags: ["Construction", "Blueprints", "Concrete Work"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Custom Furniture & Carpentry",
    providerName: "Arjun Vishwakarma",
    type: "Carpentry",
    description: "Specializing in modular kitchen design and custom wooden furniture. High-quality finishing guaranteed.",
    price: 5000,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
      filename: "carpservice1"
    },
    location: "Satara, Maharashtra",
    tags: ["Woodwork", "Interior", "Modern Design"],
    status: "Open"
  },
  {
    category: "Job",
    title: "Lead Plumber for Industrial Plant",
    providerName: "AquaFlow Systems",
    type: "Plumbing",
    description: "Hiring for a 3-month contract to manage pipeline installation at a local food processing plant.",
    price: 1800,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80",
      filename: "plumbjob1"
    },
    location: "Kolhapur, Maharashtra",
    tags: ["Industrial", "Pipe Fitting", "Team Lead"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Professional Deep Cleaning",
    providerName: "Amit Cleaners",
    type: "Other",
    description: "Full office and home deep cleaning services. Eco-friendly chemicals used.",
    price: 2500,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      filename: "cleaningservice1"
    },
    location: "Ahmednagar, Maharashtra",
    tags: ["Sanitization", "Express Service", "Trusted"],
    status: "Open"
  }
];

module.exports = { data: sampleListings };