import React from "react";
import Paper from "@material-ui/core/Paper";

interface Props {
  businessInfo: {
    name: string;
    rating: number;
    count: number;
    location: string;
    type: string;
  };
}
const BusinessCard: React.FC<Props> = ({ businessInfo }) => {
  return (
    <Paper style={{ width: "100%", height: "2rem" }}>
      {console.log(businessInfo)}
      {businessInfo.name}
    </Paper>
  );
};

export default BusinessCard;
