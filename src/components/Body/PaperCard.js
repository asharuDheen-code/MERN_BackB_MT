import React from "react";
import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import cartoonOne from "../../assets/images/user 1.png";
import cartoonTwo from "../../assets/images/shop 2.png";
import cartoonThree from "../../assets/images/gift 3.png";

function PaperCard() {
  return (
    <Paper elevation={3} style={{ borderRadius: 40 }}>
      <Grid container style={{ height: 170 }}>
        <Grid item container xs={4} spacing={3}>
          <Grid
            item
            xs={5}
            style={{
              alignSelf: "center",
              textAlign: "-webkit-right",
            }}
          >
            <CardMedia
              component="img"
              image={cartoonOne}
              alt="green iguana"
              style={{
                height: 70,
                width: 70,
              }}
            />
          </Grid>
          <Grid item container direction="column" xs={7} alignSelf="center">
            <Grid item>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                3000 +
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" style={{ color: "#b5bfbf" }}>
                Satisfied Customers
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={4} spacing={3}>
          <Grid
            item
            xs={5}
            style={{
              alignSelf: "center",
              textAlign: "-webkit-right",
            }}
          >
            <CardMedia
              component="img"
              image={cartoonTwo}
              alt="green iguana"
              style={{
                height: 70,
                width: 70,
              }}
            />
          </Grid>
          <Grid item container direction="column" xs={7} alignSelf="center">
            <Grid item>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                2300 +
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" style={{ color: "#b5bfbf" }}>
                Partnered Shops
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={4} spacing={3}>
          <Grid
            item
            xs={5}
            style={{
              alignSelf: "center",
              textAlign: "-webkit-right",
            }}
          >
            <CardMedia
              component="img"
              image={cartoonThree}
              alt="green iguana"
              style={{
                height: 70,
                width: 70,
              }}
            />
          </Grid>
          <Grid item container direction="column" xs={7} alignSelf="center">
            <Grid item>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                3650 +
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" style={{ color: "#b5bfbf" }}>
                Gift Winners
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PaperCard;
