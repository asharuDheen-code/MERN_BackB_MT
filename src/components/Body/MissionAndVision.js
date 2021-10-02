import React from "react";
import { Box, CardMedia, Grid, Paper, Typography } from "@mui/material";
import Ellipse from "../../assets/images/Ellipse 123.png";
import EllipseTwo from "../../assets/images/Ellipse 124.png";
function MissionAndVision() {
  return (
    <Grid container p={6}>
      <Grid item xs={6}>
        <Box
          style={{ justifyContent: "center" }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 600,
              height: 330,
              borderRadius: "70px",
              backgroundColor: "#6c6cf3",
            },
          }}
        >
          <Paper elevation={3}>
            <Grid container direction="column" spacing={2} p={5}>
              <Grid item>
                <CardMedia
                  component="img"
                  image={Ellipse}
                  alt="green iguana"
                  style={{
                    height: 110,
                    width: 105,
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "x-large",
                    color: "#fff",
                  }}
                >
                  Our Mission
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: 17,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          style={{ justifyContent: "center" }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 600,
              height: 330,
              borderRadius: "70px",
              backgroundColor: "#6c6cf3",
            },
          }}
        >
          <Paper elevation={3}>
            <Grid container direction="column" spacing={2} p={5}>
              <Grid item>
                <CardMedia
                  component="img"
                  image={EllipseTwo}
                  alt="green iguana"
                  style={{
                    height: 110,
                    width: 105,
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "x-large",
                    color: "#fff",
                  }}
                >
                  Our Vision
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: 17,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MissionAndVision;
