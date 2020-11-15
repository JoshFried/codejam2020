import React from "react";
import RatingUI from "../RatingComponent/RatingUI";
import AddRating from "../RatingComponent/AddRating";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

interface Props {
  businessInfo: {
    name: string;
    rating: number;
    count: number;
    location: string;
    type: string;
  };
}

const useStyles = makeStyles({
  root: {
    width: "50%",
    height: "100%",
    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  paper: {
    width: "20rem",
    height: "20rem",
    padding: "2rem",
  },
});

const BusinessInfoModal: React.FC<Props> = ({ businessInfo }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Reviews
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {businessInfo.name + " | " + businessInfo.location}
          </Typography>
          <RatingUI rating={businessInfo.rating} />
          <Typography variant="body1">Leave a Review</Typography>
          <AddRating />
        </Paper>
      </div>
    </div>
  );
};

export default BusinessInfoModal;
