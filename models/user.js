var mongoose = require('mongoose');
var musicSchema = require('./music').schema;

var userSchema = new mongoose.Schema({
    nickname: { type: String, unique: true, index: true },
    name: String,
    password: String,
    followedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    followedByCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    musics: [musicSchema]
});

module.exports = mongoose.model('User', userSchema);