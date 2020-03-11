const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID!
    uid: String!
    email: String!
    firstName: String!
    lastName: String!
    username: String!
    school: String!
    role: String!
    projects: [Project]
  }

  type Project {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    imageURL: String
    description: String
    learning_objectives: String
    subjects: [String]
    tags: [String]
    grades: [String]
    content: String
    author: User!
  }

  type Query {
    # User
    users: [User]
    user(uid: String!): User
    me: User
    checkEmail(email: String!): Boolean
    # Project
    projects: [Project!]!
    feed: [Project!]!
    project(id: ID!): Project
    filterProjects(searchString: String): [Project!]!
  }

  type Mutation {
    signup(
      uid: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      school: String!
      role: String!
    ): User!
    login(email: String!, password: String!): User
    createProject(title: String!, description: String!): Project!
    updateProject(id: ID!, title: String, description: String): Project
    deleteProject(id: ID!): Project
  }
`;

module.exports = typeDefs;
