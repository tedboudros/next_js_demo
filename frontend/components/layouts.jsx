import Head from "next/head";
import LayoutDrafts from "./LayoutDrafts";
import { connect } from "react-redux";
import actions from "../redux/actions";

const Layout = props => (
  <div>
    <Head>
      <title>Forum.io</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <LayoutDrafts>{props.children}</LayoutDrafts>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.authentication.token
});

export default connect(mapStateToProps, actions)(Layout);
