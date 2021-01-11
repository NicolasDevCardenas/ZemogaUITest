import "./sass/App.scss";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import PastTrials from "./components/PastTrials";
import How from "./components/How";
import Auth from "./components/Auth";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/pastrials" component={PastTrials} />
      <Route exact path="/how" component={How} />
      <Route exact path="/Auth" component={Auth} />
    </Router>
  );
}

export default App;
