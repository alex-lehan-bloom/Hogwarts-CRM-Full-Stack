import axios from "axios";

const baseURL = "http://localhost:5000";

export const register = (newUser) => {
  return axios
    .post(`${baseURL}/users/register`, {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      console.log("Registered");
    });
};

export const login = (user) => {
  return axios
    .post(`${baseURL}/users/login`, {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data.token);
      console.log(response);
      return response.data.token;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
};
