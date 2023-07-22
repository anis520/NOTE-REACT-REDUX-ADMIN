import User from "../models/User.js";
import JWT from "jsonwebtoken";
import asynchandler from "express-async-handler";
import bcrypt from "bcrypt";

export const UserLogin = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email | !password) {
    res.json({ message: "all filsed" });
  }
  const user = await User.findOne({ email });
  // res.status(200).json(user)

  if (user) {
    const passverify = await bcrypt.compare(password, user.password);

    if (!passverify) {
      res.json({ message: "password not match" });
    }

    const accessToken = JWT.sign(
      { _id: user._id, email: user.email },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
      }
    );
    const refreshToken = JWT.sign(
      { _id: user._id, email: user.email },
      process.env.REFRESH_TOKEN,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
      }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.APP_ENV == "Development" ? false : true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
      path: "/",
    });

    res.json({
      refreshToken,
      accessToken,
      user,
      message: "loging successfull",
    });
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

export const UserLogout = asynchandler((req, res) => {
  res.clearCookie("accessToken");

  res.status(200).json({ message: "logout successfull" });
});

export const meController = asynchandler(async (req, res) => {
  const Token = req.cookies.accessToken;
  console.log(Token);
  if (!Token) {
    res.status(404).json({ message: "unauthoriged user" });
  } else {
    // console.log(token);
    JWT.verify(Token, process.env.ACCESS_TOKEN, async (err, decoed) => {
      if (err) {
        return res.status(400).json({ message: "invatie token" });
      }

      const me = await User.findOne({ email: decoed.email }).select(
        "-password"
      );

      res.status(200).json({ me });
    });
  }
});

export const UserRegister = asynchandler(async (req, res) => {
  // get data
  console.log(req.body);
  const { username, email, password, role, status } = req.body;

  //  // check validation
  //  if (!name || !password || !email || !role) {
  //    return res.status(400).json({ message: "All fields are required" });
  //  }

  // email existance
  const emailCheck = await User.findOne({ email });

  if (emailCheck) {
    return res.status(400).json({ message: "Email already exists" });
  }
  // hash password
  const hash = await bcrypt.hash(password, 10);

  // create new user data
  const user = await User.create({
    username,
    status,
    email,
    role,
    password: hash,
  });

  // check
  if (user) {
    return res.status(201).json({ message: "User created successful", user });
  } else {
    return res.status(400).json({ message: "Invalid user data" });
  }
});
