const express = require("express");

const router = express.Router();

const profileController = require("../../../controllers/profiles");

const auth = require("../../../middleware/auth");

router
  .route("/")
  .get(auth, profileController.getProfiles)
  .post(profileController.createProfile);

router.route("/me").get(auth, profileController.getMyProfile);

router
  .route("/:profileID")
  .get(auth, profileController.getProfile)
  .patch(auth, profileController.updateProfile)
  .delete(auth, profileController.removeProfile);

module.exports = router;
