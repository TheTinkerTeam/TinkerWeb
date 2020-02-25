const express = require("express");

const router = express.Router();

const projectController = require("../../../controllers/projects");

const auth = require("../../../middleware/auth");

router
  .route("/")
  .get(projectController.getProjects)
  .post(projectController.createProject);

module.exports = router;