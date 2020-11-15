import React, { useState } from "react";
import RatingUI from "../RatingComponent/RatingUI";
import AddRating from "../RatingComponent/AddRating";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import Link from "@material-ui/core/Link";

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
    link: string;
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
  titlebox: {
    display: "flex",
    justifyContent: "space-between",
  },
  ratingBox: {
    display: "flex",
  },
  ratingName: {
    marginTop: "0.5rem",
  },
  googleMapsLink: {
    paddingBottom: "30px",
  }
});

const BusinessInfoModal: React.FC<Props> = ({ businessInfo }) => {
  const classes = useStyles();
  const [sanitizeRating, setSanitizeRating] = useState<number | null>(0);
  const [SocialDistanceRating, setSocialDistanceRating] = useState<
    number | null
  >(0);
  const [CustomerLimitRating, setCustomerLimitRating] = useState<number | null>(
    0
  );
  const [MaskWearRating, setMaskWearRating] = useState<number | null>(0);
  const [AccomodationRating, setAccomodationRating] = useState<number | null>(
    0
  );

  const resetRating = () => {};

  return (
    <div className={classes.root}>
      <div>
        <Paper className={classes.paper}>
          <div className={classes.titlebox}>
            <Typography variant="h6" gutterBottom>
              Reviews
            </Typography>
            {businessInfo.rating > 3 ? (
              <div>
                Covid Safe
                <CheckIcon style={{ color: "green" }} />
              </div>
            ) : (
              <></>
            )}
          </div>

          <Typography variant="subtitle1" gutterBottom>
            {businessInfo.name + " | " + businessInfo.location}
          </Typography>
          <div className={classes.googleMapsLink}>
            <Link href={businessInfo.link}>
              Google Maps Link
            </Link>
          </div>
          <Typography variant="body1" gutterBottom>
            Reviews
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
            <AddRating
              newRatingValue={sanitizeRating}
              setNewRating={setSanitizeRating}
            />
            <div className={classes.ratingName}>Hand Sanitizer</div>
          </div>
          <div className={classes.ratingBox}>
            <AddRating
              newRatingValue={SocialDistanceRating}
              setNewRating={setSocialDistanceRating}
            />
            <div className={classes.ratingName}>Social Distancing</div>
          </div>
          <div className={classes.ratingBox}>
            <AddRating
              newRatingValue={CustomerLimitRating}
              setNewRating={setCustomerLimitRating}
            />
            <div className={classes.ratingName}>Customer Limit</div>
          </div>
          <div className={classes.ratingBox}>
            <AddRating
              newRatingValue={MaskWearRating}
              setNewRating={setMaskWearRating}
            />
            <div className={classes.ratingName}>Mask Wear</div>
          </div>
          <div className={classes.ratingBox}>
            <AddRating
              newRatingValue={AccomodationRating}
              setNewRating={setAccomodationRating}
            />
            <div className={classes.ratingName}>Accomodating</div>
          </div>
          <Button onClick={resetRating}>Submit</Button>
        </Paper>
      </div>
    </div>
  );
};

export default BusinessInfoModal;
