import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeletePopOver from "./DeletePopOver";
import "../css/Students.css";

function StudentsList(props) {
  return (
    <TableContainer component={Paper} className="list-of-students">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>House</TableCell>
            <TableCell align="center">Student</TableCell>
            <TableCell align="center">Enrollment Date</TableCell>
            <TableCell align="center">Last Updated</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.students.map((student) => (
            <TableRow key={student.id}>
              <TableCell component="th" scope="row">
                {student.house}
              </TableCell>
              <TableCell align="center">
                {student.first_name} {student.last_name}
              </TableCell>
              <TableCell align="center">{student.create_date}</TableCell>
              <TableCell align="center">{student.last_update_time}</TableCell>
              <TableCell align="center">
                <DeletePopOver
                  studentId={student._id}
                  firstName={student.first_name}
                  lastName={student.last_name}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentsList;
