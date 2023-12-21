const jwt = require("jsonwebtoken");
const verifyToken = (token, newProduct) => {
  jwt.verify(token, process.env.JWT_SECRET, (err, authorizedData) => {
    if (err) {
      console.log("ERROR: Could not connect to the protected route");
      res.sendStatus(403);
    } else {
      console.log("SUCCESS: Connected to protected route");
    }
  });
};
module.exports = {
  verifyToken,
};
