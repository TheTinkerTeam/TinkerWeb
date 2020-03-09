const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type Query {
    # User
    users: [User]
    user(id: ID!): User
    me: User
    # Project
    projects: [Project!]!
    feed: [Project!]!
    project(id: ID!): Project
    filterProjects(searchString: String): [Project!]!
  }

  type Mutation {
    signup(
      email: String!
      password: String!
      name: String!
      role: String!
    ): AuthPayload!
    login(email: String!, password: String!): AuthPayload
    createProject(title: String!, description: String!): Project!
    updateProject(id: ID!, title: String, description: String): Project
    deleteProject(id: ID!): Project
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type User {
    id: ID!
    email: String!
    role: String
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
`;

module.exports = typeDefs;
