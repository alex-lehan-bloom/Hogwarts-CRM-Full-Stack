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
import "../../css/StudentsList.css";

function StudentsList(props) {
  const useStyles = makeStyles({
    table: {
      "& .MuiTableHead-root": {
        backgroundColor: "black",
        color: "#384d92",
      },
      "& .MuiTableCell-body": {},
      "& .house-table-cell": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      "& .house-name": { marginRight: 10 },

      "& .MuiTableCell-head": {
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
          <TableHead>
            <TableRow>
              <TableCell align="center">Student</TableCell>
              <TableCell align="center">House</TableCell>
              <TableCell align="center">Enrollment Date</TableCell>
              <TableCell align="center">Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.students.map((student) => (
              <TableRow
                key={student._id}
                numeric
                component="a"
                className="student-table-row"
                href={`/student/${student._id}`}
              >
                <TableCell component="th" scope="row" align="center">
                  <img src="images/gryfindor.jfif" className="house-image" />
                  {student.first_name} {student.last_name}
                </TableCell>
                <TableCell align="center">
                  <p className="house-name">{student.house}</p>
                </TableCell>
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
