const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  return res.status(201).json({ data: product });
});

router.get("/", async (req, res) => {
  const product = await Product.find({});
  return res.status(201).json({ data: product });
});
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  return res.status(201).json({ data: product });
});
module.exports = router;
