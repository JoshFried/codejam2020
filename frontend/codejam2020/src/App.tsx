import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Searchbox from "./Component/Header/Searchbox";

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
      <header className="App-header">
        <Searchbox></Searchbox>
      </header>
    </div>
  );
};

export default App;
