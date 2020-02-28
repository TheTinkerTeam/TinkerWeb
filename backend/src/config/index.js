const development = {
  db: {
    host: process.env.DEV_DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  }
};

const production = {
  db: {
    host: process.env.PROD_DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  }
};

const testing = {
  db: {
    host: process.env.TEST_DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  }
};

const config = {
  development,
  production,
  testing
};

const env = "development"; // 'dev', 'prod' or 'test'

module.exports = config[env];
