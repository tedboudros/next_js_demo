import {
  Grid,
  TextField,
  Box,
  CardHeader,
  Button,
  Container,
  FormControl,
  Card,
  CardContent,
  Snackbar,
  Icon,
  IconButton,
  Link
} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import axios from "axios";
import React, { Component } from "react";

export default class Register_Form extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);

    this.state = {
      username: "",
      password: "",
      email: "",
      error: "",
      showError: false
    };
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleErrorClose() {
    this.setState({ showError: false });
  }
  onSubmit(e) {
    axios
      .post("http://localhost:4000/api/user/add", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        window.location = "/";
      })
      .catch(error => {
        this.setState({ error: error.response.data.message, showError: true });
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
                {/*USERNAME & PASSWORD FIELDS*/}
                <Box>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box p={1}>
                        <FormControl fullWidth>
                          <TextField
                            label="Type your username"
                            variant="outlined"
                            color="secondary"
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
                            color="secondary"
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
                      color="secondary"
                      name="email"
                      onChange={this.onChange}
                    />
                  </FormControl>
                </Box>

                <Box m={1} mt={10} align="right">
                  <Button
                    variant="contained"
                    onClick={this.onSubmit}
                    color="primary"
                  >
                    Register
                  </Button>
                </Box>
              </CardContent>
            </Container>
          </Card>
        </Box>
        <style jsx>{`
          .error {
            background: #ff0000;
          }
        `}</style>
        <Snackbar
          className="error"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={this.state.showError}
          onClose={this.handleErrorClose}
          autoHideDuration={5000}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar">
              <Icon className={ErrorIcon} />
              {this.state.error}
            </span>
          }
        />
      </div>
    );
  }
}
