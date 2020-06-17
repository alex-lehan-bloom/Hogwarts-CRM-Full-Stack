import React, { useState, useEffect } from "react";
import { getStudentsInEachCourse } from "../../lib/StudentAPI.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import "../../css/ChartMagicSkills.css";

function Courses(props) {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    async function getStudentSkillsFromServer() {
      let response = await getStudentsInEachCourse();
      let courses = response.data;
      let keys = Object.keys(courses);
      let values = Object.values(courses);
      setChartData({
        labels: keys,
        datasets: [
          {
            label: "Number of students in each course",
            data: values,
            backgroundColor: [
              "rgb(216,97,97)",
              "rgb(216,97,97)",
              "rgb(216,97,97)",
              "rgb(216,97,97)",
              "rgb(216,97,97)",
              "rgb(216,97,97)",
              "rgb(216,97,97)",
              "rgb(216,97,97)",
              "rgb(216,97,97)",
              "rgb(216,97,97)",
              "rgb(216,97,97)",
              "rgb(216,97,97)",
            ],
          },
        ],
      });
    }
    getStudentSkillsFromServer();
  }, [props.students]);

  return (
    <>
      <div className="chart">
        <Bar
          data={chartData}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            title: {
              display: true,
              fontSize: 25,
            },
            legend: { display: true, position: "top" },
          }}
        />
      </div>
    </>
  );
}

export default Courses;
