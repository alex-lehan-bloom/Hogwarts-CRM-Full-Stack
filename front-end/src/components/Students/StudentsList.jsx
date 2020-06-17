import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

import "../../css/StudentsList.css";

function StudentsList(props) {
  const useStyles = makeStyles({
    table: {
      border: "1px solid gray",
      opacity: "93%",
      "& .header": {
        backgroundColor: "black",
        opacity: "93%",
      },
      "& .header-cell": {
        color: "white",
        fontFamily: "'Roboto', sans-serif",
        fontSize: 17,
        fontWeight: "bold",
        color: "white",
      },
    },
  });
  const classes = useStyles();

  const theme = createMuiTheme({
    typography: {
      fontFamily: '"Caveat", cursive',
      fontSize: 21,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="simple table">
          <TableHead className="header">
            <TableRow>
              <TableCell align="center" className="header-cell">
                Student
              </TableCell>
              <TableCell align="center" className="header-cell">
                House
              </TableCell>
              <TableCell align="center" className="header-cell">
                Enrollment Date
              </TableCell>
              <TableCell align="center" className="header-cell">
                Last Updated
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.students.map((student) => (
              <TableRow
                key={student._id}
                numeric
                component="a"
                rel="noreferrer"
                className="student-table-row"
                // href={`/student/${student._id}`}
                component={Link}
                to={`/student/${student._id}`}
              >
                <TableCell component="th" scope="row" align="center">
                  {student.first_name} {student.last_name}
                </TableCell>
                <TableCell align="center">{student.house}</TableCell>
                <TableCell align="center">{student.create_date}</TableCell>
                <TableCell align="center">{student.last_update_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}

export default StudentsList;
