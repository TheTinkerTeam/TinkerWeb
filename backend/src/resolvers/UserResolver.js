const User = require("../models/User");
const Classroom = require("../models/Classroom");
const Project = require("../models/Project");

module.exports = {
  Query: {
    users: async (parent, args, { prisma }) => await User.find(),
    // user: async (parent, { uid }, { prisma }) => await User.findOne({ uid }),
    user: async (parent, { uid }, { prisma }) => {
      try {
        const user = await User.findOne({ uid });

        user._doc["classrooms"] = user._doc["classrooms"].map(
          async (classroom_id) => {
            const classroom = await Classroom.findById(classroom_id);
            // project._doc["standards"] = project._doc["standards"].map(
            //   async (standard_id) => await Standard.findById(standard_id)
            // );
            classroom._doc["currentProject"] = await Project.findById(classroom.currentProject)

            // console.log(classroom)
            // console.log(classroom_id)
            return classroom
          }
        );

        // console.log("user = ", user)

        // const returnedUser = {
        //   ...user._doc,
        //   id: user._id,
        // };
        // console.log("returnedUser =", returnedUser);
        // return returnedUser;

        return user
      } catch (error) {
        console.log(error);
      }
    },
    checkEmail: async (parent, { email }, { prisma }) => {
      const res = await User.findOne({ email });
      if (res) {
        return true;
      } else {
        return false;
      }
    },
  },
  Mutation: {
    signup: async (parent, body, ctx) => {
      // console.log(body);
      try {
        // TODO: MOVE to different file as function
        // Generate username from full name:
        let username;
        for (let i = 1; i <= body.firstName.length; i++) {
          username = (body.firstName.slice(0, i) + body.lastName).toLowerCase();
          response = await User.findOne({ username });
          if (!response) {
            break;
          }
        }
        if (response) {
          for (let i = 1; i <= body.lastName.length; i++) {
            username = (
              body.fistName + body.lastName.slice(0, i)
            ).toLowerCase();
            response = await User.findOne({ username });
            if (!response) {
              break;
            }
          }
        }
        let i = 1;
        while (response) {
          username = body.firstName + body.lastName + i;
          response = await User.findOne({ username });
          i++;
        }
        // console.log(body);

        const newUser = {
          uid: body.uid,
          email: body.email,
          firstName: body.firstName,
          lastName: body.lastName,
          username,
          role: body.role,
          school: body.school,
          avatar: body.avatar,
        };
        const user = await User.create(newUser);
        return user;
      } catch (err) {
        console.log(newUser);
        console.error(err.message);
      }
    },
    completeRegistration: async (parent, body, ctx) => {
      // console.log("completeRegistration = ", body);
      // console.log("uid = ", body.uid);

      const uid = body.uid;

      try {
        user = await User.findOne({ uid });

        console.log("user = ", user);

        user.school = body.school;
        user.role = body.role;

        user.save();

        return user;
      } catch (err) {
        console.error(err.message);
      }
    },
    updateUser: async (parent, body, ctx) => {
      // console.log("data = ", body);
      // console.log('uid = ', body.uid);
      // console.log('school = ', body.school);

      const uid = body.uid;
      const school = body.school;
      const role = body.role;
      const firstName = body.firstName;
      const lastName = body.lastName;
      const description = body.description;
      const interests = body.interests;
      const country = body.country;

      try {
        // console.log("The new imagesURL", imagesURL);
        user = await User.findOne({ uid });

        // console.log(
        //   "The current imagesURL (before update, in mongodb)= ",
        //   user.imagesURL
        // );
        // console.log("imagesURL[0]", imagesURL[0]);
        user.school = school ? school : user.school;
        user.role = role ? role : user.role;
        user.firstName = firstName ? firstName : user.firstName;
        user.lastName = lastName ? lastName : user.lastName;
        user.country = country ? country : user.country;
        user.description = description ? description : user.description;
        user.interests = interests ? interests : user.interests;
        // user.imagesURL = imagesURL ? imagesURL : user.imagesURL;

        // console.log("just before saving, user.imagesURL = ", user.imagesURL);

        user.save();

        return user;
      } catch (err) {
        console.error(err.message);
      }
    },
    updateImagesURLUser: async (parent, body, ctx) => {
      // console.log("data = ", body);

      const uid = body.uid;
      const name = body.newImageURL.name;
      const url = body.newImageURL.url;
      try {
        user = await User.findOne({ uid });
        // console.log("[updateImagesURLUser] user = ", user);
        user.userImages = [...user.userImages, { name: name, url: url }];
        // console.log(
        //   "[updateImagesURLUser] The current imagesURL (before update, in mongodb)= ",
        //   user.userImages
        // );
        user.save();
        return user;
      } catch (err) {
        console.error(err.message);
      }
    },
    updateAvatar: async (parent, body, ctx) => {
      console.log("data = ", body);

      const uid = body.uid;
      const name = body.newAvatarURL.name;
      const url = body.newAvatarURL.url;
      try {
        user = await User.findOne({ uid });
        console.log("Hello testing");
        user.avatar = url;
        user.save();
        return user;
      } catch (err) {
        console.error(err.message);
      }
    },
    deleteUserPhoto: async (parent, body, ctx) => {
      // console.log("data = ", body);

      const uid = body.uid;
      const name = body.photoToDelete.name;
      const url = body.photoToDelete.url;
      try {
        user = await User.findOne({ uid });

        if (user.userImages.length == 1) {
          console.log("in the loop");
          user.avatar = "";
        }

        user.userImages = [
          ...user.userImages.filter((userImage) => userImage.name !== name),
        ];

        // console.log(
        //   "The current imagesURL (before update, in mongodb)= ",
        //   user.userImages
        // );
        // console.log(
        //   "The current avatarURL (before update, in mongodb)= ",
        //   user.avatar
        // );

        user.save();

        return user;
      } catch (err) {
        console.error(err.message);
      }
    },
    login: async (parent, { email, password }, { prisma, res }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error(`No user found for email: ${email}`);
      }
    },
  },
};
