require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");
const appConfig = require("./src/config/app");

connectDB();

const port = appConfig.port;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
