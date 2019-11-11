import React, { Component } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import { Box } from "@material-ui/core";

class LayoutDraft extends Component {
  constructor(props) {
    super(props);
  }
  static getInitialProps(ctx) {
    initialize(ctx);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        {this.props.isAuthenticated ? (
          <Box mt="64px" style={{ marginLeft: "240px" }}>
            {this.props.children}
          </Box>
        ) : (
          <Box mt="64px">{this.props.children}</Box>
        )}
      </div>
    );
  }
}

LayoutDraft.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(LayoutDraft);
