import React, { Component } from "react";
import Settings from "../components/settings";
import Layout from "../components/layouts";
import { Container, Box } from "@material-ui/core";
import { connect } from "react-redux";
import initialize from "../utils/initialize";

const SettingsPage = props => (
  <Layout>
    <Box pt={5}>
      <Container>
        <Settings />
      </Container>
    </Box>
  </Layout>
);

SettingsPage.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(SettingsPage);
