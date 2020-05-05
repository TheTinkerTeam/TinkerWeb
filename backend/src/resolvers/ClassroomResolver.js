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
        // console.log(classroom._doc);

        classroom._doc["students"] = classroom._doc["students"].map(
          async (user_id) => await User.findById(user_id)
        );

        console.log(classroom._doc);

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
    addStudent: async (parent, body, ctx) => {
      try {
        console.log(body);
        const classroomID = body.classroomID;

        const newStudent = {
          // firstName: body.firstName,
          email: body.name,
        };

        user = await User.findOne({ email: newStudent.email });
        classroom = await Classroom.findOne({ _id: classroomID });

        // console.log(user.uid);
        // console.log(user._id);
        // console.log({user})
        user.classrooms = [...user.classrooms, classroom._id];
        // console.log(user.classrooms)
        user.save();

        classroom.students = [...classroom.students, user._id];
        classroom.save();

        console.log({ classroom });

        return user;
      } catch (error) {
        console.log(error);
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
        user.classrooms = [...user.classrooms, classroom];
        user.save();
        return classroom;
      } catch (error) {
        console.log(newClassroom);
        console.error(error.message);
      }
    },
  },
};
