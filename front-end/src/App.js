import React from "react";
import SideMenu from "./components/SideMenu";
import Banner from "./components/Banner";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <SideMenu />

        <Switch>
          <div className="page-content">
            <Route exact path="/">
              <Banner />
              <Home />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
