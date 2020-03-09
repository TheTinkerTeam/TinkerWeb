const UserResolver = require("./UserResolver");
const ProjectResolver = require("./ProjectResolver");

const Root = {
  ...UserResolver,
  ...ProjectResolver,
  Query: {
    ...UserResolver.Query,
    ...ProjectResolver.Query
  },
  Mutation: {
    ...UserResolver.Mutation,
    ...ProjectResolver.Mutation
  }
};

module.exports = Root;
