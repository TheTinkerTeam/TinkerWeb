const express = require("express");

const router = express.Router();

const userController = require("../../../controllers/users");

const auth = require("../../../middleware/auth");

router.route("/").post(userController.createUser);

router
  .route("/auth")
  .get(auth, userController.authenticate)
  .post(userController.loginUser)
  .delete(auth, userController.logoutUser);

router.route("/email/:email").get(userController.checkEmail);

module.exports = router;
