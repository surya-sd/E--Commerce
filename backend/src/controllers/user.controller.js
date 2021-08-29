const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  return res.status(201).json({ data: user });
});

module.exports = router;
