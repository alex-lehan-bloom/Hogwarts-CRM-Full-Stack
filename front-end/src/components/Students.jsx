import React, { useEffect, useState } from "react";
import StudentsList from "./StudentsList";
import Banner from "./Banner";
import { getStudents } from "../lib/api";

function Home() {
  const [students, setStudents] = useState();
  const [displayStudents, setDisplayStudents] = useState(false);

  useEffect(async () => {
    let students = await getStudents();
    setStudents(students);
    setDisplayStudents(true);
  }, []);

  return (
    <>
      <Banner header="Students" />
      {displayStudents && <StudentsList students={students} />}
    </>
  );
}

export default Home;
