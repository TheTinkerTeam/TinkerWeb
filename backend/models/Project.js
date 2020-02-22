const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
    },
    learning_objectives: {
        type: String,
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
    date: {
        created: {
            type: Date,
            default: Date.now()
        }
    }
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;