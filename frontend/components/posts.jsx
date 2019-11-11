import { Typography, Box, Card, CardContent, CardHeader } from "@material-ui/core";
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
    const { isAuthenticated } = this.props;
    return (
      <div>
        <Box>
          <h1>Hello World</h1>
        </Box>
      </div>
    );
  }
}
export default connect(state => state, actions)(Posts);
