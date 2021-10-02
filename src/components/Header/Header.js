import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { makeStyles } from "@material-ui/styles";
import { Button, CardMedia, Grid } from "@mui/material";
import logo from "../../assets/images/cropped-LOGO-VALUE 2.png";
import { isAuth, signOut } from "../../helper/authHelper";

const useStyles = makeStyles((theme) => ({
  appGridTwo: {
    alignSelf: "center",
    textAlign: "center",
  },
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: "linear-gradient(45deg, #6d6dff  100%, #6d6dff 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgb(167 157 159 / 30%)",
    color: "white",
    padding: "0 30px",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles();
  const authSignOut = () => {
    signOut();
    window.location.reload();
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          className={classes.appBar}
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            color: "black",
            // height: 100,
          }}
        >
          <Toolbar>
            <Grid container xs={12}>
              <Grid item xs={4}>
                <CardMedia
                  className={classes.logo}
                  component="img"
                  image={logo}
                  alt="green iguana"
                  style={{
                    width: 88,
                    height: 63,
                    margin: 15,
                    marginLeft: 40,
                  }}
                />
              </Grid>
              <Grid item container xs={8}>
                <Grid item xs={1} className={classes.appGridTwo}>
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ color: "#d5ae22" }}
                  >
                    Home
                  </Typography>
                </Grid>
                <Grid item xs={2} className={classes.appGridTwo}>
                  <Typography variant="h6" component="div">
                    About Us
                  </Typography>
                </Grid>
                <Grid item xs={2} className={classes.appGridTwo}>
                  <Typography variant="h6" component="div">
                    Associates
                  </Typography>
                </Grid>
                <Grid item xs={1} className={classes.appGridTwo}>
                  <Typography variant="h6" component="div">
                    Cards
                  </Typography>
                </Grid>
                <Grid item xs={2} className={classes.appGridTwo}>
                  <Typography variant="h6" component="div">
                    How it works
                  </Typography>
                </Grid>
                <Grid item xs={3} className={classes.appGridTwo}>
                  <Typography variant="h6" component="div">
                    Terms And Conditions
                  </Typography>
                </Grid>
                {isAuth() && (
                  <Grid item xs={1} mt={3}>
                    <Button
                      className={classes.root}
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#fff",
                        textTransform: "capitalize",
                      }}
                      onClick={authSignOut}
                    >
                      logOut
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
