import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import HouseSelector from "./FormItems/HouseSelector";
import Field from "./FormItems/Field";
import SkillsCheckboxes from "./FormItems/SkillsCheckboxes";
import { useStyles } from "../../css/AddStudentModalCSS";

function AddStudentModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleOpen}
      >
        Enroll new student
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1>Enroll student</h1>
            <h2>Name</h2>
            <Field
              class="first-name"
              label="First name"
              handleInput={(firstName) => {
                // handleFirstNameChange(firstName);
              }}
            />
            <Field
              class="last-name"
              label="Last name"
              handleInput={(lastName) => {
                // handleLastNameChange(lastName);
              }}
            />
            <h2>House</h2>
            <HouseSelector
              handleSelection={(house) => {
                // handleHouse(house);
              }}
            />
            <h2>Current Classes</h2>
            <SkillsCheckboxes
              handleSkills={(Courses) => {
                // handleCourses(Courses);
              }}
            />
            <h2>Existing Magic Skills</h2>
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                // handleSubmit(event);
              }}
            >
              Enroll Student
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default AddStudentModal;
