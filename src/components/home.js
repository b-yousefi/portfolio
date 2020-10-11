import React from "react";
import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import pic from "../images/BehnazYousefi.jpg";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  grid: {
    backgroundColor: "#f5f8fa",
    padding: 10,
  },
  headerDetail: {
    padding: 10,
  },
  picture: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  role: {
    color: "#e91e63",
  },
});

const Home = (props) => {
  const { classes } = props;
  return (
    <Grid container justify={"center"} className={classes.grid}>
      <Grid item xs={4} md={2}>
        <Box className={classes.headerDetail}>
          <Avatar alt="Behnaz Yousefi" src={pic} className={classes.picture} />
        </Box>
      </Grid>
      <Grid item md={8}>
        <Box flexDirection={"column"} className={classes.headerDetail}>
          <Typography variant="h4" align={"justify"}>
            Full Stack Developer
          </Typography>
          <Typography variant="h5" align={"justify"}>
            Master Degree in Software Engineering
          </Typography>
          <Typography variant="body1" align={"justify"}>
            Self-motivated, well-organized and highly-skilled software developer
            with 3+ years of professional programming experience
          </Typography>
          <Typography variant="h6" align={"justify"} className={classes.role}>
            Looking for a Full-Stack (Spring, React.js), Back-end (Spring) or
            Frond-end (React.js) role
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Home);
