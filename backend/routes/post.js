var express = require("express");
var router = express.Router();
var Post = require("../models/post.model");
var User = require("../models/user.model");
var jwt = require("jsonwebtoken");
var jwtSecret = require("../config").jwtSecret;

// GET POST (JWT VERIFICATION)
router.post("/get/", (req, res) => {
  jwt.verify(req.body.token, jwtSecret, (err, decoded) => {
    if (err) throw err;
    User.getUserById(decoded.id, (err, user) => {
      if (err) throw err;
      if (user) {
        Post.getPostById(req.body.id, (err, post) => {
          if (err) {
            console.error(err);
            res
              .status(400)
              .json({ message: "Error while fetching post data." });
          } else {
            if (post) {
              res.json(post);
            } else {
              res.status(400).json({ message: "Post does not exist." });
            }
          }
        });
      } else {
        res.status(400).json({ message: "Invalid token." });
      }
    });
  });
});

// GET POSTS (JWT VERIFICATION)
router.post("/all/", (req, res) => {
  jwt.verify(req.body.token, jwtSecret, (err, decoded) => {
    if (err) throw err;
    User.getUserById(decoded.id, (err, user) => {
      if (err) throw err;
      if (user) {
        Post.getAllPosts((err, posts) => {
          if (err) {
            console.error(err);
            res
              .status(400)
              .json({ message: "Error while fetching post data." });
          } else {
            if (posts) {
              res.json({ posts });
            } else {
              res.status(400).json({ message: "Post does not exist." });
            }
          }
        });
      } else {
        res.status(401).json({ message: "Invalid token." });
      }
    });
  });
});

// ADD POST (JWT VERIFICATION)
router.post("/add/", (req, res) => {
  jwt.verify(req.body.token, jwtSecret, (err, decoded) => {
    if (err) throw err;
    User.getUserById(decoded.id, (err, user) => {
      if (err) throw err;
      if (user) {
        let newPost = Post({
          user: user.id,
          username: user.username,
          content: req.body.content,
          likes: 0
        });
        Post.createPost(newPost, err => {
          if (err) {
            console.error(err);
            res.status(400).json({ message: "Error while creating post." });
          } else {
            res.status(200).json({});
          }
        });
      } else {
        res.status(400).json({ message: "Invalid token." });
      }
    });
  });
});

//DELETE POST (JWT VERIFICATION)
router.post("/delete/", (req, res) => {
  jwt.verify(req.body.token, jwtSecret, (err, decoded) => {
    if (err) throw err;
    User.getUserById(decoded.id, (err, user) => {
      if (err) throw err;
      if (user) {
        Post.removePost(req.body.id, err => {
          if (err) {
            console.log(err);
            res.status(400).json({ message: "There was an error." });
          } else {
            res.status(200).json({});
          }
        });
      } else {
        res.status(401).json({ message: "Invalid token." });
      }
    });
  });
});

// UPDATE POST (JWT VERIFICATION)
router.post("/change/", (req, res) => {
  jwt.verify(req.body.token, jwtSecret, (err, decoded) => {
    if (err) throw err;
    User.getUserById(decoded.id, (err, user) => {
      if (err) throw err;
      if (user) {
        Post.getPostById(req.body.id, (err, post) => {
          if (err) {
            console.error(err);
            res
              .status(400)
              .json({ message: "Error while fetching post data." });
          } else {
            if (post.user === user.id) {
              if (req.body.content !== post.content)
                post.content = req.body.content;
              post
                .save()
                .then(cb => {
                  res.status(200).json({});
                })
                .catch(err => {
                  if (err) throw err;
                  res
                    .status(400)
                    .json({ message: "Error when saving post changes." });
                });
            } else {
              res.status(401).json({ message: "Not authorized" });
            }
          }
        });
      } else {
        res.status(400).json({ message: "Invalid token." });
      }
    });
  });
});

// POST LIKES (JWT VERIFICATION)
router.post("/like/", (req, res) => {
  jwt.verify(req.body.token, jwtSecret, (err, decoded) => {
    if (err) throw err;
    User.getUserById(decoded.id, (err, user) => {
      if (err) throw err;
      if (user) {
        Post.getPostById(req.body.id, (err, post) => {
          if (err) {
            console.error(err);
            res
              .status(400)
              .json({ message: "Error while fetching post data." });
          } else {
            post.likes++;
            post
              .save()
              .then(cb => {
                res.status(200).json({});
              })
              .catch(err => {
                if (err) throw err;
                res
                  .status(400)
                  .json({ message: "Error when saving post changes." });
              });
          }
        });
      } else {
        res.status(400).json({ message: "Invalid token." });
      }
    });
  });
});

module.exports = router;
