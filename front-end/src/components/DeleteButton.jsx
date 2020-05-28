import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

function DeleteButton() {
  return (
    <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
      Delete
    </Button>
  );
}

export default DeleteButton;
