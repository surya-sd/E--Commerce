const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/e-commerce", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};
