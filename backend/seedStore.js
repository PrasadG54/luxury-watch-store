const dotenv = require("dotenv");
const mongoose = require("mongoose");

const connectDB = require("./src/config/db");
const Store = require("./src/models/store");

dotenv.config();

const stores = [
  {
    name: "Luxury Watch Mumbai",
    address: "Linking Road, Bandra West",
    city: "Mumbai",
    country: "India",
    phone: "+91 9000000001",
    email: "mumbai@luxurywatch.example",
    latitude: 19.0607,
    longitude: 72.8362,
    openingTime: "10:00",
    closingTime: "19:00",
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },

  {
    name: "Luxury Watch Delhi",
    address: "Khan Market, New Delhi",
    city: "New Delhi",
    country: "India",
    phone: "+91 9000000002",
    email: "delhi@luxurywatch.example",
    latitude: 28.6001,
    longitude: 77.2270,
    openingTime: "10:00",
    closingTime: "19:00",
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },

  {
    name: "Luxury Watch Bengaluru",
    address: "UB City, Vittal Mallya Road",
    city: "Bengaluru",
    country: "India",
    phone: "+91 9000000003",
    email: "bengaluru@luxurywatch.example",
    latitude: 12.9719,
    longitude: 77.5951,
    openingTime: "10:00",
    closingTime: "19:00",
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },

  {
    name: "Luxury Watch Hyderabad",
    address: "Banjara Hills Road No. 1",
    city: "Hyderabad",
    country: "India",
    phone: "+91 9000000004",
    email: "hyderabad@luxurywatch.example",
    latitude: 17.4156,
    longitude: 78.4347,
    openingTime: "10:00",
    closingTime: "19:00",
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },

  {
    name: "Luxury Watch Pune",
    address: "Koregaon Park, North Main Road",
    city: "Pune",
    country: "India",
    phone: "+91 9000000005",
    email: "pune@luxurywatch.example",
    latitude: 18.5362,
    longitude: 73.8939,
    openingTime: "10:00",
    closingTime: "19:00",
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },

  {
    name: "Luxury Watch Chennai",
    address: "Khader Nawaz Khan Road, Nungambakkam",
    city: "Chennai",
    country: "India",
    phone: "+91 9000000006",
    email: "chennai@luxurywatch.example",
    latitude: 13.0524,
    longitude: 80.2508,
    openingTime: "10:00",
    closingTime: "19:00",
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },

  {
    name: "Luxury Watch Kolkata",
    address: "Camac Street, Park Street Area",
    city: "Kolkata",
    country: "India",
    phone: "+91 9000000007",
    email: "kolkata@luxurywatch.example",
    latitude: 22.5535,
    longitude: 88.3516,
    openingTime: "10:00",
    closingTime: "19:00",
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },

  {
    name: "Luxury Watch Ahmedabad",
    address: "C.G. Road, Navrangpura",
    city: "Ahmedabad",
    country: "India",
    phone: "+91 9000000008",
    email: "ahmedabad@luxurywatch.example",
    latitude: 23.0358,
    longitude: 72.5618,
    openingTime: "10:00",
    closingTime: "19:00",
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },

  {
    name: "Luxury Watch Jaipur",
    address: "C-Scheme, Ashok Marg",
    city: "Jaipur",
    country: "India",
    phone: "+91 9000000009",
    email: "jaipur@luxurywatch.example",
    latitude: 26.9124,
    longitude: 75.7873,
    openingTime: "10:00",
    closingTime: "19:00",
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },

  {
    name: "Luxury Watch Goa",
    address: "18th June Road, Panaji",
    city: "Panaji",
    country: "India",
    phone: "+91 9000000010",
    email: "goa@luxurywatch.example",
    latitude: 15.4909,
    longitude: 73.8278,
    openingTime: "10:00",
    closingTime: "19:00",
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
];

const seedStores = async () => {
  try {
    await connectDB();

    console.log("Connected to MongoDB Atlas");

    // Remove existing stores before inserting seed data
    await Store.deleteMany({});

    console.log("Existing stores cleared");

    const createdStores = await Store.insertMany(stores);

    console.log(`${createdStores.length} stores inserted successfully`);

    await mongoose.connection.close();

    console.log("Database connection closed");

    process.exit(0);
  } catch (error) {
    console.error("Store seeding error:", error);

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedStores();