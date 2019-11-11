import { Typography, Container, Box } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import actions from "../redux/actions";
import Post from "./posts/post";
import CreatePost from "./posts/createPost";

class Posts extends Component {
  constructor(props) {
    super(props);
  }
  static getInitialProps(ctx) {
    initialize(ctx);
  }
  componentDidMount() {
    if (!!this.props.auth.token)
      this.props.allPosts({ token: this.props.auth.token }, "all");
  }
  render() {
    return (
      <div>
        {!!this.props.auth.token ? (
          <Box align="center" mt={10} style={{ padding: "10px" }}>
            <CreatePost />

            {!!this.props.post.posts
              ? this.props.post.posts.map(post => (
                  <div key={post.id}>
                    <Box mt={5}>
                      <Post post_content={post.content} />
                    </Box>
                  </div>
                ))
              : ""}
          </Box>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default connect(state => state, actions)(Posts);
