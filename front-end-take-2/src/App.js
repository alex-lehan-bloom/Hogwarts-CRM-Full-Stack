import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import StudentsPage from "./components/Students/StudentsPage";
import AddStudentPage from "./components/AddStudent/AddStudentPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="page-content">
          <Switch>
            <Route exact path="/students">
              <StudentsPage />
            </Route>
            <Route exact path="/enroll-student">
              <AddStudentPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
