//controller file is responsible for performing operation
const { sign } = require("jsonwebtoken");
const userModel = require("../model/userModel");
const nodemailer = require("nodemailer");
const verificationModel = require("../model/verification");
const dotenv = require("dotenv");

const {email, verifyemail, emailverified } = require("../email/authemail");
const { isValidObjectId } = require("mongoose");
dotenv.config({ path: "config.env" });
const { randomInt } = require("crypto");

//To Post do this:
exports.createUser = async (req, res) => {
  try {
    // for (let i = 0; i < 4; i++) {
    //   const random = Math.round(Math.random() * 9);
    //   OTP = random + OTP;
    // }
    const OTP = randomInt(1000, 10000);

    const existingUser = await userModel
      .findOne({ email: req.body.email })
      .lean();

    if (!existingUser) {
      const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        age: req.body.age,
      });

      const verification = new verificationModel({
        owner: user._id,
        token: OTP,
      });

      await user.save(user);
      await verification.save(verification);
      await verifyemail(user.email, OTP);

      const token = sign({ email: user.email }, process.env.SECRET, {
        expiresIn: 7200,
      });
      console.log(OTP);
      console.log(user._id);
      console.log(user);
      res.json({
        status: 200,
        user,
        token,
        message: "An Email Has Been Sent To Your Account Please Verify",
      });

      // return
    }
  } catch (error) {
    res.json(error.message);
    console.log(error);
    return;
  }
};

//To do GET do this:
exports.findUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email }).lean();

    if (!user) {
      res.json({ message: "invalid email" });

      return;
    } else {
      res.json({
        status: 200,
        user,
      });
    }
  } catch (error) {
    res.json({
      status: 500,
      message: error.message,
    });
  }
};

//TO Update do this:
exports.updateUser = async (req, res) => {
  try {
    const id = req.query.id;
    const updateUser = await userModel.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });
    res.json({
      status: 200,
      user: updateUser,
    });
    return;
    /*the findByIdUpdate method has two arg  
		one: the id of the doc to be updated and 
		second: the actual data we are updating the document with*/
  } catch (error) {
    res.json(error.message);
  }
};

//To Delete do this:
exports.deleteUser = async (req, res) => {
  try {
    const id = req.query.id;
    const deleteUser = await userModel.findByIdAndDelete(id);
    res.json({
      status: 200,
      user: deleteUser,
    });
    return;
  } catch (error) {
    res.json(error.message);
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const { userId, otp } = req.body;
    if (!userId || !otp.trim()) {
      res.json("invalid reqduest");
      return;
    }
    if (!isValidObjectId(userId)) {
      res.json("invalid requst");
      return;
    }
    const veryfiedUser = await userModel.findById(userId).lean();
    console.log(veryfiedUser);
    if (!veryfiedUser) {
      return res.json({
        status: 500,
        message: "USER N111OT FOUND",
      });
    }
    if (veryfiedUser.verified) {
      return res.json({
        status: 500,
        message: "USER FOUND",
      });
    }
    const verification = await verificationModel.findOne({
      owner: veryfiedUser._id,
    });
    if (!verification) {
      return res.json({
        status: 500,
        message: "USER NOT ",
      });
    }
    const matched = await verification.compareToken(otp);
    if (!matched) {
      return res.json({
        status: 500,
        message: "USER NOTc FOUND",
      });
    }
    veryfiedUser.verified = true;

    await verificationModel.findByIdAndDelete(verification._id);
    // await veryfiedUser.save();

    await emailverified(veryfiedUser.email);

    res.json('sucessful')
  } catch (error) {
    res.json(error.message);
    console.log(error.message);
    return;
  }
};
