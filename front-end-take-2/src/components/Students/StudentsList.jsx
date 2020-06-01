import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../../css/StudentsList.css";

function StudentsList(props) {
  const useStyles = makeStyles({
    table: {
      "& .MuiTableHead-root": {
        backgroundColor: "black",
        color: "#384d92",
      },
      "& .MuiTableCell-head": {
        fontWeight: "bold",
        color: "white",
      },
    },
  });
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className="header">
            <TableCell align="center">Student</TableCell>
            <TableCell align="center">House</TableCell>
            <TableCell align="center">Enrollment Date</TableCell>
            <TableCell align="center">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.students.map((student) => (
            <TableRow key={student._id}>
              <TableCell component="th" scope="row" align="center">
                <NavLink
                  exact
                  to={`/student/${student._id}`}
                  className="link-to-student-page"
                >
                  {student.first_name} {student.last_name}
                </NavLink>
              </TableCell>

              <TableCell align="center"> {student.house}</TableCell>
              <TableCell align="center">{student.create_date}</TableCell>
              <TableCell align="center">{student.last_update_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentsList;
