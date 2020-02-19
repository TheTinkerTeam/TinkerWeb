const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");
const jwtSecret = authConfig.jwt.secret;

const Profile = require("../models/Profile");

// @route   GET /profiles
// @desc    Get all profiles
// @access  Private
exports.getProfiles = async (req, res) => {
  try {
    let profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route   GET /profiles/:profileID
// @desc    Get profile by profileID
// @access  Private
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileID);
    if (!profile) {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.json(profile);
  } catch (err) {
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   POST /profiles
// @desc    Create user's profile
// @access  Private
exports.createProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      // Return error because profile already exists
      return res.status(401).json({error: 'Profile exists'});
    } else {
      // Create
      const {
        name
      } = req.body;
      profile = new Profile({
        user: req.user.id,
        name
      });
      await profile.save();
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route   PATCH /profiles/:profileID
// @desc    Update user's profile
// @access  Private
exports.updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findById(req.params.profileID);
    if (!profile) {
      // Return error because profile doesn't exists
      return res.status(401).json({error: 'Profile does not exists'});
    } else {
      // Update
      profile = await Profile.findByIdAndUpdate(req.params.profileID, req.body, {new: true});
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route   DELETE /profiles/:profileID
// @desc    Delete profile by profileID
// @access  Private
exports.removeProfile = async (req, res) => {
  try {
    // TODO: Make sure that the user has the right access to remove this profile...
    // Remove profile
    await Profile.deleteOne({ _id: req.params.profileID });
    res.json({ msg: "Profile deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
