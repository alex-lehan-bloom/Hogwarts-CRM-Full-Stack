import React, { useState, useEffect } from "react";
import { getStudentSkills } from "../../lib/api.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import "../../css/ChartMagicSkills.css";

function MagicSkills(props) {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    async function getStudentSkillsFromServer() {
      let response = await getStudentSkills();
      let skills = response.data;
      let keys = Object.keys(skills);
      let values = Object.values(skills);
      setChartData({
        labels: keys,
        datasets: [
          {
            label: "Number of students with each magic skill",
            data: values,
            backgroundColor: [
              "rgb(21,71,148)",
              "rgb(21,71,148)",
              "rgb(21,71,148)",
              "rgb(21,71,148)",
              "rgb(21,71,148)",
              "rgb(21,71,148)",
              "rgb(21,71,148)",
              "rgb(21,71,148)",
              "rgb(21,71,148)",
              "rgb(21,71,148)",
              "rgb(21,71,148)",
              "rgb(21,71,148)",
            ],
          },
        ],
      });
    }
    getStudentSkillsFromServer();
  }, [props.students]);

  useEffect(() => {
    console.log("yes");
    console.log(chartData);
  }, [chartData]);

  return (
    <>
      <div className="chart-magic-skills">
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              // text: "Magic Skills",
              fontSize: 25,
              fontColor: "black",
            },
            legend: { display: true, position: "top" },
          }}
          className="chart"
        />
      </div>
    </>
  );
}

export default MagicSkills;
