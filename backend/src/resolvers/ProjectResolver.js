const Project = require("../models/Project");

module.exports = {
  Query: {
    feed: async (parent, args, { prisma }) => {
      try {
        const publishedProjects = await Project.find();
        return publishedProjects;
      } catch (err) {
        console.error(err);
      }
    },
    projects: async (parent, { id }, { prisma }) => {
      try {
        const projects = await Project.find();
        return projects;
      } catch (err) {
        console.error(err);
      }
    },
    project: async (parent, { id }, { prisma }) => {
      try {
        const project = await Project.findById(id);
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
      const project = await Project.create({
        title,
        description,
        author: userId
      });
      return project;
    },
    updateProject: async (parent, { id }, { prisma }) => {
      return Project.findOneAndUpdate({
        filter: { id },
        update: { published: true }
      });
    },
    deleteProject: async (parent, { id }, { prisma }) => {
      return Project.deleteOne({ id });
    }
  }
};
