import axios from "axios";

const baseURL = "http://localhost:5000";

export async function getStudents() {
  let response = await axios.get(`${baseURL}/students`);
  let data = response.data;
  return data;
}

export async function getStudentById(studentId) {
  try {
    let response = await axios.get(`${baseURL}/student/${studentId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
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
    return error.response;
  }
}

export async function deleteStudent(student_id, delete_password) {
  try {
    let response = await axios.delete(
      `${baseURL}/student/${student_id}?delete_key=${delete_password}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
}
