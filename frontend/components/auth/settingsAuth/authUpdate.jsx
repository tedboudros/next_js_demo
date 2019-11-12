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
import initialize from "../../../utils/initialize";
import actions from "../../../redux/actions";

class AuthUpdate extends Component {
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
    this.props.changeUserInfo(
      {
        token: this.props.auth.token,
        email: this.state.email,
        password: this.state.password
      },
      "update"
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
                  title="Update your account credentials"
                />
              </Box>

              {/*Card Content*/}
              <CardContent>
                <Box>
                  <Box p={1}>
                    <FormControl fullWidth>
                      <TextField
                        label="New email..."
                        variant="filled"
                        color="secondary"
                        name="email"
                        onChange={this.onChange}
                      />
                    </FormControl>
                  </Box>
                  <Box p={1}>
                    <FormControl fullWidth>
                      <TextField
                        label="New password..."
                        variant="filled"
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
                    Update Credentials
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
export default connect(state => state, actions)(AuthUpdate);
