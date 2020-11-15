import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import RatingUI from "../RatingComponent/RatingUI";
import Modal from "@material-ui/core/Modal";
import BusinessInfoModal from "./BusinessInfoModal";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import local from "./local.png";

interface Props {
  businessInfo: {
    name: string;
    rating: number;
    count: number;
    location: string;
    type: string;
    business_id: number;
    local:boolean;
  };
}

const useStyles = makeStyles({
  root: {
    width: "29rem",
    minHeight: "142px",
    textAlign: "start",
    border: "2px solid black",
    margin: "0.5rem 0rem",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "1rem",
  },
  type: {
    fontSize: 15,
    textAlign: "left",
    marginLeft: "10px",
  },
  name: {
    fontSize: 50,
    textAlign: "left",
    marginLeft: "10px",
    color: "#3f51b5",
  },
  location: {
    fontSize: 15,
    textAlign: "right",
    marginRight: "10px",
  },
  rating: {
    display: "flex",
    width: "15rem",
    height: "3rem",
    alignItems: "start",
  },
  ratingtext: {
    display: "flex",
    alignItems: "center",
    height: "80%",
  },
  local: {
    width: "50px",
    paddingRight: "10px",
  },
  topLine: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "10px",
  }
});

const BusinessCard: React.FC<Props> = ({ businessInfo }) => {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState<number | null>(null);

  return (
    <div>
      <Paper
        className={classes.root}
        onClick={() => setModalIsOpen(businessInfo.business_id)}
      >
        <div className = {classes.topLine}>
          <Typography className={classes.name} variant="h3" component="h1">
            {businessInfo.name}
          </Typography>
          <div className={classes.local}>
            {businessInfo.local ? <img src={local} /> : <></>}
          </div>
        </div>
        <Typography className={classes.type} color="textSecondary" gutterBottom>
          {businessInfo.type.toUpperCase().substring(0, 1) +
            businessInfo.type.toLowerCase().substring(1)}
        </Typography>
        <div className={classes.rating}>
          <RatingUI rating={businessInfo.rating} />
          <div className={classes.ratingtext}>({businessInfo.count})</div>
        </div>

        <Typography className={classes.location} color="textSecondary">
          {businessInfo.location}
        </Typography>
      </Paper>
      <Modal
        open={modalIsOpen === businessInfo.business_id}
        onClose={() => {
          setModalIsOpen(null);
        }}
      >
        <BusinessInfoModal businessInfo={businessInfo} />
      </Modal>
    </div>
  );
};

export default BusinessCard;
