const express = require('express');
const cors = require('cors');

const app = express();

// Init Middleware to be able to use cors
app.use(cors());
// Init Middleware to be able to use req.body
app.use(express.json());

// Define Routes
const userRoutes = require("src/routes/api/v1/users");
const profileRoutes = require("src/routes/api/v1/profiles");
const projectRoutes = require("src/routes/api/v1/projects");
  
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/profiles", profileRoutes);
app.use("/api/v1/projects", projectRoutes);

module.exports = app;