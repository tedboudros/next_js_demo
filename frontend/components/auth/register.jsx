import {
  Grid,
  TextField,
  Box,
  CardHeader,
  Button,
  Container,
  FormControl,
  Card,
  CardContent
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import initialize from "../../utils/initialize";
import actions from "../../redux/actions";

class Register_Form extends Component {
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
  static getInitialProps(ctx) {
    initialize(ctx);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.register(
      {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      },
      "register"
    );
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
                    <Grid item={true} xs={6}>
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
                {/*REGISTER BUTTON*/}
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
      </div>
    );
  }
}
export default connect(state => state, actions)(Register_Form);
