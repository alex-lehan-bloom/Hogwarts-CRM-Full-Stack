import axios from "axios";

const baseURL = "http://localhost:5000";

export async function getStudents() {
  let response = await axios.get(`${baseURL}/students`);
  let data = response.data;
  return data;
}

export async function enrollStudent(
  first_name,
  last_name,
  house,
  existing_skills,
  desired_skills,
  courses
) {
  try {
    let response = await axios.post(`${baseURL}/student`, {
      first_name,
      last_name,
      house,
      existing_skills,
      desired_skills,
      courses,
    });
    return response;
  } catch (error) {
    return error;
  }
}
