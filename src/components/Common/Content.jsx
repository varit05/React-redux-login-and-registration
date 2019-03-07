import React from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const Content = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </main>
);

export default Content;
