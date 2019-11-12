const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const PostSchema = mongoose.Schema({
  user: {
    type: String
  },
  likes: {
    type: Number
  },
  username: {
    type: String
  },
  content: {
    type: String
  }
});

PostSchema.set("timestamps", true);

const Post = (module.exports = mongoose.model("Post", PostSchema));

// POST EXPORT ACTIONS
module.exports.createPost = (newPost, callback) => {
  newPost.save(callback);
};

module.exports.getPostById = (id, callback) => {
  Post.findById(id, callback);
};

module.exports.getPostByTitle = (title, callback) => {
  var query = { title };
  Post.findOne(query, callback);
};
module.exports.getPostsByUser = (user, callback) => {
  var query = { user };
  Post.find(query, callback);
};

module.exports.removePost = (id, callback) => {
  var query = { _id: id };
  Post.findOneAndDelete(query, callback);
};

module.exports.getAllPosts = callback => {
  Post.find({}, callback);
};
