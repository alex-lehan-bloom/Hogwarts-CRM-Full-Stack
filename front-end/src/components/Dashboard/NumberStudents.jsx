import React, { useState, useEffect } from "react";

function NumberStudents(props) {
  const [numStudents, setNumStudents] = useState(0);

  useEffect(() => {
    setNumStudents(props.students.length);
  }, [props.students]);

  return (
    <>
      <h3>{numStudents}</h3>
    </>
  );
}

export default NumberStudents;
