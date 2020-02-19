const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");
const jwtSecret = authConfig.jwt.secret;

const Project = require("../models/Project");

// @route   GET /projects
// @desc    Get all projects
// @access  Public
exports.getProjects = async (req, res) => {
  try {
    let projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route   GET /projects/:projectID
// @desc    Get project by projectID
// @access  Private
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectID);
    if (!project) {
      return res.status(400).json({ msg: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Project not found" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   POST /projects
// @desc    Create user's project
// @access  Private
exports.createProject = async (req, res) => {
  try {
    /*
    let project = await Project.findOne({ user: req.user.id });
    if (project) {
      // Return error because project already exists
      return res.status(401).json({error: 'Project exists'});
    } else {
      // Create
      const {
        name
      } = req.body;
      project = new Project({
        user: req.user.id,
        name
      });
      await project.save();
    }
    */
   const project = await Project.create(req.body);
   res.send(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route   PATCH /projects/:projectID
// @desc    Update user's project
// @access  Private
exports.updateProject = async (req, res) => {
  try {
    let project = await Project.findById(req.params.projectID);
    if (!project) {
      // Return error because project doesn't exists
      return res.status(401).json({error: 'Project does not exists'});
    } else {
      // Update
      project = await Project.findByIdAndUpdate(req.params.projectID, req.body, {new: true});
    }
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route   DELETE /projects/:projectID
// @desc    Delete project by projectID
// @access  Private
exports.removeProject = async (req, res) => {
  try {
    // TODO: Make sure that the user has the right access to remove this project...
    // Remove project
    await Project.deleteOne({ _id: req.params.projectID });
    res.json({ msg: "Project deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
