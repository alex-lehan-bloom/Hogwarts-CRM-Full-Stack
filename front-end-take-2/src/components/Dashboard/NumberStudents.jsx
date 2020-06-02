import React, { useState, useEffect } from "react";

function NumberStudents(props) {
  const [numStudents, setNumStudents] = useState(0);

  useEffect(() => {
    setNumStudents(props.students.length);
  }, [props.students]);

  return (
    <>
      <h2 className="dashboard-header">
        Number of Students Enrolled at Hogwarts
      </h2>
      <h2>{numStudents}</h2>
    </>
  );
}

export default NumberStudents;
