import Layout from "../components/layouts";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import Posts from "../components/posts";
import React, { Component } from "react";
import { Container } from "@material-ui/core";

class Index extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Layout>
        <Container>{!this.props.isAuthenticated && <Posts />}</Container>
        {this.props.isAuthenticated && <h1>Login to see posts</h1>}
      </Layout>
    );
  }
}

Index.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(Index);
