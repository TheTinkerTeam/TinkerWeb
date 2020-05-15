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

          classroom._doc["students"] = classroom._doc["students"].map(
            async (user_id) => await User.findById(user_id)
          );

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

        // console.log(classroom._doc);

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
          email: body.email,
        };

        const user = await User.findOne({ email: newStudent.email });

        if (!user) {
          console.error("EMAIL NOT FOUND");
          return;
        }

        // console.log("user", user)
        console.log("user._id", user._id);

        let classroom = await Classroom.findOne({ _id: classroomID });

        if (!classroom) {
          console.error("Classroom not found.");
          return;
        }

        console.log("classroom._id", classroom._id);

        console.log("classroom.students (pre) = ", classroom.students);

        await Classroom.updateOne(
          { _id: classroomID },
          { students: [...classroom.students, user._id] }
          );
        await User.updateOne(
          { email: newStudent.email },
          { classrooms: [...user.classrooms, classroom._id] }
          );

        // classroom.students = [...classroom.students, user._id];
        console.log("classroom.students (post) = ", classroom.students);

        // user.classrooms = [...user.classrooms, classroom._id];
        // await user.save();

        // classroom = await Classroom.findOne({ _id: classroomID });

        // console.log('classroom.students (pre) = ', classroom.students);

        // classroom.students = [...classroom.students, user._id];
        // await classroom.save();

        // console.log('classroom.students (post) = ', classroom.students);

        // console.log({ classroom });

        return user;
      } catch (error) {
        console.log(error);
      }
    },
    deleteStudent: async (parent, body, ctx) => {
      try {
        // console.log(body);
        const classroomID = body.classroomID;
        const studentID = body.studentID;
        const studentUID = body.uid;

        classroom = await Classroom.findOne({ _id: classroomID });
        // console.log("studentsList", classroom.students);
        let newStudentsLists = [];
        newStudentsLists = [
          ...classroom.students.filter((id) => {
            return `${id}` !== `${studentID}`;
          }),
        ];
        // console.log("newStudentsLists", newStudentsLists)

        classroom.students = [...newStudentsLists];
        // classroom.save();

        await Classroom.updateOne(
          { _id: classroomID },
          { students: [...newStudentsLists] }
          );

        user = await User.findOne({ uid: studentUID });
        // console.log({user})
        // console.log("user.classrooms", user.classrooms)

        // let userClassroomsList = [...user.classrooms];
        let userClassroomsFiltered = [];
        // console.log("userClassroomsFiltered", userClassroomsFiltered);
        // console.log("classroomID", classroomID);
        userClassroomsFiltered = [
          ...user.classrooms.filter((id) => {
            // console.log(id);
            // console.log(classroomID);
            // console.log(`${id}` !== `${classroomID}`);
            // return(id !== classroomID)
            return `${id}` !== `${classroomID}`;
          }),
        ];
        // console.log("userClassroomsFiltered", userClassroomsFiltered);

        await User.updateOne(
          { uid: studentUID },
          { classrooms: [...userClassroomsFiltered] }
          );


        // user.classrooms = [...userClassroomsFiltered];
        // user.save();

        return true;
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
