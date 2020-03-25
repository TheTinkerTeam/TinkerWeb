const mongoose = require("mongoose");

const ClassroomSchema = new mongoose.Schema({
  class: {
    type: String
  },
  /*
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String
  },
  learningObjectives: {
    type: String
  },
  subjects: [
    {
      type: String
    }
  ],
  tags: [
    {
      type: String
    }
  ],
  grades: [
    {
      type: String
    }
  ],
  published: {
    type: Boolean,
    default: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId
  },
  */
  students_name: [
    {
      type: String
    }
  ],
  assignments: [
    {
      date: {
        type: String
      },
      task: {
        type: String
      }
    }
  ],
  currentProject: {
    type: mongoose.Schema.Types.ObjectId
  },
  archivedProjects: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  date: {
    created: {
      type: Date,
      default: Date.now()
    }
  }
});

const Classroom = mongoose.model("classroom", ClassroomSchema);

module.exports = Classroom;
