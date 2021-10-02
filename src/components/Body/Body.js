import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import CardOne from "../../assets/images/Starcard silver 2.png";
import CardTwo from "../../assets/images/card starcard gold 1 4.png";
import Group from "../../assets/images/Group 534.png";
import Girl from "../../assets/images/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic 1.png";
import PaperCard from "./PaperCard";
import About from "./About";
import MissionAndVision from "./MissionAndVision";
import PrivilegeCards from "./PrivilegeCards";

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

function Body() {
  const classes = useStyles();
  return (
    <>
      <Box
        //   sx={{ mt: 2 }}
        style={{
          backgroundColor: "#6d6dff",
          height: 700,
          borderRadius: "0 0 100px 100px",
        }}
      >
        <Grid container mt={3}>
          <Grid item xs={1} alignSelf="center" style={{ cursor: "pointer" }}>
            <Box
              style={{ justifyContent: "center" }}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                },
              }}
            >
              <Paper elevation={3}>
                <Box>
                  <ArrowBackIosIcon
                    style={{ fontSize: 35, margin: "12px 5px 0px 17px" }}
                  />
                </Box>
              </Paper>
            </Box>
          </Grid>
          {/* box one */}
          <Grid item container direction="column" xs={5} spacing={1}>
            <Grid item>
              <Typography
                className={classes.firstBox}
                variant="h2"
                style={{
                  // padding: 25,
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: 66,
                  marginTop: 100,
                }}
              >
                We provide easy solution to Own your Privilege
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: 27,
                  color: "#ffff00",
                }}
              >
                GiftCard for money
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                // variant="body2"
                style={{
                  fontSize: 18,
                  letterSpacing: 2,
                  color: "#fff",
                }}
              >
                Starcard is a platform for trading your Buying and giftcard at
                the best rate, why not give us a trial.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.root}
                style={{
                  marginTop: 15,
                  height: 60,
                  fontSize: 18,
                  fontWeight: 800,
                  width: 270,
                  color: "#2d2d52",
                }}
              >
                GET STARTED
              </Button>
            </Grid>
          </Grid>
          {/* box two */}
          <Grid item xs={5}>
            <Box style={{ margin: "60px 0px 0px -210px" }}>
              <CardMedia
                component="img"
                image={CardOne}
                alt="green iguana"
                style={{
                  height: 520,
                  position: "absolute",
                  width: 740,
                }}
              />

              <CardMedia
                component="img"
                image={CardTwo}
                alt="green iguana"
                style={{
                  height: 520,
                  position: "absolute",
                  width: 740,
                  left: 517,
                  top: 160,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={1} alignSelf="center" style={{ cursor: "pointer" }}>
            <Box
              style={{ justifyContent: "center" }}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                },
              }}
            >
              <Paper elevation={3}>
                <Box>
                  <ArrowForwardIosIcon
                    style={{ fontSize: 35, margin: "12px 5px 0px 17px" }}
                  />
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        style={{
          justifyContent: "center",
          marginTop: -90,
        }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 1155,
            height: 170,
          },
        }}
      >
        <PaperCard />
      </Box>
      <Box component="div">
        <About />
      </Box>
      <Box component="div" style={{ marginTop: -30 }}>
        <MissionAndVision />
      </Box>
      <Box component="div">
        <CardMedia
          component="img"
          image={Group}
          alt="green iguana"
          title="Group"
        />
      </Box>
      <Box
        style={{ padding: 81 }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            height: 310,
            borderRadius: "35px",
            background: "linear-gradient(to right, #0000cc 0%, #3399ff 100%)",
          },
        }}
      >
        <Paper elevation={3}>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                style={{
                  color: "#fff",
                  fontSize: 32,
                  padding: 80,
                }}
              >
                Enjoy Double festive offer On purchase of shopping Above 2000
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                image={Girl}
                alt="green iguana"
                style={{
                  marginTop: -43,
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Box variant="div">
        <PrivilegeCards />
      </Box>
    </>
  );
}

export default Body;
