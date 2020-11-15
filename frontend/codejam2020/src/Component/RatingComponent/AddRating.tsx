import React, { ChangeEvent, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

interface Props {
  newRatingValue: number | null;
  setNewRating: React.Dispatch<React.SetStateAction<number | null>>;
}

const AddRating: React.FC<Props> = ({ newRatingValue, setNewRating }) => {
  //const [ratingValue, setRatingValue] = useState<number | null>(0);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="rating"
          value={newRatingValue}
          onChange={(_event, ratingChangeValue: number | null) => {
            //setRatingValue(ratingChangeValue);
            setNewRating(ratingChangeValue);
          }}
        />
      </Box>
    </div>
  );
};

export default AddRating;
