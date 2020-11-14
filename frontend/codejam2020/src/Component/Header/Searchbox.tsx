import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { isPropertySignature, isWhiteSpaceLike } from "typescript";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        height: '56px',
      },
    },
  }),
);

const Searchbox = () => {
    const classes = useStyles();

    const[searchValue, setValue] = useState<string>('');

    const changeValue = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Search restaurants, stores, businesses..." 
                    variant="outlined" 
                    value={searchValue}
                    onChange={changeValue}/>
                <Button variant="contained" color="primary">
                    Search
                </Button>
            </form>
        </div>
    )
}

export default Searchbox;