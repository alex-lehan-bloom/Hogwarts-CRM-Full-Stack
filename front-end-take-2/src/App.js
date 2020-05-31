import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import StudentsPage from "./components/Students/StudentsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <div className="page-content">
            <Route exact to="/students">
              <StudentsPage />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
