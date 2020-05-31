import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact to="/students">
            <NavBar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
