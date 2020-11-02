import React from "react";
import "./css/design.css";
import Navbar from "./Component/Navbar";
import Body from "./Component/Body";
import Pages from "./Component/Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/" exact component={Body}/>
          <Route path="/careerDescription" component={Pages}/>
          {/* <Body /> */}
          {/* <Pages /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
