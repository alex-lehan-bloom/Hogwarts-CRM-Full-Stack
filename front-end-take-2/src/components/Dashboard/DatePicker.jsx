import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { getStudentsEnrolledOnDate } from "../../lib/api.js";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/DatePicker.css";

function EnrollmentDatePicker(props) {
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const [studentsEnrolledOnDate, setStudentsEnrolledOnDate] = useState(0);

  useEffect(() => {
    async function getStudentsEnrollredOnDateFromServer() {
      let students = await getStudentsEnrolledOnDate(
        selectedDate.toISOString().substr(0, 10)
      );
      setStudentsEnrolledOnDate(students.data.length);
    }
    getStudentsEnrollredOnDateFromServer();
  }, []);

  useEffect(() => {
    props.handleDate(selectedDate);
    async function getStudentsEnrollredOnDateFromServer() {
      let students = await getStudentsEnrolledOnDate(
        selectedDate.toISOString().substr(0, 10)
      );
      setStudentsEnrolledOnDate(students.data.length);
    }
    getStudentsEnrollredOnDateFromServer();
  }, [selectedDate]);

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        dateFormat="MM/dd/yyyy"
        maxDate={new Date()}
        className="date-picker"
      />
      <h2>{studentsEnrolledOnDate}</h2>
    </>
  );
}

export default EnrollmentDatePicker;
