import { Input, Grid, TextField, Box, Card, CardActions, CardContent, CardHeader, Typography, Button, Container, FormControl, InputLabel, InputAdornment } from "@material-ui/core";
import React, { Component } from "react";
import axios from "axios";

class Register_Form extends Component {
  constructor(props) {
    super(props);
    /*Axios Mount*/

    this.state = {
      username: "",
      password: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  onSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:4000/api/user/add/", { username: this.state.username, email: this.state.email, password: this.state.password }).then(function(res) {
      window.location = "/";
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
                <CardHeader align="center" title="Join our network now" subheader="Let's Start" />
              </Box>

              {/*Card Content*/}
              <CardContent>
                <form action="" onSubmit={this.onSubmit}>
                  {/*USERNAME & PASSWORD FIELDS*/}
                  <Box>
                    <Grid container>
                      <Grid item={true} xs={6}>
                        <Box p={1}>
                          <FormControl fullWidth>
                            <TextField label="Type your username" variant="outlined" color="primary" name="username" id="username" onChange={this.handleChange} />
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item={true} xs={6}>
                        <Box p={1}>
                          <FormControl fullWidth>
                            <TextField label="Type your password" variant="outlined" color="primary" name="password" id="username" onChange={this.handleChange} />
                          </FormControl>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/*EMAIL FIELD*/}
                  <Box p={1}>
                    <FormControl fullWidth>
                      <TextField label="Type your email address" variant="outlined" color="primary" name="email" onChange={this.handleChange} />
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

export default Register_Form;
