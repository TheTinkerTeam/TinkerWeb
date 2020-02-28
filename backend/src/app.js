const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../../frontend/build")));
// Init Middleware to be able to use cors
app.use(cors());
// Init Middleware to be able to use req.body
app.use(express.json());

// Define Routes
const userRoutes = require("./routes/api/v1/users");
const profileRoutes = require("./routes/api/v1/profiles");
const projectRoutes = require("./routes/api/v1/projects");

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/profiles", profileRoutes);
app.use("/api/v1/projects", projectRoutes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

module.exports = app;
