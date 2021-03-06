import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="">
        <Dashboard />
      </Route>
      <Route path="">
        <Login />
      </Route>
      <Route path="">
        <Error />
      </Route>
    </Router>
  );
}

export default App;
