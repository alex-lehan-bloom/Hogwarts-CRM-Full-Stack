import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import "../css/DeletePopOver.css";

const useStyles = makeStyles((theme) => ({
  deleteIcon: { color: "#505050" },
  typography: {
    padding: theme.spacing(2),
  },
}));

function DeletePopOver() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          <h3 className="delete-student-header"> Delete Student</h3>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              label="Delete Password"
              variant="outlined"
              type="password"
            />
            <IconButton aria-label="delete" className={classes.deleteIcon}>
              <DeleteIcon fontSize="large" />
            </IconButton>
          </form>
        </Typography>
      </Popover>
    </div>
  );
}

export default DeletePopOver;
