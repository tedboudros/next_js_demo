import Layout from "../components/layouts";
import { connect } from "react-redux";
import initialize from "../utils/initialize";

const Index = props => <Layout></Layout>;

Index.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(Index);
