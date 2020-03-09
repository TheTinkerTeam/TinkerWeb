const { shield, and, or, not } = require("graphql-shield");

const rules = require("./utils/rules");

const permissions = shield({
  Query: {
    // User
    //users: rules.isAuthenticated,
    //user: rules.isAuthenticated
  },
  Mutation: {}
});

module.exports = permissions;
