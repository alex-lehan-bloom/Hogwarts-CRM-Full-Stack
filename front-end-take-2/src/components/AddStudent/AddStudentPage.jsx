import React from "react";
import Header from "../Header";
import AddStudentForm from "./AddStudentForm";

function AddStudentPage() {
  return (
    <div className="main">
      <Header header="Enroll Student" />
      <AddStudentForm />
    </div>
  );
}

export default AddStudentPage;
