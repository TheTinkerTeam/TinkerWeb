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
    avatar: String
    classrooms: [Classroom]
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

  type Assignment {
    date: DateTime
    task: String
  }

  type Classroom {
    id: ID!
    class: String
    subject: String
    students: [User]
    assignments: [Assignment]
    current_project: Project
    archived_projects: [Project]
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
    # Classroom
    classrooms: [Classroom]
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
      avatar: String
    ): User!
    login(email: String!, password: String!): User
    createProject(title: String!, description: String!): Project!
    updateProject(id: ID!, title: String, description: String): Project
    deleteProject(id: ID!): Project
  }
`;

module.exports = typeDefs;
