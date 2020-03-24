const Classroom = require("../models/Classroom");

module.exports = {
  Query: {
    classrooms: async (parent, args, ctx) => {
      try {
        console.log(ctx.user);
        const classrooms = await Classroom.find();
        return classrooms;
      } catch (err) {
        console.error(err);
      }
    }
  },
  Mutation: {}
};
