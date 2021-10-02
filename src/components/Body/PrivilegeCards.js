import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

function PrivilegeCards() {
  return (
    <>
      <Typography
        variant="h3"
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Our Privilege Cards
      </Typography>
      <Grid container spacing={15}>
        <Grid item xs={6}>
          <Box
            style={{ float: "right", marginTop: 110 }}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 300,
                height: 500,
                borderRadius: "35px",
              },
            }}
          >
            <Paper
              elevation={3}
              style={{
                backgroundColor: "#cfcfcf",
              }}
            >
              <Paper
                elevation={3}
                style={{
                  width: "100%",
                  height: 500,
                  margin: -70,
                  borderRadius: 35,
                  boxShadow:
                    "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
                }}
              >
                <Grid container direction="column" spacing={2}>
                  <Grid item container direction="column" spacing={2} mt={0.2}>
                    <Grid item>
                      <Typography variant="h3" style={{ textAlign: "center" }}>
                        Gold
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        style={{ textAlign: "center", color: "#898989" }}
                      >
                        3 Years package
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container>
                    <Grid item xs={2} style={{ backgroundColor: "#e1e0e0" }}>
                      <Typography
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "rgb(104 99 99)",
                          fontSize: 20,
                          position: "absolute",
                          margin: "13px 0px 0px 70px",
                          // padding: 20,
                        }}
                      >
                        ₹
                      </Typography>
                    </Grid>
                    <Grid item xs={8} style={{ backgroundColor: "#e1e0e0" }}>
                      <Typography
                        variant="h1"
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "rgb(104 99 99)",
                          fontSize: 95,
                          padding: 20,
                        }}
                      >
                        399
                      </Typography>
                    </Grid>
                    <Grid item xs={2} style={{ backgroundColor: "#e1e0e0" }}>
                      <Typography
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "rgb(104 99 99)",
                          fontSize: 20,
                          position: "absolute",
                          margin: "88px 0px 0px -24px",
                        }}
                      >
                        / Year
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    spacing={1}
                    alignContent="center"
                  >
                    <Grid item>
                      <Typography variant="h5" style={{ color: "#a19d9a" }}>
                        Upto 25% Off
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" style={{ color: "#a19d9a" }}>
                        Monthly Coupons
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" style={{ color: "#a19d9a" }}>
                        Gift Vouchers
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" style={{ color: "#a19d9a" }}>
                        Daily Deals
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        style={{
                          color: "#898989",
                          fontWeight: "bold",
                          float: "right",
                          marginRight: -20,
                        }}
                      >
                        Grab it Now{" "}
                        <ArrowForwardRoundedIcon
                          style={{
                            margin: "0px -5px -7px 0px",
                            fontSize: 25,
                          }}
                        />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            style={{ marginTop: 110 }}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 300,
                height: 500,
                borderRadius: "35px",
              },
            }}
          >
            <Paper
              elevation={3}
              style={{
                backgroundColor: "#cfcfcf",
              }}
            >
              <Paper
                elevation={3}
                style={{
                  width: "100%",
                  height: 500,
                  margin: -70,
                  borderRadius: 35,
                  boxShadow:
                    "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
                }}
              >
                <Grid container direction="column" spacing={2}>
                  <Grid item container direction="column" spacing={2} mt={0.2}>
                    <Grid item>
                      <Typography variant="h3" style={{ textAlign: "center" }}>
                        Silver
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        style={{ textAlign: "center", color: "#898989" }}
                      >
                        3 Years package
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container>
                    <Grid item xs={2} style={{ backgroundColor: "#e1e0e0" }}>
                      <Typography
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "rgb(104 99 99)",
                          fontSize: 20,
                          position: "absolute",
                          margin: "13px 0px 0px 70px",
                          // padding: 20,
                        }}
                      >
                        ₹
                      </Typography>
                    </Grid>
                    <Grid item xs={8} style={{ backgroundColor: "#e1e0e0" }}>
                      <Typography
                        variant="h1"
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "rgb(104 99 99)",
                          fontSize: 95,
                          padding: 20,
                        }}
                      >
                        499
                      </Typography>
                    </Grid>
                    <Grid item xs={2} style={{ backgroundColor: "#e1e0e0" }}>
                      <Typography
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "rgb(104 99 99)",
                          fontSize: 20,
                          position: "absolute",
                          margin: "88px 0px 0px -24px",
                        }}
                      >
                        / Year
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    spacing={1}
                    alignContent="center"
                  >
                    <Grid item>
                      <Typography variant="h5" style={{ color: "#a19d9a" }}>
                        Upto 10% Off
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" style={{ color: "#a19d9a" }}>
                        Monthly Coupons
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" style={{ color: "#a19d9a" }}>
                        Gift Vouchers
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" style={{ color: "#a19d9a" }}>
                        Daily Deals
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        style={{
                          color: "#898989",
                          fontWeight: "bold",
                          float: "right",
                          marginRight: -20,
                        }}
                      >
                        Grab it Now{" "}
                        <ArrowForwardRoundedIcon
                          style={{
                            margin: "0px -5px -7px 0px",
                            fontSize: 25,
                          }}
                        />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default PrivilegeCards;
