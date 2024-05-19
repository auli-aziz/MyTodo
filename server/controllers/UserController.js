import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET_TOKEN, { expiresIn: "1d" });
};

export const loginUser = async (req, res, next) => {
  const {email, password} = req.body;
  try {
    const user = await Users.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({message: "Login Success", payload: user, token: token });
  } catch(error) {
    res.status(400).json({ message: "Login Failed", error: error.message })
  }
};

export const signupUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const user = await Users.signup(name, email, password);
    const token = createToken(user._id);
    res.status(201).json({ message: "Signup Success", payload: user, token: token });
  } catch (error) {
    res.status(400).json({ message: "Signup Failed", error: error.message });
  }
};
