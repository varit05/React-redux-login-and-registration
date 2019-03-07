import { BrowsweRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import Login from "../Auth/Login";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
