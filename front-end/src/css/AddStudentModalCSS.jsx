import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: "auto",
    marginRight: 80,
    height: 40,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    border: "1px solid black",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    padding: "0 50px 0 50px",
    height: "70%",
    overflow: "scroll",
    overflowX: "hidden",
    "$ .button": {
      marginBottom: 10,
    },
  },
}));
