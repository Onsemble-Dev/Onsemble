var mongoose = require('mongoose'),
  crypto = require('crypto'),
  // Lib to help you hash passwords.
  bcrypt = require('bcrypt-nodejs');

/**
 * bsoth 02/16/2016 Tuesday
 *
 * To simplify our complexity and use more time on the UI, I implemented a User
 * Schema which store user info..etc. The videos, followers and following will be
 * dummy data.
 */
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String,
  facebook: String,
  google: String,
  youtube: String,
  profile: {
    name: {
      type: String,
      default: ''
    },
    gender: {
      type: String,
      default: ''
    },
    picture: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      default: ''
    },
    videos: [String],
    followers: {
      type: Number,
      default: 0
    },
    followings: {
      type: Number,
      default: 0
    }
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

/**
 * Password hash middleware.
 * Thanks to https://github.com/sahat/hackathon-starter/blob/master/models/User.js
 */
UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
UserSchema.methods.comparePassword = function(canidatePassword, cb) {
  bcrypt.compare(canidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
}

/**
 * Helper method for getting user's gravatar
 */
UserSchema.methods.gravatar = function(size) {
  if (!size) {
    size = 200;
  }
  if (!this.email) {
    return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
  }
  var md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
}

module.exports = mongoose.model('User', UserSchema);