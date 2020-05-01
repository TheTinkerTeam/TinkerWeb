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
    description: String
    interests: [String]
    country: String
    projects: [Project]
    avatar: String
    imagesURL: [String]
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
    students_name: [String]
    assignments: [Assignment]
    currentProject: Project
    archivedProjects: [Project]
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
    classroom(id: ID!): Classroom
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
    completeRegistration(
      uid: String!
      school: String!
      role: String!
    ): User!
    updateUser(
      uid: String!
      school: String
      role: String
      firstName: String
      lastName: String
      description: String
      interests: [String]
      country: String
      imagesURL: [String]
    ): User!
    login(email: String!, password: String!): User
    createProject(title: String!, description: String!): Project!
    updateProject(id: ID!, title: String, description: String): Project
    deleteProject(id: ID!): Project
    createClassroom(title: String!, description: String!): Classroom!
    updateClassroom(id: ID!, title: String, description: String): Classroom
    deleteClassroom(id: ID!): Classroom
    addStudent(id: ID, name: String): Boolean
  }
`;

module.exports = typeDefs;
