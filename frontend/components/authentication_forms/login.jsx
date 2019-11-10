import { Input, Grid, TextField, Box, Card, CardContent, CardHeader, Typography, Button, Container, FormControl } from "@material-ui/core";
import React, { Component } from "react";
import axios from "axios";

class Login_Form extends Component {
  render() {
    return (
      <div>
        <Box width={1}>
          <Card>
            <Container>
              {/*Card Header*/}
              <Box mt={5}>
                <CardHeader align="center" title="Come back we are waiting for youd..." subheader="Be creative" />
              </Box>

              {/*Card Content*/}
              <CardContent>
                <form>
                  <Box>
                    <Box p={1}>
                      <FormControl fullWidth>
                        <TextField label="Username" variant="outlined" color="primary" name="username" id="username" onChange={this.handleChange} />
                      </FormControl>
                    </Box>
                    <Box p={1}>
                      <FormControl fullWidth>
                        <TextField label="Password" variant="outlined" color="primary" name="password" id="password" onChange={this.handleChange} />
                      </FormControl>
                    </Box>
                  </Box>

                  <Box m={1} mt={10} align="right">
                    <Button variant="contained" type="submit" color="primary">
                      Login
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

export default Login_Form;
