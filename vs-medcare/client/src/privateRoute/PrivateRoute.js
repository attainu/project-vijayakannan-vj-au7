import React from "react";
import { Route, Redirect } from "react-router-dom";

const CustomerHomeRouter = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("isLogged") === "true";
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  );
};

export default CustomerHomeRouter;
