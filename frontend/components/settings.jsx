import React, { Component } from "react";
import Login from "../components/auth/login";
import Register from "../components/auth/login";
import { Container, Grid, Box } from "@material-ui/core";

class Settings extends Component {
  render() {
    return (
      <div>
        <Box align="center">
          <Grid container spacing={5}>
            <Grid item={true} xs={6}>
              <Login />
            </Grid>
            <Grid item={true} xs={6}>
              <Register />
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Settings;
