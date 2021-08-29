const express = require("express");
var cors = require("cors");
const usersController = require("./controllers/user.controller");
const productsController = require("./controllers/product.controller");

const { login, register } = require("./controllers/auth.controller");
const app = express();
app.use(express.json());

app.use(cors());
app.use("/login", login);
app.use("/register", register);

app.use("/users", usersController);
app.use("/products", productsController);

module.exports = app;
