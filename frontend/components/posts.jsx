import { Typography, Container, Box } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import actions from "../redux/actions";

import CreatePost from "./posts/createPost";

class Posts extends Component {
  constructor(props) {
    super(props);
  }
  static getInitialProps(ctx) {
    initialize(ctx);
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        <Box>
          <CreatePost />
        </Box>
      </div>
    );
  }
}
export default connect(state => state, actions)(Posts);
