import React, { useEffect, useState } from "react";
import StudentsList from "./StudentsList";
import { getStudents } from "../lib/api";

function Home() {
  const [students, setStudents] = useState();
  const [displayStudents, setDisplayStudents] = useState(false);

  useEffect(async () => {
    let students = await getStudents();
    setStudents(students);
    setDisplayStudents(true);
  }, []);

  return <>{displayStudents && <StudentsList students={students} />}</>;
}

export default Home;
