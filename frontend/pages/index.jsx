import { withRedux } from "../lib/redux";
import Layout from "../components/layouts";
import Authentication from "../components/authentication";

const IndexPage = props => (
  <Layout>
    <Authentication />
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
