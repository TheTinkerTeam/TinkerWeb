const Classroom = require("../models/Classroom");
const User = require("../models/User");
const Project = require("../models/Project");

module.exports = {
  Query: {
    classrooms: async (parent, args, ctx) => {
      try {
        const uid = await ctx.user;
        const user = await User.findOne({
          uid,
        });
        const classroomIDs = user.classrooms;
        // console.log({classroomIDs})

        let detailedClassrooms = [];
        for (let i = 0; i < classroomIDs.length; i++) {
          const classroom = await Classroom.findById(classroomIDs[i]);
          // console.log({classroom})

          detailedClassrooms.push({
            ...classroom._doc,
            currentProject: await Project.findById(classroom.currentProject),
            id: classroom._id,
          });
        }
        // console.log(detailedClassrooms);

        return detailedClassrooms;
      } catch (err) {
        console.error(err);
      }
    },
    classroom: async (parent, { id }, { prisma }) => {
      try {
        const classroom = await Classroom.findById(id);
        const returnedClassroom = {
          ...classroom._doc,
          id: classroom._id,
          currentProject: await Project.findById(classroom.currentProject),
        };
        // console.log(returnedClassroom);
        return returnedClassroom;
      } catch (err) {
        console.error(err);
      }
    },
  },
  Mutation: {
    addStudent: async (parent, { id, name }, { prisma }) => {
      try {
        const test = await Classroom.updateOne(
          { _id: id },
          {
            $push: { students_name: name },
          }
        );
        return true;
      } catch (err) {
        console.error(err);
      }
    },
    addClassroom: async (parent, body, ctx) => {
      try {
        const newClassroom = {
          className: body.className,
          grade: body.grade,
          subject: body.subject,
        };
        const classroom = await Classroom.create(newClassroom);
        const uid = await ctx.user;
        user = await User.findOne({ uid });
        user.classrooms = [...user.classrooms, classroom]
        user.save();
        return classroom;
      } catch (error) {
        console.log(newClassroom);
        console.error(error.message);
      }
    },
  },
};
