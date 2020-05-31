import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    border: "1px solid black",
  },
  card: {
    minWidth: 400,
    border: "1px solid black",
    borderRadius: "4px !important",
    textAlign: "center",
    "& .name": {
      margin: "0 0 5px 0",
    },
    "& .MuiPaper-elevation1": {
      borderRadius: 6,
    },
    "& .MuiInputBase-input": {
      width: "100% !important",
    },
    "& .header": {
      margin: "20px 20px 5px 20px",
    },
    "& .main-content": {
      padding: 20,
      paddingBottom: 10,
    },
    "& .MuiCardContent-root": {
      padding: 0,
    },
    "& .header-container": {
      width: "100%",
      borderBottom: "1px solid black",
    },
    "& .password": {
      width: "100%",
      marginTop: 10,
    },
    "& .delete-button": {
      width: "100%",
    },
  },
}));
