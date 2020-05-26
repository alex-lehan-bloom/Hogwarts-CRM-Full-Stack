import React, { useEffect, useState } from "react";
import ListOfStudents from "./ListOfStudents";
import { getStudents } from "../lib/api";

function Home(props) {
  const [students, setStudents] = useState();
  const [displayStudents, setDisplayStudents] = useState(false);

  //Nav bar
  // List of users
  // Add user button

  useEffect(async () => {
    let students = await getStudents();
    setStudents(students);
    setDisplayStudents(true);
    console.log(students);
  }, []);

  return <>{displayStudents && <ListOfStudents students={students} />}</>;
}

export default Home;
