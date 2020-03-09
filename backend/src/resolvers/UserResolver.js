const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const {
  createAccessToken,
  createRefreshToken,
  getUserId
} = require("../utils/auth");

const User = require("../models/User");

module.exports = {
  Query: {
    users: async (parent, args, { prisma, user }) => await prisma.users(),
    user: async (parent, { id }, { prisma }) => await prisma.user({ id })
  },
  Mutation: {
    signup: async (parent, { name, email, password, role }, { prisma }) => {
      try {
        const hashedPassword = await hash(password, 10);
        const user = await prisma.createUser({
          email,
          password: hashedPassword,
          role
        });
        return {
          token: createAccessToken(user),
          user
        };
      } catch (err) {
        console.error(err);
      }
    },
    login: async (parent, { email, password }, { prisma, res }) => {
      // Login validation
      const user = await prisma.user({ email });
      if (!user) {
        throw new Error(`No user found for email: ${email}`);
      }
      const passwordValid = await compare(password, user.password);
      if (!passwordValid) {
        throw new Error("Invalid password");
      }
      // Login successful
      res.cookie("token", createRefreshToken(user), {
        httpOnly: true
      });
      return {
        token: createAccessToken(user),
        user
      };
    }
  }
};
