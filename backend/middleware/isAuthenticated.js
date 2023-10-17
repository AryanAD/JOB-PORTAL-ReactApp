const userModel = require("../model/userModel");

exports.isAuthenticated = async (req, res, next) => {
  const token = req.headers["token"];

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }
  const user = await userModel.findById(token);
  if (!user) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  req.userId = token;
  req.user = user;
  next();
};

exports.userRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(401).json({ msg: "Unauthorized user" });
    }
    next();
  };
};
