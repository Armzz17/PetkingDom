import jwt from "jsonwebtoken";
import User from "../models/user.js";

//Middleware function for require sign in
export const requireSignIn = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWTTOKEN_URI
    );
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json(err);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send("Unauthorized");
    }
    else {
        next();
    }
  } catch (error) {
    console.log(error);
  }
};
