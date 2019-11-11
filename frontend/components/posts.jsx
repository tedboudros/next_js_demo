import { Typography, Box, Card, CardContent, CardHeader, Avatar, TextField, Grid, Container, FormControl, InputLabel, Input } from "@material-ui/core";
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
        <Box width={0.5} alignContent="center">
          <Card>
            <Container>
              <CardHeader avatar={<Avatar alt="Remy Sharp" style={{ background: "red" }} />} title="Username" subheader={Date()} />
              <CardContent>
                <Box item={true}>
                  <TextField width={1} fullWidth id="standard-textarea" label="What are you thinking..." placeholder="Describe the world what you think" multiline variant="standard" />
                </Box>
              </CardContent>
            </Container>
          </Card>
        </Box>
      </div>
    );
  }
}
export default connect(state => state, actions)(Posts);
