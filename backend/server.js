require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');
const appConfig = require('./config/app');

connectDB();

const port = appConfig.port;
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});