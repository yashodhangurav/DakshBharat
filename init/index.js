const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// 1. Connection String (Keep your credentials safe in .env later!)
const ATLA_URL = "mongodb+srv://guravyashodhan_db_user:Fbv5QQT5.bbq.pQ@cluster0.rpxc1ds.mongodb.net/HackAura?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully");
    initDB(); // Call init only after connection is confirmed
  })
  .catch((err) => {
    console.log("Atlas Connection Error:", err);
  });

async function main() {
  await mongoose.connect(ATLA_URL);
}

const initDB = async () => {
  try {
    // Clear existing listings to avoid duplicates or old-schema data
    await Listing.deleteMany({});
    console.log("Old listings cleared.");

    // 2. Map data to your NEW Atlas User ID
    // IMPORTANT: Make sure this ID exists in your Atlas 'users' collection!
    const adminOwnerId = "69b2ac38a110ef5832ea356f"; // Replace with your ACTUAL Atlas User ID

    const processedData = initData.data.map((obj) => ({
      ...obj,
      owner: adminOwnerId,
      // Ensure category exists for the Tri-Platform logic
      category: obj.category || "Job", 
      // Ensure tags is an array if it was missing
      tags: obj.tags || [],
      // Ensure price is a number to avoid the .toLocaleString() error
      price: obj.price || obj.pricePerDay || 0, 
      priceUnit: obj.priceUnit || "per day"
    }));

    await Listing.insertMany(processedData);
    console.log("Data was successfully initialized on Atlas!");

  } catch (err) {
    console.log("Error during data initialization:", err);
  } finally {
    // Always close the connection so the script finishes properly
    mongoose.connection.close();
    console.log("Connection closed.");
  }
};