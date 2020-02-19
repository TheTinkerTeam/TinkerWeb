const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    }
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;