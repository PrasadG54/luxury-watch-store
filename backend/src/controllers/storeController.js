const Store = require("../models/store");


// ==========================================
// CREATE STORE
// ==========================================

const createStore = async (req, res) => {
  try {
    const {
      name,
      address,
      city,
      country,
      phone,
      email,
      latitude,
      longitude,
      openingTime,
      closingTime,
      availableDays,
    } = req.body;

    // Basic validation
    if (
      !name ||
      !address ||
      !city ||
      latitude === undefined ||
      longitude === undefined ||
      !openingTime ||
      !closingTime
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required store details.",
      });
    }

    const store = await Store.create({
      name,
      address,
      city,
      country,
      phone,
      email,
      latitude,
      longitude,
      openingTime,
      closingTime,
      availableDays,
    });

    res.status(201).json({
      success: true,
      message: "Store created successfully.",
      store,
    });
  } catch (error) {
    console.error("Create store error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to create store.",
    });
  }
};


// ==========================================
// GET ALL STORES
// ==========================================

const getStores = async (req, res) => {
  try {
    const stores = await Store.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: stores.length,
      stores,
    });
  } catch (error) {
    console.error("Get stores error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch stores.",
    });
  }
};


// ==========================================
// GET SINGLE STORE
// ==========================================

const getStoreById = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);

    if (!store) {
      return res.status(404).json({
        success: false,
        message: "Store not found.",
      });
    }

    res.status(200).json({
      success: true,
      store,
    });
  } catch (error) {
    console.error("Get store error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch store.",
    });
  }
};


module.exports = {
  createStore,
  getStores,
  getStoreById,
};