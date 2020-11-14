import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Searchbox from "./Component/Header/Searchbox";
import MenuAppBar from "./Component/Header/MenuAppBar";
import Explanation from "./Component/Header/Explanation";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const App = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className="App">
      <MenuAppBar></MenuAppBar>
      <header className="App-header">
        <Explanation></Explanation>
        <Searchbox></Searchbox>
      </header>
    </div>
  );
};

export default App;
