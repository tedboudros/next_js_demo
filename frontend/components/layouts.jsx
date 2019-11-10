import Head from "next/head";
import Navbar from "./navbar";

const Layout = props => (
  <div>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
