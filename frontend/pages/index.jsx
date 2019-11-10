import { withRedux } from "../lib/redux";
import Layout from "../components/layouts";
import Authentication from "../components/authentication";
import { Box, Grid, Container } from "@material-ui/core";

const IndexPage = props => (
  <Layout>
    <Container>
      <Box mt="25%">
        <Authentication />
      </Box>
    </Container>
  </Layout>
);

IndexPage.getInitialProps = ({ reduxStore }) => {
  /*
  const { dispatch } = reduxStore
  dispatch({
    type: 'TICK',
    light: typeof window === 'object',
    lastUpdate: Date.now()
  })
*/
  return {};
};

export default withRedux(IndexPage);
