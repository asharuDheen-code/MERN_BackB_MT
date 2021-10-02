import React from "react";
import { Typography, Box, Grid, CardMedia } from "@mui/material";
import logo from "../../assets/images/cropped-LOGO-VALUE 3.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <>
      <Box
        style={{
          backgroundColor: "#141212",
          color: "#fff",
          marginTop: 60
        }}
      >
        <Grid container direction="column">
          <Grid item container style={{ padding: "20px 0px 0px 60px" }}>
            <Grid item container direction="column" xs={4} spacing={1}>
              <Grid item>
                <CardMedia
                  component="img"
                  image={logo}
                  alt="green iguana"
                  style={{
                    height: 114,
                    width: 120,
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  style={{ width: 330, color: "#838f91", fontWeight: "bold" }}
                >
                  Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce
                  eu rhoncus augue. Fusce vel metus pharetra, fermentum
                </Typography>
              </Grid>
              <Grid item container style={{ color: "#838f91" }}>
                <Grid item xs={1}>
                  <GoogleIcon />
                </Grid>
                <Grid item xs={1}>
                  <FacebookIcon />
                </Grid>
                <Grid item xs={1}>
                  <TwitterIcon />
                </Grid>
                <Grid item xs={1}>
                  <InstagramIcon />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container direction="column" xs={3} spacing={2} mt={5.5}>
              <Grid item>
                <Typography style={{ fontWeight: "bold", fontSize: 17 }}>
                  Contact Us
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="column"
                spacing
                style={{ color: "#838f91", fontWeight: "bold" }}
              >
                <Grid item> +91 9865963236 </Grid>
                <Grid item> Starcard@gmail.com </Grid>
                <Grid item> Address </Grid>
                <Grid item> 1107 Geneva Street New York NY 10016</Grid>
              </Grid>
            </Grid>
            <Grid item container direction="column" xs={4} spacing={2} mt={5.5}>
              <Grid item>
                <Typography style={{ fontWeight: "bold", fontSize: 17 }}>
                  Starcard Links
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="column"
                spacing={1.5}
                style={{ color: "#838f91", fontWeight: "bold" }}
              >
                <Grid item> Home </Grid>
                <Grid item> About Us </Grid>
                <Grid item> Sell </Grid>
                <Grid item> Contact Us</Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item p={2}>
            <Typography
              variant="h4"
              style={{
                lineHeight: "35px",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#838f91",
              }}
            >
              © 2019 Designed by
              <Typography
                variant="span"
                style={{ color: "#35358b", marginLeft: 4 }}
              >
                BackB Solutions
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
