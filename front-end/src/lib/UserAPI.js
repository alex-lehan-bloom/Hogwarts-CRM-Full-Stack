import axios from "axios";

const baseURL = "http://localhost:5000";

export const register = (newUser) => {
  console.log(newUser);
  return axios
    .post(`${baseURL}/users/register`, {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      console.log(response);
      return response;
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
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
