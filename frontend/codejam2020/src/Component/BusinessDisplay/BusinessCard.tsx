import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

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
    width: "29rem",
    minHeight: "142px",
    textAlign: "start",
    border: "2px solid black",
    margin: "0.5rem 0rem",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const BusinessCard: React.FC<Props> = ({ businessInfo }) => {
  const classes = useStyles();

  return (
    <div>
      <GridListTile cols={1} rows={1}>
        <Paper className={classes.root}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {businessInfo.type.toUpperCase().substring(0, 1) +
              businessInfo.type.toLowerCase().substring(1)}
          </Typography>
          <Typography variant="h5" component="h2">
            {businessInfo.name.toUpperCase().substring(0, 1) +
              businessInfo.name.toLowerCase().substring(1)}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {businessInfo.location}
          </Typography>
          <Typography variant="body2" component="p">
            {businessInfo.rating} / 5
          </Typography>
        </Paper>
      </GridListTile>
    </div>
  );
};

export default BusinessCard;
