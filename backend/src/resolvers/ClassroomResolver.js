const Classroom = require("../models/Classroom");
const User = require("../models/User");

module.exports = {
  Query: {
    classrooms: async (parent, args, ctx) => {
      try {
        const uid = await ctx.user;
        const user = await User.findOne({
          uid
        });
        const classrooms = user.classrooms;
        let detailedClassrooms = [];
        for (let i = 0; i < classrooms.length; i++) {
          const classroom = await Classroom.findById(classrooms[i]);
          detailedClassrooms.push(classroom);
        }
        return detailedClassrooms;
      } catch (err) {
        console.error(err);
      }
    }
  },
  Mutation: {}
};
