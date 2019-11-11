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

  render() {
    return (
      <div>
        {!!this.props.auth.token ? (
          <Box align="center" mt={10} style={{ padding: "10px" }}>
            <CreatePost />
            <Box mt={5}>
              <Post post_content="Fuck you" j />
            </Box>
          </Box>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default connect(state => state, actions)(Posts);
