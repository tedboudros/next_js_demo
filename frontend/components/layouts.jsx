import Head from "next/head";
import Navbar from "./navbar";
import LayoutDrafts from "./LayoutDrafts";
import { connect } from "react-redux";
import actions from "../redux/actions";
import { Box } from "@material-ui/core";

const Layout = props => (
  <div>
    <Head>
      <title>Forum.io</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <LayoutDrafts />
    <Box mt="64px" style={{ marginLeft: "240px" }}>
      {props.children}
    </Box>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.authentication.token
});

export default connect(mapStateToProps, actions)(Layout);
