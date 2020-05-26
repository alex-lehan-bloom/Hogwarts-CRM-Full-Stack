import React, { useEffect, useState } from "react";
import ListOfStudents from "./ListOfStudents";
import SideMenu from "./SideMenu";
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

  return (
    <>
      <SideMenu />
      <div className="page-content">
        {displayStudents && <ListOfStudents students={students} />}
      </div>
    </>
  );
}

export default Home;
