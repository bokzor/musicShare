var mongoose = require('mongoose');
var musicSchema = require('./music').schema;
var bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;


var userSchema = new mongoose.Schema({
    username: { type: String, index: { unique: true }, required: true },
    name: {type: String },
    password: { type: String, required: true },
    email: { type: String, index: { unique: true }, required: true },
    connected: {type: Boolean, default: false },
    followedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    followedByCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    musics: [musicSchema]
});


userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


module.exports = mongoose.model('User', userSchema);