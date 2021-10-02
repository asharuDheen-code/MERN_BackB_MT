import React from "react";
import { CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import AboutUs from "../../assets/images/Rectangle 347.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: "linear-gradient(45deg, #FFEB3B 100%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 30px",
  },
  underLine: {
    color: "#000000",
    // text-transform: uppercase;
    display: "inline-block",
    fontSize: "30",
    // fontFamily: "oswald",

    textDecoration: "none",
    backgroundImage: "linear-gradient(to right, #5163e5, #5163e5)",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 4px",
    transition: "background-size .5s ease",
    lineHeight: 45,
  },
}));

function About() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid
          item
          container
          direction="column"
          xs={6}
          spacing={3}
          style={{ padding: "59px 62px 34px 80px" }}
        >
          <Grid item>
            <Typography
              variant="h4"
              className={classes.underLine}
              style={{
                lineHeight: "65px", 
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              About Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              style={{
                color: "#7e858b",
              }}
            >
              We have the best rates . Simply start your exchange right now.
              Sign up for our Affiliate program and earn commission from each
              exchangeIt has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} p={8}>
          <CardMedia
            component="img"
            image={AboutUs}
            alt="green iguana"
            style={{
              height: 334,
              width: 530,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default About;
