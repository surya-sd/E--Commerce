const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, sparse: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});
userSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, same) => {
      if (err) return reject(err);
      return resolve(same);
    });
  });
};

module.exports = model("user", userSchema);
