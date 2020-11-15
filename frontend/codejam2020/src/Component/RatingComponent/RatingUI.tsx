import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface Props {
  rating: number | null;
}

const RatingUI: React.FC<Props> = ({ rating }) => {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={rating} readOnly />
      </Box>
    </div>
  );
};

export default RatingUI;
