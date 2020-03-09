module.exports = {
  Query: {
    feed: async (parent, args, { prisma }) => {
      try {
        const publishedProjects = await prisma.projects({ published: true });
        return publishedProjects;
      } catch (err) {
        console.error(err);
      }
    },
    filterProjects: async (parent, { searchString }, context) => {
      return null;
    },
    project: async (parent, { id }, { prisma }) => {
      try {
        const project = await prisma.project(id);
        return project;
      } catch (err) {
        console.error(err);
      }
    }
  },
  Mutation: {
    createProject: async (
      parent,
      { title, description, content },
      { prisma, user }
    ) => {
      const userId = user.id;
      const project = await prisma.createProject({
        title,
        description,
        author: userId
      });
      return project;
    },
    updateProject: async (parent, { id }, { prisma }) => {
      return prisma.updateProject({
        where: { id },
        data: { published: true }
      });
    },
    deleteProject: async (parent, { id }, { prisma }) => {
      return context.prisma.deleteProject({ id });
    }
  }
};
