import React, { Component } from "react";
import Settings from "../components/settings";
import Layout from "../components/layouts";
import { Container, Box } from "@material-ui/core";

const SettingsPage = props => (
  <Layout>
    <Box pt={5}>
      <Container>
        <Settings />
      </Container>
    </Box>
  </Layout>
);

export default SettingsPage;
