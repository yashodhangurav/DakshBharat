const sampleListings = [
  {
    category: "Job",
    title: "Industrial Welder for Foundry Work",
    providerName: "Belgaum Castings Pvt Ltd",
    type: "Mechanical",
    description: "Required experienced welder for heavy machinery fabrication. Must be familiar with TIG and MIG welding. Long-term contract for the right candidate in Udyambag Industrial Estate.",
    price: 850,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
      filename: "listing_welder"
    },
    location: "Udyambag, Belagavi",
    geometry: { type: "Point", coordinates: [74.5009, 15.8259] },
    tags: ["TIG Welding", "Heavy Machinery", "Foundry", "Full-time"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Expert Residential Electrician & Inverter Setup",
    providerName: "Rohan Electricals",
    type: "Electrical",
    description: "Offering professional house wiring, socket repairs, and solar inverter installations. Available for emergency repairs within Belgaum city limits. 10 years of experience.",
    price: 300,
    priceUnit: "per hour",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      filename: "listing_electrician"
    },
    location: "Tilakwadi, Belagavi",
    geometry: { type: "Point", coordinates: [74.5089, 15.8406] },
    tags: ["Wiring", "Inverter Repair", "Residential", "Emergency"],
    status: "Available"
  },
  {
    category: "Job",
    title: "Solar Panel Installation Crew Lead",
    providerName: "Gokak Green Energy",
    type: "Solar",
    description: "Looking for a supervisor to lead a team for a rural solar pump project near Gokak. Must have basic knowledge of DC circuits and team management skills.",
    price: 15000,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1508514177221-18d1427d5a4b?auto=format&fit=crop&w=800&q=80",
      filename: "listing_solar"
    },
    location: "Gokak, Karnataka",
    geometry: { type: "Point", coordinates: [74.8322, 16.1667] },
    tags: ["Solar Pump", "Renewable Energy", "Supervisory", "Outdoor"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Precision Carpentry & Furniture Polishing",
    providerName: "Kishore Woodworks",
    type: "Carpentry",
    description: "Specialized in custom teak wood furniture and modern modular kitchen assembly. We also do old furniture restoration and high-gloss polishing.",
    price: 700,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=800&q=80",
      filename: "listing_carpenter"
    },
    location: "Angol, Belagavi",
    geometry: { type: "Point", coordinates: [74.5122, 15.8267] },
    tags: ["Teak Wood", "Polishing", "Modular Kitchen", "Custom Made"],
    status: "Available"
  },
  {
    category: "Job",
    title: "Site Mason for Commercial Complex",
    providerName: "Siddhivinayak Builders",
    type: "Masonry",
    description: "Immediate requirement for skilled masons for brickwork and plastering of a new commercial wing near Sambra Airport road. Daily wage payments.",
    price: 900,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      filename: "listing_mason"
    },
    location: "Sambra, Belagavi",
    geometry: { type: "Point", coordinates: [74.6175, 15.8592] },
    tags: ["Plastering", "Brickwork", "Construction", "Airport Road"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Pipe-Fitting & Drainage Specialist",
    providerName: "Manjunath Plumbing",
    type: "Plumbing",
    description: "Expert in fixing leakage, new bathroom fittings, and underground drainage cleaning. I use modern sensor-based leak detectors.",
    price: 500,
    priceUnit: "per service",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
      filename: "listing_plumbing"
    },
    location: "Khanapur, Karnataka",
    geometry: { type: "Point", coordinates: [74.5133, 15.6358] },
    tags: ["Drainage", "Bathroom Fitting", "Leakage Repair", "24/7 Service"],
    status: "Available"
  },
  {
    category: "Job",
    title: "Civil Foreman for Road Project",
    providerName: "Belgaum Smart City Projects",
    type: "Masonry",
    description: "Urgent requirement for a Site Foreman to supervise a road paving and gutter construction project near Shahapur. Must have 5+ years of experience in labor management and blue-print reading.",
    price: 1200,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80",
      filename: "listing_foreman"
    },
    location: "Shahapur, Belagavi",
    geometry: { type: "Point", coordinates: [74.5165, 15.8354] },
    tags: ["Supervisory", "Roadwork", "Shahapur", "Civil Engineering"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Mobile & In-Home Appliance Repair",
    providerName: "Vinayak Technicals",
    type: "Electrical",
    description: "Quick repair services for Washing Machines, Refrigerators, and Microwaves. I provide doorstep service across Peeranwadi and Kle Society areas. Original spare parts used.",
    price: 450,
    priceUnit: "per service",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
      filename: "listing_appliance"
    },
    location: "Peeranwadi, Belagavi",
    geometry: { type: "Point", coordinates: [74.4589, 15.8188] },
    tags: ["Home Appliances", "Doorstep Service", "Peeranwadi", "Maintenance"],
    status: "Available"
  },
  {
    category: "Job",
    title: "Furniture Assembly Team for New Office",
    providerName: "Techno-Hub Solutions",
    type: "Carpentry",
    description: "Looking for 4 carpenters for a 3-day contract to assemble modular workstations and cabinets for a new IT office in Hindalga. Tools will be provided at the site.",
    price: 2500,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80",
      filename: "listing_office_carpenter"
    },
    location: "Hindalga, Belagavi",
    geometry: { type: "Point", coordinates: [74.4828, 15.8752] },
    tags: ["Modular Furniture", "Contract", "Hindalga", "Assembly"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Heavy Equipment Mechanic",
    providerName: "Gajanan Earthmovers",
    type: "Mechanical",
    description: "Specialized in repair and maintenance of JCBs, tractors, and diesel engines. Available for on-field repairs in the Desur industrial area.",
    price: 600,
    priceUnit: "per hour",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=800&q=80",
      filename: "listing_mechanic"
    },
    location: "Desur, Karnataka",
    geometry: { type: "Point", coordinates: [74.4751, 15.7645] },
    tags: ["Heavy Machinery", "Diesel Engine", "Desur", "Emergency Repair"],
    status: "Available"
  },
  {
    category: "Job",
    title: "Full-Time Warehouse Plumber",
    providerName: "Logistics North Terminal",
    type: "Plumbing",
    description: "Permanent position for a plumber to handle maintenance of fire-hydrant systems and general pipelines at our warehouse facility near Macche.",
    price: 18000,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80",
      filename: "listing_plumbing_job"
    },
    location: "Macche, Belagavi",
    geometry: { type: "Point", coordinates: [74.4455, 15.8033] },
    tags: ["Maintenance", "Warehouse", "Fire Hydrant", "Macche"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Solar Water Heater Installation",
    providerName: "Surya Solutions",
    type: "Solar",
    description: "Certified technician for solar water heater setup and pipe insulation. We serve all residential apartments in Bogarves and Camp areas. Free inspection provided.",
    price: 1200,
    priceUnit: "per installation",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&w=800&q=80",
      filename: "listing_solar_service"
    },
    location: "Camp, Belagavi",
    geometry: { type: "Point", coordinates: [74.5085, 15.8568] },
    tags: ["Solar Energy", "Water Heater", "Camp Belgaum", "Residential"],
    status: "Available"
  },
  {
    category: "Job",
    title: "Painter for Residential Row Houses",
    providerName: "Heritage Paints & Decor",
    type: "Other",
    description: "Need skilled wall painters for an upcoming project involving 10 row houses. Must be familiar with putty work, texture painting, and spray finish.",
    price: 750,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      filename: "listing_painter"
    },
    location: "Khasbag, Belagavi",
    geometry: { type: "Point", coordinates: [74.5201, 15.8302] },
    tags: ["Painting", "Interior Design", "Khasbag", "Daily Wage"],
    status: "Open"
  },
  {
    category: "Service",
    title: "CCTV & Biometric Security Setup",
    providerName: "SecureScan Belgaum",
    type: "Electrical",
    description: "Specialized in high-definition CCTV installation, biometric attendance systems, and smart home automation. We cover commercial shops in Khade Bazar and residential layouts in Angol.",
    price: 3500,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      filename: "listing_cctv"
    },
    location: "Angol, Belagavi",
    geometry: { type: "Point", coordinates: [74.5122, 15.8267] },
    tags: ["Security", "Smart Home", "Electronics", "Installation"],
    status: "Available"
  },
  {
    category: "Job",
    title: "Borewell Pump Repair Technician",
    providerName: "Krishi Seva Kendra",
    type: "Mechanical",
    description: "Need an on-call technician to handle submersible pump repairs and motor rewinding for agricultural borewells near Yellur village. Must have own transport.",
    price: 500,
    priceUnit: "per repair",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
      filename: "listing_pump"
    },
    location: "Yellur, Karnataka",
    geometry: { type: "Point", coordinates: [74.5205, 15.7833] },
    tags: ["Agriculture", "Motor Rewinding", "Rural", "Pump Repair"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Custom Granite & Tile Cutting",
    providerName: "Prajapati Stone Crafts",
    type: "Masonry",
    description: "Expert granite platform cutting, edge molding, and laser-precise tile laying for modern kitchens. Serving new apartment projects near the Suvarna Vidhana Soudha area.",
    price: 45,
    priceUnit: "per hour",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      filename: "listing_granite"
    },
    location: "Halaga, Belagavi",
    geometry: { type: "Point", coordinates: [74.5684, 15.8647] },
    tags: ["Granite", "Tile Work", "Kitchen", "Precision Cutting"],
    status: "Available"
  },
  {
    category: "Job",
    title: "Assistant Carpenter for Plywood Work",
    providerName: "Interior Decor Hub",
    type: "Carpentry",
    description: "Looking for 2 semi-skilled assistants to help with laminate pasting and plywood cutting for a 1-month wardrobe project in Kakati.",
    price: 600,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
      filename: "listing_carpenter_assistant"
    },
    location: "Kakati, Belagavi",
    geometry: { type: "Point", coordinates: [74.5125, 15.9189] },
    tags: ["Assistant", "Plywood", "Wardrobe", "Monthly Contract"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Precision Welding for Window Grills",
    providerName: "Azad Iron Works",
    type: "Mechanical",
    description: "Fabrication of safety grills, main gates, and rolling shutters. We provide heavy-duty arc welding with anti-rust coating. Workshop located in Pant Balekundri.",
    price: 2200,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80",
      filename: "listing_welding_grill"
    },
    location: "Sambra, Belagavi",
    geometry: { type: "Point", coordinates: [74.6175, 15.8592] },
    tags: ["Fabrication", "Welding", "Safety Grills", "Metalwork"],
    status: "Available"
  },
  {
    category: "Job",
    title: "Solar Street Light Maintenance Crew",
    providerName: "Eco-Tech Belgaum",
    type: "Solar",
    description: "Urgent hiring for a maintenance team to clean panels and check battery health for solar street lights on the Belagavi-Bagalkot highway stretch.",
    price: 900,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1508514177221-18d1427d5a4b?auto=format&fit=crop&w=800&q=80",
      filename: "listing_solar_maint"
    },
    location: "Kanbargi, Belagavi",
    geometry: { type: "Point", coordinates: [74.5458, 15.8856] },
    tags: ["Solar", "Maintenance", "Highway Project", "Technical"],
    status: "Open"
  }
];

module.exports = { data: sampleListings };