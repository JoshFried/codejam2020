import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const RatingUI = () => {
  const [ratingValue, setRatingValue] = useState<number | null>(4); // passed in, state won't be needed

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={(event, ratingNewValue: number | null) => {
            setRatingValue(ratingNewValue);
          }}
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={ratingValue} readOnly />
      </Box>
    </div>
  );
};

export default RatingUI;
