const config = require('./config');
const mongoose = require('mongoose');

// TODO: Select MongoDB Collection depending on the route that the user is at because each school has it's own database collection
// Example: for the school Harvard the dbCollection show be 'harvard' to have the right dbURI exporting here
const school = 'public';

const dbHost = config.db.host;
const dbUser = config.db.user;
const dbPass = config.db.password;
const dbCollection = school;


const dbURI = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbCollection}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      'useNewUrlParser': true,
      'useFindAndModify': false,
      'useCreateIndex': true,
      'useUnifiedTopology': true
    });

    console.log('MonogoDB connected');
  } catch (err) {
    console.error(err.message);

    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;