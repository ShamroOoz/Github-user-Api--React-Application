import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/login">
            <Login />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
