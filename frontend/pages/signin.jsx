import Layout from "../components/layouts";
import { Container, Box } from "@material-ui/core";
import Login_Form from "../components/auth/login";

const SigninPage = props => (
  <Layout>
    <Container>
      <Box mt="25%">
        <Login_Form />
      </Box>
    </Container>
  </Layout>
);

export default SigninPage;
