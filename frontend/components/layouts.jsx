import Head from "next/head";
import Container from "@material-ui/core/Container";

const Layout = props => (
  <div>
    <Head>
      <title>Forum.io</title>
    </Head>
    <Container>{props.children}</Container>
  </div>
);

export default Layout;
