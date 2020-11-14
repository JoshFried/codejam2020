import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface Props {
  rating: number;
}

const RatingUI: React.FC<Props> = ({ rating }) => {
  const [ratingValue, setRatingValue] = useState<number | null>(4); // passed in, state won't be needed

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={rating} readOnly />
      </Box>
      {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={(_event, ratingNewValue: number | null) => {
            setRatingValue(ratingNewValue);
          }}
        />
      </Box> */}
    </div>
  );
};

export default RatingUI;
