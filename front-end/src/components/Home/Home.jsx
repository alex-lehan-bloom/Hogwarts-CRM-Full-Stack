import React from "react";
import "../../css/Home.css";

function Home() {
  return (
    <>
      <img
        src="images/hogwarts-name.gif"
        className="hogwarts-txt"
        alt="hogwarts"
      />
      <img
        src="images/hogwarts-logo.png"
        alt="hogwartsFlag"
        className="hogwarts-flag"
      />
      <h1 className="hogwarts-byline">School of Witchcraft and Wizardry</h1>
    </>
  );
}

export default Home;
