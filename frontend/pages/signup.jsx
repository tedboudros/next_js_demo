import Layout from "../components/layouts";
import { Container, Box } from "@material-ui/core";
import Register_Form from "../components/auth/register";

const SigninPage = props => (
  <Layout>
    <Container>
      <Box mt="25%">
        <Register_Form />
      </Box>
    </Container>
  </Layout>
);

export default SigninPage;
