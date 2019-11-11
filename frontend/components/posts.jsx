import { Typography, Box } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import actions from "../redux/actions";

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
        {!this.props.isAuthenticated ? (
          <Box>
            
            <Typography variant="h6">Forum.io</Typography>
          </Box>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default connect(state => state, actions)(Posts);
