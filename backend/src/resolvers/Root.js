const UserResolver = require("./UserResolver");
const ProjectResolver = require("./ProjectResolver");
const ClassroomResolver = require("./ClassroomResolver");
const TeamResolver = require("./TeamResolver");

const Root = {
  ...UserResolver,
  ...ProjectResolver,
  ...ClassroomResolver,
  ...TeamResolver,
  Query: {
    ...UserResolver.Query,
    ...ProjectResolver.Query,
    ...ClassroomResolver.Query,
    ...TeamResolver.Query
  },
  Mutation: {
    ...UserResolver.Mutation,
    ...ProjectResolver.Mutation,
    ...ClassroomResolver.Mutation,
    ...TeamResolver.Mutation
  }
};

module.exports = Root;
