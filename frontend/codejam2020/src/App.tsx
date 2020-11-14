import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
  const [something, setSomething] = useState<number>(0);

  const changeSomething = () => {
    setSomething(2.5);
  };

  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Header someNumber={something} someSecondString="im a string"></Header>
        <div className={classes.root}>
          {something}
          <Button variant="contained" color="primary" onClick={changeSomething}>
            click me
          </Button>
          <div>{something}</div>
        </div>
      </header>
    </div>
  );
};

export default App;
