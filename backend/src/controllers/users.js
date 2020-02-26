const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");
const jwtSecret = authConfig.jwt.secret;

const User = require("../models/User");

// @route   GET /users/:email
// @desc    Check if email exists
// @access  Public
exports.checkEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email }).select(
      "-password"
    );
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route   POST /users
// @desc    Register user
// @access  Public
exports.createUser = async (req, res) => {
  const { email, userType, firstName, lastName, school, password } = req.body;

  try {
    // Check if user already exists with the email given
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Email already exists" }] });
    }

    // Genertae user name from full name:
    let username;
    for (let i = 1; i <= firstName.length; i++) {
      username = (firstName.slice(0, i) + lastName).toLowerCase();
      user = await User.findOne({ username });
      if (!user) {
        break;
      }
    }
    if (user) {
      return res.status(400).json({
        errors: [
          { msg: "Name is too common (: TODO: CHANGE TO HANDLE ALL NAMES..." }
        ]
      });
    }

    // Create user object
    user = new User({
      email,
      username,
      userType,
      name: {
        first: firstName,
        last: lastName
      },
      school,
      password
    });

    // Encrypt user's password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Add user to the database
    await user.save();

    // Return jwt (json web token)
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, jwtSecret, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route   GET /users/auth
// @desc    Authenticate route
// @access  Public
exports.authenticate = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route   POST /users/auth
// @desc    Log In User
// @access  Public
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    // Return jwt (json web token)
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, jwtSecret, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route   DELETE /users/auth/:userID
// @desc    Log Out User
// @access  Private
exports.logoutUser = async (req, res) => {
  // TODO!
};
