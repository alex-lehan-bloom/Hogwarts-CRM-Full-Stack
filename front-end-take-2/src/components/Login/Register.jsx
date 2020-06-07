import React, { Component } from "react";
import { register, login } from "./UserFunctions.js";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../css/RegisterAndLogin.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      successfulRegister: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };
    register(newUser).then((response) => {
      if (response.statusText === "OK") {
        this.loginUser();
      }
    });
  }

  loginUser() {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    login(user).then((response) => {
      if (response.statusText === "OK") {
        this.props.login();
        this.setState({ successfulRegister: true });
      }
    });
  }

  render() {
    return (
      <>
        <div className="register-container">
          <h1>Register</h1>
          <form className="register-form" noValidate onSubmit={this.onSubmit}>
            <TextField
              id="outlined-basic"
              label="First Name"
              name="first_name"
              variant="outlined"
              className="register-form-text-field"
            />
            <TextField
              id="outlined-basic"
              name="last_name"
              label="Last Name"
              variant="outlined"
              className="register-form-text-field"
              onChange={this.onChange}
            />
            <TextField
              id="outlined-basic"
              name="email"
              label="Email Address"
              variant="outlined"
              className="register-form-text-field"
              onChange={this.onChange}
            />
            <TextField
              id="outlined-basic"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              className="register-form-text-field"
              onChange={this.onChange}
            />
            <Button
              variant="contained"
              color="primary"
              className="register-button"
              type="submit"
              onChange={this.onChange}
            >
              Register
            </Button>
          </form>
        </div>
        {this.state.successfulRegister && <Redirect to="/" />}
      </>
    );
  }
}

export default Register;
