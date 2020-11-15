import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import BusinessCard from "./BusinessCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: "#9AC7BF",
      width: "100%",
      height: "auto",
    },
    gridList: {
      width: 500,
      height: 450,
      transform: "translateZ(0)",
    },
    gridListTile: {
      width: "100%",
      height: "3rem",
    },
  })
);

const AllBusiness = () => {
  const businesses = [
    {
      name: "Provigo",
      rating: 4,
      count: 1,
      location: "3421 Avenue du Parc, Montreal, QC H2X 2H6",
      type: "supermarket",
      business_id: 1,
    },
    {
      name: "Provigo",
      rating: 3,
      count: 1,
      location: "50 Avenue du Mont-Royal O, Montreal, QC H2T 2S3",
      type: "supermarket",
      business_id: 2,
    },
    {
      name: "Provigo",
      rating: 4,
      count: 1,
      location:
        "1275 Avenue des Canadiens-de-Montréal #200, Montréal, QC H3B 5E8",
      type: "supermarket",
      business_id: 3,
    },
    {
      name: "Metro",
      rating: 4,
      count: 1,
      location: "3575 Park Avenue Suite 5100, Montreal, QC H2X 3P9",
      type: "supermarket",
      business_id: 4,
    },
    {
      name: "Epicerie Segal",
      rating: 2,
      count: 1,
      location: "4001 Boulevard Saint-Laurent, Montreal, QC H2W 1Y4",
      type: "supermarket",
      business_id: 5,
    },
    {
      name: "La Banquise",
      rating: 4,
      count: 1,
      location: "994 Rue Rachel E, Montreal, QC H2J 2J3",
      type: "restaurant",
      business_id: 6,
    },
    {
      name: "A&W",
      rating: 2,
      count: 1,
      location: "3780 Boulevard Saint-Laurent, Montreal, QC H2W 1X6",
      type: "restaurant",
      business_id: 7,
    },
    {
      name: "A&W",
      rating: 3,
      count: 1,
      location: "3457 Avenue du Parc, Montreal, QC H2X 2H6",
      type: "restaurant",
      business_id: 8,
    },
    {
      name: "3 Brasseurs",
      rating: 5,
      count: 1,
      location: "1658 Rue Saint-Denis, Montreal, QC H2X 3K4",
      type: "restaurant",
      business_id: 9,
    },
    {
      name: "McDonald's",
      rating: 1,
      count: 1,
      location: "1647 Rue Saint-Denis, Montreal, QC H2X 3K4",
      type: "restaurant",
      business_id: 10,
    },
    {
      name: "Pizza Pizza",
      rating: 2,
      count: 1,
      location: "3714 Boulevard Saint-Laurent, Montreal, QC H2X 1A1",
      type: "restaurant",
      business_id: 11,
    },
    {
      name: "Decathlon",
      rating: 5,
      count: 1,
      location: "705 Rue Saint-Catherine O #3500, Montreal, QC H3B 4G5",
      type: "sport store",
      business_id: 12,
    },
    {
      name: "Gap",
      rating: 3,
      count: 1,
      location: "705 Rue Saint-Catherine O #3123, Montreal, QC H3B 4G5",
      type: "clothing store",
      business_id: 13,
    },
    {
      name: "H&M",
      rating: 4,
      count: 1,
      location: "1100 Rue Saint-Catherine O, Montreal, QC H3B 1H4",
      type: "clothing store",
      business_id: 14,
    },
    {
      name: "Sports Experts",
      rating: 4,
      count: 1,
      location: "930 Rue Saint-Catherine O, Montreal, QCH3B 1E2",
      type: "sport store",
      business_id: 15,
    },
    {
      name: "Bagels St-Viateur",
      rating: 4,
      count: 1,
      location: "263 Rue Saint-Viateur O, Montreal, QC H2V 1Y1",
      type: "cafe",
      business_id: 16,
    },
    {
      name: "Fairmount Bagel",
      rating: 5,
      count: 1,
      location: "74 Avenue Fairmount O, Montreal, QC H2T 2M2",
      type: "cafe",
      business_id: 17,
    },
    {
      name: "Cafe Olimpico",
      rating: 3,
      count: 1,
      location: "124 Rue Saint-Viateur O, Montreal, QC H2T 2L1",
      type: "cafe",
      business_id: 18,
    },
    {
      name: "Sushi Momo Végétalien",
      rating: 5,
      count: 1,
      location: "3609 Rue Saint-Denis, Montreal, QC H2X 3L6",
      type: "restaurant",
      business_id: 19,
    },
    {
      name: "Starbucks",
      rating: 3,
      count: 1,
      location: "3601 Boulevard Saint-Laurent, Montreal, QC H2X 2V5",
      type: "cafe",
      business_id: 20,
    },
  ];

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {businesses.map((business, i) => {
          return <BusinessCard businessInfo={business} key={i}></BusinessCard>;
        })}
      </GridList>
    </div>
  );
};

export default AllBusiness;
