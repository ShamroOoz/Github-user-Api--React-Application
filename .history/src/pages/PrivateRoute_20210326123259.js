import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <Route
      {...rest}
      render={() => {
        if (isUser) return isUser ? children : <Redirect to="/login" />;
        if (isUser) return isUser ? children : <Redirect to="/" />;
      }}
    ></Route>
  );
};
export default PrivateRoute;
