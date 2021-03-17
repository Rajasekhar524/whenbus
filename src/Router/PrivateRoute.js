import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../Utils/Requests/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      <Component {...props} />

      // server code for authenticated users
    }
  />
);

export default PrivateRoute;