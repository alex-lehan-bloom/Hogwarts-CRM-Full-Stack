import React, { useEffect } from "react";
import SideMenu from "./components/SideMenu";
import Students from "./components/Students";
import EnrollStudent from "./components/EnrollNewStudent/EnrollStudent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <SideMenu />
        <div className="page-content">
          <Switch>
            <Route exact path="/students">
              <Students />
            </Route>
            <Route exact path="/enroll-student">
              <EnrollStudent />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
