import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Searchbox from "./Component/Header/Searchbox";
import MenuAppBar from "./Component/Header/MenuAppBar";
import Explanation from "./Component/Header/Explanation";
import AllBusiness from "./Component/BusinessDisplay/AllBusiness";
import BusinessCard from "./Component/BusinessDisplay/BusinessCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#9AC7BF",
      minHeight: "100vh",
    },
    App: {
      textAlign: "center",
    },
    searchcontent: {
      flexDirection: "column",
      width: "80%",
      marginTop: "2rem",
      display: "flex",
      justifyContent: "center",
    },
    businessdisplay: {
      width: "100%",
    },
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.4em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
        outline: "1px solid slategrey",
      },
    },
  })
);

const App = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <MenuAppBar></MenuAppBar>
      <div className={classes.root}>
        <div className={classes.searchcontent}>
          <Explanation></Explanation>
          <Searchbox></Searchbox>
          <br></br>
        </div>
        <div className={classes.businessdisplay}>
          <AllBusiness />
        </div>
      </div>
    </div>
  );
};

export default App;
