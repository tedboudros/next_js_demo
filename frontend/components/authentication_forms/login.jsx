import { TextField, Box, Card, CardContent, CardHeader, Button, Container, FormControl } from "@material-ui/core";

const Login_Form = () => (
  <div>
    <Box width={1}>
      <Card>
        <Container>
          {/*Card Header*/}
          <Box mt={5}>
            <CardHeader align="center" title="Come back we are waiting for you..." subheader="Be creative" />
          </Box>

          {/*Card Content*/}
          <CardContent>
            <Box>
              <Box p={1}>
                <FormControl fullWidth>
                  <TextField label="Username" variant="outlined" color="primary" name="username" />
                </FormControl>
              </Box>
              <Box p={1}>
                <FormControl fullWidth>
                  <TextField label="Password" variant="outlined" color="primary" name="password" />
                </FormControl>
              </Box>
            </Box>

            <Box m={1} mt={10} align="right">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Box>
          </CardContent>
        </Container>
      </Card>
    </Box>
  </div>
);

export default Login_Form;
