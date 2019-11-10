import {
  TextField,
  Box,
  Card,
  CardContent,
  CardHeader,
  Button,
  Container,
  FormControl,
  Link
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import initialize from "../../utils/initialize";
import actions from "../../redux/actions";

class Login_Form extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
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
    this.props.authenticate(
      {
        email: this.state.email,
        password: this.state.password
      },
      "login"
    );
  }
  render() {
    return (
      <div>
        <Box width={1}>
          <Card>
            <Container>
              {/*Card Header*/}
              <Box mt={5}>
                <CardHeader
                  align="center"
                  title="Come back we are waiting for you..."
                  subheader="Be creative"
                />
              </Box>

              {/*Card Content*/}
              <CardContent>
                <Box>
                  <Box p={1}>
                    <FormControl fullWidth>
                      <TextField
                        label="Email"
                        variant="outlined"
                        color="secondary"
                        name="email"
                        onChange={this.onChange}
                      />
                    </FormControl>
                  </Box>
                  <Box p={1}>
                    <FormControl fullWidth>
                      <TextField
                        label="Password"
                        variant="outlined"
                        color="secondary"
                        name="password"
                        type="password"
                        onChange={this.onChange}
                      />
                    </FormControl>
                  </Box>
                </Box>

                <Box m={1} mt={10} align="right">
                  <Button
                    variant="contained"
                    onClick={this.onSubmit}
                    color="primary"
                  >
                    Login
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
export default connect(state => state, actions)(Login_Form);
