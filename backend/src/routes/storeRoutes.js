const express = require("express");

const {
  createStore,
  getStores,
  getStoreById,
} = require("../controllers/storeController");

const router = express.Router();


// CREATE STORE
router.post("/", createStore);


// GET ALL STORES
router.get("/", getStores);


// GET SINGLE STORE
router.get("/:id", getStoreById);


module.exports = router;