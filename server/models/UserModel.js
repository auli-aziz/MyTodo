import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.statics.signup = async function(name, email, password) {
  if(!name || !email || !password) {
    throw Error("All fields must be fileld");
  }
  if(!validator.isEmail(email)) {
    throw Error("invalid email");
  }
  // if(!validator.isStrongPassword(password)) {
  //   throw Error("Weak password");
  // }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already used");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hash });
  return user;
};

UserSchema.statics.login = async function (email, password) {
  if(!email || !password) {
    throw Error("All fields must be fileld");
  }
  const user = await this.findOne({ email });
  if(!user) {
    const error = new Error("Email not registered");
    error.status = 404;
    throw error;
  }

  const match = await bcrypt.compare(password, user.password);
  if(!match) {
    throw Error("Incorrect password");
  }
  return user;
}

export default mongoose.model("Users", UserSchema);
