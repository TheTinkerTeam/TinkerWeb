const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT) || 5000
  },
  db: {
    host: process.env.DEV_DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  }
};

const prod = {
  app: {
    port: parseInt(process.env.TEST_APP_PORT) || 5000
  },
  db: {
    host: process.env.PROD_DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  }
};

const test = {
  app: {
    port: parseInt(process.env.TEST_APP_PORT) || 5000
  },
  db: {
    host: process.env.TEST_DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  }
};

const config = {
  dev,
  prod,
  test
};

const env = "dev"; // 'dev', 'prod' or 'test'

module.exports = config[env];
