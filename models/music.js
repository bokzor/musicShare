var mongoose = require('mongoose');

var musicSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    artist: { type: String, default: '' },
    title: { type: String, default: '' },
    isMix: { type: Boolean, default: false },
    duration: { type: Number, default: 0 },
    tag: [{ type: String }],
    genres: [{ type: String, default: '' }],
    listeningCount: { type: Number, default: 0 },
    img: { type: String, default: '' },
    url: { type: String },
    hostType: { type: String },
    takenCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = {
    model: mongoose.model('Music', musicSchema),
    schema: musicSchema
}