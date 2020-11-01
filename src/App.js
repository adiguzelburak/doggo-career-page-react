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
        <Navbar />
        {/* <Body /> */}
        <Pages />
      </div>
    </Router>
  );
}

export default App;
