import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import InsideCity from "./components/InsideCity/InsideCity";
import InsideCityDetail from "./components/InsideCity/InsideCityDetail";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/insidecity">
            <InsideCity />
          </Route>
          <Route exact path="/insidecitydetail">
            <InsideCityDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
