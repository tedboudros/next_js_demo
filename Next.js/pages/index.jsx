import { withRedux } from "../lib/redux";
import Layout from "../components/layouts";

const IndexPage = props => (
  <Layout>
    <div>hellodddd</div>;
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
