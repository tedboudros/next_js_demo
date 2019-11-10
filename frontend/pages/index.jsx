import { withRedux } from "../lib/redux";
import Layout from "../components/layouts";
import Authentication from "../components/authentication";
import { Box, Container } from "@material-ui/core";

const IndexPage = props => (
  <Layout>
    <Container>
      <Box mt="25%">
        <Authentication />
      </Box>
    </Container>
  </Layout>
);

export default IndexPage;
