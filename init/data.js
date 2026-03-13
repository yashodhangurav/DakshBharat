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
  },
  {
    category: "Job",
    title: "HVAC Installation Technician",
    providerName: "CoolAir Solutions",
    type: "HVAC",
    description: "Looking for certified HVAC technicians for installation of industrial cooling systems in a new manufacturing unit.",
    price: 1600,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1581093458791-9f3c3250abbb?auto=format&fit=crop&w=800&q=80",
      filename: "hvacjob1"
    },
    location: "Mumbai, Maharashtra",
    tags: ["HVAC", "Cooling Systems", "Industrial"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Professional Welding Service",
    providerName: "Shiv Welding Works",
    type: "Welding",
    description: "Offering metal fabrication and welding services for gates, grills, and structural frames.",
    price: 700,
    priceUnit: "per hour",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      filename: "weldingservice1"
    },
    location: "Nagpur, Maharashtra",
    tags: ["Metal Work", "Fabrication", "Custom Builds"],
    status: "Open"
  },
  {
    category: "Job",
    title: "Tile Installation Specialist",
    providerName: "Elite Interiors",
    type: "Tiling",
    description: "Need experienced tile installers for a luxury apartment project. Knowledge of marble and ceramic tile work preferred.",
    price: 1400,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1600607687644-c7f34cfdc6c7?auto=format&fit=crop&w=800&q=80",
      filename: "tilejob1"
    },
    location: "Thane, Maharashtra",
    tags: ["Flooring", "Ceramic Tiles", "Interior Work"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Smart Home Automation Setup",
    providerName: "TechNest Automation",
    type: "Electrical",
    description: "Installation of smart lighting, smart locks, and home automation systems compatible with Alexa and Google Home.",
    price: 8000,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
      filename: "smarthomeservice1"
    },
    location: "Pune, Maharashtra",
    tags: ["IoT", "Automation", "Smart Devices"],
    status: "Open"
  },
  {
    category: "Job",
    title: "Warehouse Forklift Operator",
    providerName: "RapidLogistics Pvt Ltd",
    type: "Logistics",
    description: "Seeking a licensed forklift operator to manage warehouse inventory movement and loading operations.",
    price: 1100,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      filename: "forkliftjob1"
    },
    location: "Navi Mumbai, Maharashtra",
    tags: ["Warehouse", "Forklift", "Inventory Handling"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Professional Painting Services",
    providerName: "ColorCraft Painters",
    type: "Painting",
    description: "Interior and exterior painting services for homes and offices with premium quality paints.",
    price: 3500,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=800&q=80",
      filename: "paintservice1"
    },
    location: "Solapur, Maharashtra",
    tags: ["Interior Paint", "Exterior Paint", "Wall Finishing"],
    status: "Open"
  },
  {
    category: "Job",
    title: "Road Construction Equipment Operator",
    providerName: "Highway Infra Ltd",
    type: "Construction",
    description: "Required experienced operators for road rollers and asphalt pavers for highway construction.",
    price: 1700,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1581093588401-7d45c8c66f6d?auto=format&fit=crop&w=800&q=80",
      filename: "roadjob1"
    },
    location: "Sangli, Maharashtra",
    tags: ["Road Work", "Heavy Equipment", "Infrastructure"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Mobile Phone Repair Expert",
    providerName: "FixFast Mobile Care",
    type: "Electronics",
    description: "Screen replacement, battery replacement, and motherboard repairs for all major smartphone brands.",
    price: 600,
    priceUnit: "per repair",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1510557880182-3f8c9b3d20e6?auto=format&fit=crop&w=800&q=80",
      filename: "mobileservice1"
    },
    location: "Kolhapur, Maharashtra",
    tags: ["Smartphone Repair", "Screen Fix", "Battery Replacement"],
    status: "Open"
  },
  {
    category: "Job",
    title: "Industrial Machine Operator",
    providerName: "Precision Manufacturing Ltd",
    type: "Machinery",
    description: "Hiring operators for CNC and heavy industrial machines in a production plant. Prior factory experience preferred.",
    price: 1300,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1581092919532-7c7e2b4c1d4b?auto=format&fit=crop&w=800&q=80",
      filename: "machinejob1"
    },
    location: "Pimpri-Chinchwad, Maharashtra",
    tags: ["CNC", "Factory Work", "Machine Handling"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Laptop & Computer Repair",
    providerName: "DigitalFix IT Services",
    type: "Electronics",
    description: "Hardware upgrades, virus removal, motherboard repair, and laptop screen replacement services.",
    price: 900,
    priceUnit: "per repair",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80",
      filename: "computerrepair1"
    },
    location: "Mumbai, Maharashtra",
    tags: ["Laptop Repair", "Virus Removal", "Hardware Upgrade"],
    status: "Open"
  },
  {
    category: "Job",
    title: "Commercial Driver (Light Transport)",
    providerName: "Swift Delivery Network",
    type: "Driving",
    description: "Need drivers with valid commercial license for local goods delivery routes within city limits.",
    price: 1000,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      filename: "driverjob1"
    },
    location: "Nashik, Maharashtra",
    tags: ["Driving", "Logistics", "Delivery"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Professional Gardening & Landscaping",
    providerName: "GreenLeaf Gardens",
    type: "Landscaping",
    description: "Garden setup, lawn maintenance, and decorative landscaping services for homes and offices.",
    price: 3000,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1599687266725-04c3b7cfcbe7?auto=format&fit=crop&w=800&q=80",
      filename: "gardenservice1"
    },
    location: "Pune, Maharashtra",
    tags: ["Gardening", "Lawn Care", "Landscaping"],
    status: "Open"
  },
  {
    category: "Job",
    title: "Steel Fabrication Worker",
    providerName: "Metro Steel Industries",
    type: "Fabrication",
    description: "Looking for experienced steel fabrication workers for industrial structural frame projects.",
    price: 1450,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      filename: "steeljob1"
    },
    location: "Aurangabad, Maharashtra",
    tags: ["Steel Work", "Fabrication", "Industrial"],
    status: "Open"
  },
  {
    category: "Service",
    title: "AC Repair & Maintenance",
    providerName: "CoolCare Services",
    type: "HVAC",
    description: "Air conditioner repair, gas refilling, and regular servicing for split and window AC units.",
    price: 1200,
    priceUnit: "per service",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      filename: "acservice1"
    },
    location: "Thane, Maharashtra",
    tags: ["AC Repair", "Cooling Systems", "Maintenance"],
    status: "Open"
  },
  {
    category: "Job",
    title: "Construction Site Supervisor",
    providerName: "BuildPro Developers",
    type: "Construction",
    description: "Need a site supervisor to manage workers, ensure safety compliance, and coordinate daily construction tasks.",
    price: 2000,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      filename: "supervisorjob1"
    },
    location: "Satara, Maharashtra",
    tags: ["Site Management", "Construction", "Team Coordination"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Motorbike Repair Specialist",
    providerName: "RiderFix Garage",
    type: "Mechanic",
    description: "Complete bike repair, engine tuning, and brake servicing for all major motorcycle brands.",
    price: 800,
    priceUnit: "per repair",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      filename: "bikeservice1"
    },
    location: "Kolhapur, Maharashtra",
    tags: ["Bike Repair", "Engine Tuning", "Maintenance"],
    status: "Open"
  },
  {
    category: "Job",
    title: "Warehouse Packing Assistant",
    providerName: "QuickShip Logistics",
    type: "Logistics",
    description: "Hiring packing assistants for sorting and packaging online orders in a logistics warehouse.",
    price: 900,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      filename: "packingjob1"
    },
    location: "Nagpur, Maharashtra",
    tags: ["Packing", "Warehouse", "Order Processing"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Water Tank Cleaning",
    providerName: "PureTank Services",
    type: "Cleaning",
    description: "Professional underground and overhead water tank cleaning with high-pressure machines.",
    price: 2000,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=800&q=80",
      filename: "tankcleanservice1"
    },
    location: "Ahmednagar, Maharashtra",
    tags: ["Water Tank", "Sanitization", "Cleaning"],
    status: "Open"
  },
  {
    category: "Job",
    title: "Delivery Executive",
    providerName: "FastKart Delivery",
    type: "Delivery",
    description: "Looking for delivery executives with two-wheelers to deliver packages across city locations.",
    price: 950,
    priceUnit: "per day",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1556742400-b5c3c1d3b3d4?auto=format&fit=crop&w=800&q=80",
      filename: "deliveryjob1"
    },
    location: "Solapur, Maharashtra",
    tags: ["Delivery", "Two Wheeler", "Logistics"],
    status: "Open"
  },
  {
    category: "Service",
    title: "Home CCTV Installation",
    providerName: "SecureVision Systems",
    type: "Security",
    description: "Installation of CCTV cameras and security monitoring systems for homes and offices.",
    price: 7500,
    priceUnit: "fixed",
    imageUrl: {
      url: "https://images.unsplash.com/photo-1581091012184-5c3c7c1d6e55?auto=format&fit=crop&w=800&q=80",
      filename: "cctvservice1"
    },
    location: "Mumbai, Maharashtra",
    tags: ["Security", "CCTV", "Surveillance"],
    status: "Open"
  }
];

module.exports = { data: sampleListings };