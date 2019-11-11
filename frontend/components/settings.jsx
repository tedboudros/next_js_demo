import React, { Component } from "react";
import AuthUpdate from "./auth/settingsAuth/authUpdate";
import { Container, Grid, Box } from "@material-ui/core";

class Settings extends Component {
  render() {
    return (
      <div>
        <Box align="center">
          <Grid>
            <Grid item={true} xs={6}>
              <AuthUpdate />
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Settings;
