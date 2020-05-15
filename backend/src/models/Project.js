const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
  learningObjectives: {
    type: String,
  },
  subjects: [
    {
      type: String,
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  grades: [
    {
      type: String,
    },
  ],
  published: {
    type: Boolean,
    default: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
  },
  date: {
    created: {
      type: Date,
      default: Date.now(),
    },
  },
  standards: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  bigIdea: {
    type: String,
  },
  keyConcepts: [
    {
      type: String,
    },
  ],
  keyQuestion: {
    type: String,
  },
  buildingSupplies: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  upcycledSupplies: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  tools: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  partOneFindingOut: [
    {
      type: String,
    },
  ],
  partTwoWorkingWithIdeas: [
    {
      type: String,
    },
  ],
  partThreeMakingItHappen: [
    {
      type: String,
    },
  ],
  partFourEvaluatingYourSolution: [
    {
      type: String,
    },
  ],
  hints: [
    {
      type: String,
    },
  ],
  safety: [
    {
      type: String,
    },
  ],
});

const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;
