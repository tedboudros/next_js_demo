import Layout from "../components/layouts";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import Posts from "../components/posts";

const Index = props => (
  <Layout>
    <Posts />
  </Layout>
);

Index.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(Index);
