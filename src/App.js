import React from "react";
import "./css/design.css";
import Home from "./Component/Home";
import Pages from "./Component/Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/careerDescription/:id" component={Pages} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
