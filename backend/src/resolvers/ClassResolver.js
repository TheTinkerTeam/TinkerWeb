const Class = require("../models/Class");

module.exports = {
  Query: {
    classes: async (parent, args, { prisma }) => {
      try {
        const classes = await Class.find();
        return classes;
      } catch (err) {
        console.error(err);
      }
    }
  },
  Mutation: {}
};
