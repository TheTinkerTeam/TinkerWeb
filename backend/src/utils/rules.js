const { rule } = require("graphql-shield");

const Project = require("../models/Project");

/* TODO: Read more about the cache options! */

// User Roles
const isAuthenticated = rule({ cache: "contextual" })(
  async (parent, args, ctx, info) => {
    return ctx.user !== null;
  }
);

const isTeacher = rule({ cache: "contextual" })(
  async (parent, args, ctx, info) => {
    return ctx.user.role === "teacher";
  }
);

const isSchoolAdmin = rule({ cache: "contextual" })(
  async (parent, args, ctx, info) => {
    return ctx.user.role === "schoolAdmin";
  }
);

// Super Roles
const isSuperUser = rule({ cache: "contextual" })(
  async (parent, args, ctx, info) => {
    return ctx.user.role === "superUser";
  }
);

const isSuperAdmin = rule({ cache: "contextual" })(
  async (parent, args, ctx, info) => {
    return ctx.user.role === "superAdmin";
  }
);

// Project Roles
const isProjectAuthor = rule({ cache: "contextual" })(
  async (parent, { id }, ctx, info) => {
    const project = await Project.findById(id);
    return ctx.user.id === project.author;
  }
);

const rules = {
  isAuthenticated,
  isTeacher,
  isSchoolAdmin,
  isSuperUser,
  isSuperAdmin
};

module.exports = rules;
