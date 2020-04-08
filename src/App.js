import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
