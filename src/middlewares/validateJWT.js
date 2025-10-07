const jwt = require("jsonwebtoken");

const validateJWT = async (req, res, next) => {
  try {
    const header = req.headers["authorization"];
    
    const token = header && header.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        error: true,
        msg: "Authentication token not provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const { id_user, role_id } = decoded;
    req.user = { id_user, role_id };

    next();
  } catch (error) {
    
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        error: true,
        msg: "Token expired",
      });
    }
    return res.status(401).json({
      error: true,
      msg: "Invalid token",
    });
  }
};

module.exports = validateJWT;
