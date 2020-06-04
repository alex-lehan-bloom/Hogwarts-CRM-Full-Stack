import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Header from "../Header";
import jwt_decode from "jwt-decode";
import "../../css/ProfilePage.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      email: decoded.identity.email,
    });
  }

  render() {
    return (
      <>
        <Header header="Profile" />
        <div>
          <div className="profile-info">
            <h2>
              <span className="title">First Name:</span> {this.state.first_name}
            </h2>
            <h2>
              <span className="title">Last Name: </span>
              {this.state.last_name}
            </h2>
            <h2>
              <span className="title">Email Address:</span> {this.state.email}
            </h2>
          </div>
          <Button variant="contained" color="primary" className="logout">
            Logout
          </Button>
        </div>
      </>
    );
  }
}

export default Profile;
