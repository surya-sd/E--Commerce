const jwt = require("jsonwebtoken");
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
      if (err) return reject(err);
      return resolve(payload);
    });
  });
};

const protect = async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
    return res.status(400).send({ status: "failed" });
  }
  const token = bearerToken.split(" ")[1];
  const payload = await verifyToken(token);
  if (!payload) return res.status(400).send({ status: "failed", message: "please enter valid token" });
  req.user = payload;
  next();
};

module.exports = protect;
