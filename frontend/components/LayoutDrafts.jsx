import React, { Component } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { connect } from "react-redux";

class LayoutDraft extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        <Navbar />
        {!this.props.isAuthenticated && <Sidebar />}
      </div>
    );
  }
}

LayoutDraft.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(LayoutDraft);
