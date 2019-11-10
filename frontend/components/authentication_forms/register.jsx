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

const Register_Form = () => (
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
                        color="primary"
                        name="username"
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
                        name="password"
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
                  name="username"
                />
              </FormControl>
            </Box>

            <Box m={1} mt={10} align="right">
              <Button variant="contained" color="primary">
                Register
              </Button>
            </Box>
          </CardContent>
        </Container>
      </Card>
    </Box>
  </div>
);

export default Register_Form;
