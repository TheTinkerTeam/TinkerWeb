module.exports = {
  Query: {
    users: async (parent, args, { prisma }) => await prisma.users(),
    user: async (parent, { uid }, { prisma }) => await prisma.user({ uid }),
    checkEmail: async (parent, { email }, { prisma }) => {
      const res = await prisma.user({ email });
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
          response = await ctx.prisma.user({ username });
          if (!response) {
            break;
          }
        }
        if (response) {
          for (let i = 1; i <= body.lastName.length; i++) {
            username = (
              body.fistName + body.lastName.slice(0, i)
            ).toLowerCase();
            response = await ctx.prisma.user({ username });
            if (!response) {
              break;
            }
          }
        }
        let i = 1;
        while (response) {
          username = body.firstName + body.lastName + i;
          response = await ctx.prisma.user({ username });
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
        const user = await ctx.prisma.createUser(newUser);
        return user;
      } catch (err) {
        console.error(err);
      }
    },
    login: async (parent, { email, password }, { prisma, res }) => {
      const user = await prisma.user({ email });
      if (!user) {
        throw new Error(`No user found for email: ${email}`);
      }
    }
  }
};
