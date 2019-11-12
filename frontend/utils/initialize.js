import Router from "next/router";
import actions from "../redux/actions";
import { getCookie } from "../utils/cookie";

export default function(ctx) {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      const auth = {
        token: getCookie("token", ctx.req),
        user: {
          _id: getCookie("user_id", ctx.req),
          username: getCookie("user_name", ctx.req)
        }
      };
      ctx.store.dispatch(actions.reauthenticate(auth));
    }
  } else {
    const token = ctx.store.getState().auth.token;

    if (token && (ctx.pathname === "/signin" || ctx.pathname === "/signup")) {
      Router.push("/");
    }
  }
}
