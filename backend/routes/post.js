var express = require("express");
var router = express.Router();
var Post = require("../models/post.model");

router.get("/:id", (req, res) => {
  Post.getPostById(req.params.id, (err, post) => {
    if (err) {
      console.error(err);
      res.status(400).send("Error while fetching post data.");
    } else {
      if (post) {
        res.json(post);
      } else {
        res.status(400).send("Post does not exist.");
      }
    }
  });
});

router.post("/add/", (req, res) => {
  let newPost = Post(req.body);
  Post.createPost(newPost, err => {
    if (err) {
      console.error(err);
      res.status(400).send("Error while creating post.");
    } else {
      res.status(200).send("");
    }
  });
});

router.post("/update/:id", (req, res) => {
  Post.getPostById(req.params.id, (err, user) => {
    if (err) {
      console.error(err);
      res.status(400).send("Error while fetching post data.");
    } else {
      /* If fields are different, it changes them accordingly then saves */
      if (req.body.title !== post.title) post.title = req.body.title;

      if (req.body.description !== post.description)
        post.description = req.body.description;

      if (req.body.likes !== post.likes) post.likes = req.body.likes;

      /* After all the changes it saves them */
      post
        .save()
        .then(cb => {
          res.status(200).send("");
        })
        .catch(err => {
          if (err) throw err;
          res.status(400).send("Error when saving post changes.");
        });
    }
  });
});

module.exports = router;
