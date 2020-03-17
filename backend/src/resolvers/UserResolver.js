const User = require("../models/User");

module.exports = {
  Query: {
    users: async (parent, args, { prisma }) => await User.find(),
    user: async (parent, { uid }, { prisma }) => await User.findOne({ uid }),
    checkEmail: async (parent, { email }, { prisma }) => {
      const res = await User.findOne({ email });
      if (res) {
        return true;
      } else {
        return false;
      }
    }
  },
  Mutation: {
    signup: async (parent, body, ctx) => {
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

        const newUser = {
          uid: body.uid,
          email: body.email,
          firstName: body.firstName,
          lastName: body.lastName,
          username,
          role: body.role,
          school: body.school
        };
        const user = await User.create(newUser);
        return user;
      } catch (err) {
        console.error(err);
      }
    },
    login: async (parent, { email, password }, { prisma, res }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error(`No user found for email: ${email}`);
      }
    }
  }
};
