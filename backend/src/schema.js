const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type UserImage {
    name: String!
    url: String!
  }

  input UserImageInput {
    name: String!
    url: String!
  }

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
    userImages: [UserImage]
    classrooms: [Classroom]
  }

  type Standard {
    id: ID!
    code: String
    description: String
    skills: [String]!
  }

  type Supply {
    id: ID!
    name: String!
    type: String!
    available: Boolean!
  }

  type Project {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    duration: String!
    imageURL: String!
    description: String
    learning_objectives: String
    bigIdea: String!
    keyConcepts: [String]!
    keyQuestion: String!
    standards: [Standard]!
    subjects: [String]!
    buildingSupplies: [Supply]!
    upcycledSupplies: [Supply]!
    tools: [Supply]!
    tags: [String]!
    grades: [String]!
    content: String
    partOneFindingOut: [String]!
    partTwoWorkingWithIdeas: [String]!
    partThreeMakingItHappen: [String]!
    partFourEvaluatingYourSolution: [String]!
    hints: [String]!
    safety: [String]!
    author: User!
  }

  type Assignment {
    date: DateTime
    task: String
  }

  type Classroom {
    id: ID!
    className: String
    grade: String
    subject: String
    students: [User]!
    assignments: [Assignment]!
    currentProject: Project
    archivedProjects: [Project]!
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
    ): User!
    updateImagesURLUser(
      uid: String!
      newImageURL: UserImageInput!
    ): User!
    updateAvatar(
      uid: String!
      newAvatarURL: UserImageInput!
    ): User!
    deleteUserPhoto(
      uid: String!
      photoToDelete: UserImageInput!
    ): User!
    login(email: String!, password: String!): User
    createProject(title: String!, description: String!): Project!
    updateProject(id: ID!, title: String, description: String): Project
    deleteProject(id: ID!): Project
    addCurrentProject(classroomId: ID!, projectId: ID!): Classroom!
    addClassroom(className: String!, grade: String!, subject: String!): Classroom!
    createClassroom(title: String!, description: String!): Classroom!
    updateClassroom(id: ID!, title: String, description: String): Classroom
    deleteClassroom(id: ID!): Classroom
    addStudent(classroomID: ID!, email: String!): User
    deleteStudent(classroomID: ID!, uid: String!, studentID: ID!): Boolean
  }
`;

module.exports = typeDefs;
