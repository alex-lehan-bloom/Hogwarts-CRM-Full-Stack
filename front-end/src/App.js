import React, { useEffect } from "react";
import SideMenu from "./components/SideMenu";
import Banner from "./components/Banner";
import Students from "./components/Students";
import StudentForm from "./components/AddStudentForm";
import { enrollStudent } from "./lib/api";
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
              <Banner header="Students" />
              <Students />
            </Route>
            <Route exact path="/enroll-student">
              <Banner header="Enroll student" />
              <StudentForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
