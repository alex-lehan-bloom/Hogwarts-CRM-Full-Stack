import axios from "axios";

const baseURL = "http://localhost:5000";

export async function getStudents() {
  let response = await axios.get(`${baseURL}/students`);
  let data = response.data;
  return data;
}
