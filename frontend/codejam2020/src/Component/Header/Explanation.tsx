import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: "1.5rem",
      marginBottom: "1.2rem",
    },
  })
);

const Explanation = () => {
  const explanation: String =
    "Search and rate restaurants, stores, cafes and more...";

  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>{explanation}</div>
    </div>
  );
};

export default Explanation;
