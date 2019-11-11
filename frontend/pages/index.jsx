import Layout from "../components/layouts";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import Posts from "../components/posts";
import React, { Component } from "react";
import { Container, Box } from "@material-ui/core";

class Index extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Posts />
        </Container>
      </Layout>
    );
  }
}

Index.getInitialProps = function(ctx) {
  initialize(ctx);
};
export default connect(state => state)(Index);
