import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AllBusiness from "../BusinessDisplay/AllBusiness";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "40%",
        height: "56px",
      },
    },
    button: {
      width: "10%",
    },
    businessdisplay: {
      width: "100%",
    },
  })
);




const Searchbox= () => {
  const classes = useStyles();

  const [searchValue, setValue] = useState<string>("");

  const changeValue = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Search a business..."
          variant="outlined"
          value={searchValue}
          onChange={changeValue}
        />
        {/* <Button className={classes.button} variant="contained" color="primary" onClick={() => {changeValue(searchValue)}}>
          Search
        </Button> */}
      </form>
      <div className={classes.businessdisplay}>
        <AllBusiness filterValue={searchValue}></AllBusiness>
      </div>
    </div>
  );
};

export default Searchbox;
