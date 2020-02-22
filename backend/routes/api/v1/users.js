const express = require("express");

const router = express.Router();

const userController = require("../../../controllers/users");

const auth = require("../../../middleware/auth");

router
  .route("/")
  .post(userController.createUser);

router
  .route("/auth")
  .post(userController.loginUser)
  .delete(auth, userController.logoutUser);

module.exports = router;