const UserResolver = require("./UserResolver");
const ProjectResolver = require("./ProjectResolver");
const ClassResolver = require("./ClassResolver");
const TeamResolver = require("./TeamResolver");

const Root = {
  ...UserResolver,
  ...ProjectResolver,
  ...ClassResolver,
  ...TeamResolver,
  Query: {
    ...UserResolver.Query,
    ...ProjectResolver.Query,
    ...ClassResolver.Query,
    ...TeamResolver.Query
  },
  Mutation: {
    ...UserResolver.Mutation,
    ...ProjectResolver.Mutation,
    ...ClassResolver.Mutation,
    ...TeamResolver.Mutation
  }
};

module.exports = Root;
