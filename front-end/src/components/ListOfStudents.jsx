import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "../css/ListOfStudents.css";

function ListOfStudents(props) {
  return (
    <List
      component="nav"
      aria-label="main mailbox folders"
      className="list-of-students"
    >
      {props.students.map((student) => {
        return (
          <>
            <Divider />
            <ListItem button key={student._id} className="list-item">
              <ListItemText>
                <img src="images/gryfindor-symbol.jpg"></img>
              </ListItemText>
              <ListItemText>
                {student.first_name} {student.last_name}
              </ListItemText>
              <ListItemText>{student.create_date}</ListItemText>
            </ListItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
}

export default ListOfStudents;
