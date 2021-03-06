import React from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useStyles } from "../../styles/styles";
import Cards from "./Card"

export default function Featured() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl">
        <Box className={classes.title}>
          <Typography variant="p" component="p" color="text.secondary">
            JOIN OUR LEARN COURSES
          </Typography>
          <Typography variant="h2" component="h2" gutterBottom>
            Featured Online Courses
          </Typography>
        </Box>

        <Box>
          {/* Card */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Cards />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Cards />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Cards />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box className={classes.title}>
          <Typography variant="h5" style={{ color: "gray", fontWeight: "400" }}>
            Control your personal preference settings to get notified about
            appropriate courses
            <Button
              color="primary"
              className={classes.viewBtn}
              endIcon={<ArrowForwardIcon />}
            >
              View All Courses
            </Button>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
