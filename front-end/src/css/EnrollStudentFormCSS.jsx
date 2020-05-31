import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 30px 30px 30px",
    border: "1px solid",
    borderRadius: 4,
    marginLeft: 50,
    "& .row": {
      display: "flex",
    },
    "& .left-side": {
      width: 550,
      display: "flex",
      flexDirection: "column",
    },
    "& .right-side": {
      width: 450,
      display: "flex",
      flexDirection: "column",
    },
    "& .submit": {
      justifyContent: "end",
    },
    "& .MuiTextField-root": {
      width: "85%",
    },
    "& .MuiInputBase-root": {
      width: "85%",
    },
  },
}));
