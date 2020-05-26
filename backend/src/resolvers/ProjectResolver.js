const Project = require("../models/Project");
const Standard = require("../models/Standard");
const Supply = require("../models/Supply");

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
        project._doc["standards"] = project._doc["standards"].map(
          async (standard_id) => await Standard.findById(standard_id)
        );
        project._doc["buildingSupplies"] = project._doc["buildingSupplies"].map(
          async (supply_id) => await Supply.findById(supply_id)
        );
        project._doc["upcycledSupplies"] = project._doc["upcycledSupplies"].map(
          async (supply_id) => await Supply.findById(supply_id)
        );
        project._doc["tools"] = project._doc["tools"].map(
          async (supply_id) => await Supply.findById(supply_id)
        );
        // console.log(project);
        return project;
      } catch (err) {
        console.error(err);
      }
    },
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
        author: userId,
      });
      return project;
    },
    updateProject: async (parent, { id }, { prisma }) => {
      return Project.findOneAndUpdate({
        filter: { id },
        update: { published: true },
      });
    },
    deleteProject: async (parent, { id }, { prisma }) => {
      return Project.deleteOne({ id });
    },
  },
};
