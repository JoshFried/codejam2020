import React from "react";
import RatingUI from "../RatingComponent/RatingUI";
import AddRating from "../RatingComponent/AddRating";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

interface Props {
  businessInfo: {
    name: string;
    rating: number;
    count: number;
    location: string;
    type: string;
    business_id: number;
    local: boolean;
    ratingSanitizer: number;
    ratingSocialDistancing: number;
    ratingLimitingCustomers: number;
    ratingMasks: number;
    ratingAccomodation: number;
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
    overflow: "scroll",
  },
  ratingBox: {
    display: "flex",
  },
  ratingName: {
    marginTop: "0.5rem",
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
          <div className={classes.ratingBox}>
            <RatingUI rating={businessInfo.ratingSanitizer} />
            <div className={classes.ratingName}>Hand Sanitizer</div>
          </div>
          <div className={classes.ratingBox}>
            <RatingUI rating={businessInfo.ratingSocialDistancing} />
            <div className={classes.ratingName}>Social Distancing</div>
          </div>
          <div className={classes.ratingBox}>
            <RatingUI rating={businessInfo.ratingLimitingCustomers} />
            <div className={classes.ratingName}>Customer Limit</div>
          </div>
          <div className={classes.ratingBox}>
            <RatingUI rating={businessInfo.ratingMasks} />
            <div className={classes.ratingName}>Mask Wear</div>
          </div>
          <div className={classes.ratingBox}>
            <RatingUI rating={businessInfo.ratingAccomodation} />
            <div className={classes.ratingName}>Accomodating</div>
          </div>

          <Typography variant="body1">Leave a Review</Typography>

          <div className={classes.ratingBox}>
            <AddRating />
            <div className={classes.ratingName}>Hand Sanitizer</div>
          </div>
          <div className={classes.ratingBox}>
            <AddRating />
            <div className={classes.ratingName}>Social Distancing</div>
          </div>
          <div className={classes.ratingBox}>
            <AddRating />
            <div className={classes.ratingName}>Customer Limit</div>
          </div>
          <div className={classes.ratingBox}>
            <AddRating />
            <div className={classes.ratingName}>Mask Wear</div>
          </div>
          <div className={classes.ratingBox}>
            <AddRating />
            <div className={classes.ratingName}>Accomodating</div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default BusinessInfoModal;
