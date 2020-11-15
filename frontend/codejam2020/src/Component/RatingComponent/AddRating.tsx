import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const AddRating = () => {
  const [ratingValue, setRatingValue] = useState<number | null>(0);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={(_event, ratingNewValue: number | null) => {
            setRatingValue(ratingNewValue);
          }}
        />
      </Box>
    </div>
  );
};

export default AddRating;
