const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  }
});

UserSchema.set("timestamps", true);

const User = (module.exports = mongoose.model("User", UserSchema));

// USERS ACTIONS ON EXPORT
module.exports.createUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
  var query = { username };
  User.findOne(query, callback);
};
module.exports.getUserByEmail = (email, callback) => {
  var query = { email };
  User.findOne(query, callback);
};

module.exports.removeUser = (id, callback) => {
  var query = { _id: id };
  User.findOneAndDelete(query, callback);
};

module.exports.getAllUsers = callback => {
  User.find({}, callback);
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};
