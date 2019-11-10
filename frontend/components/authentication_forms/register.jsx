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

export default class Register_Form extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    axios
      .post("http://localhost:4000/api/user/add", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then(() => {
        window.location = "/";
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  }
  render() {
    return (
      <div>
        {/*Register FORM*/}
        <Box width={1}>
          <Card>
            <Container>
              {/*Card Header*/}
              <Box mt={5}>
                <CardHeader
                  align="center"
                  title="Join our network now"
                  subheader="Let's Start"
                />
              </Box>

              {/*Card Content*/}
              <CardContent>
                <form onSubmit={this.onSubmit}>
                  {/*USERNAME & PASSWORD FIELDS*/}
                  <Box>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box p={1}>
                          <FormControl fullWidth>
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
                    </Grid>
                  </Box>
                  {/*EMAIL FIELD*/}
                  <Box p={1}>
                    <FormControl fullWidth>
                      <TextField
                        label="Type your email address"
                        variant="outlined"
                        color="primary"
                        name="email"
                        onChange={this.onChange}
                      />
                    </FormControl>
                  </Box>

                  <Box m={1} mt={10} align="right">
                    <Button variant="contained" type="submit" color="primary">
                      Register
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Container>
          </Card>
        </Box>
      </div>
    );
  }
}
