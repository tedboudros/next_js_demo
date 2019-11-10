@@ -1,4 +1,14 @@
import { Grid, TextField, Box, Card, CardContent, CardHeader, Button, Container, FormControl } from "@material-ui/core";
import {
  Grid,
  TextField,
  Box,
  Card,
  CardContent,
  CardHeader,
  Button,
  Container,
  FormControl
} from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";

@ -7,7 +17,7 @@ export default class Register_Form extends Component {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      username: "",
@ -23,7 +33,13 @@ export default class Register_Form extends Component {
  }

  onSubmit(e) {
    axios.post("http://localhost:4000/api/user/add", [this.state.username, this.state.email, this.state.password]).then((window.location = "/"));
    axios
      .post("http://localhost:4000/api/user/add", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then((window.location = "/"));
  }
  render() {
    return (
@ -34,7 +50,11 @@ export default class Register_Form extends Component {
            <Container>
              {/*Card Header*/}
              <Box mt={5}>
                <CardHeader align="center" title="Join our network now" subheader="Let's Start" />
                <CardHeader
                  align="center"
                  title="Join our network now"
                  subheader="Let's Start"
                />
              </Box>

              {/*Card Content*/}
@ -46,14 +66,27 @@ export default class Register_Form extends Component {
                      <Grid item xs={6}>
                        <Box p={1}>
                          <FormControl fullWidth>
                            <TextField label="Type your username" variant="outlined" color="primary" name="username" onChange={this.onChange} />
                            <TextField
                              label="Type your username"
                              variant="outlined"
                              color="primary"
                              name="username"
                              onChange={this.onChange}
                            />
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item={true} xs={6}>
                        <Box p={1}>
                          <FormControl fullWidth>
                            <TextField label="Type your password" variant="outlined" color="primary" type="password" name="password" onChange={this.onChange} />
                            <TextField
                              label="Type your password"
                              variant="outlined"
                              color="primary"
                              type="password"
                              name="password"
                              onChange={this.onChange}
                            />
                          </FormControl>
                        </Box>
                      </Grid>
@ -62,7 +95,13 @@ export default class Register_Form extends Component {
                  {/*EMAIL FIELD*/}
                  <Box p={1}>
                    <FormControl fullWidth>
                      <TextField label="Type your email address" variant="outlined" color="primary" name="email" onChange={this.onChange} />
                      <TextField
                        label="Type your email address"
                        variant="outlined"
                        color="primary"
                        name="email"
                        onChange={this.onChange}
                      />
                    </FormControl>
                  </Box>
