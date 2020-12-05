import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";
import { personalInfo } from "../data/personalInfo";

const useStyles = (theme) => ({
  root: {
    backgroundColor: "#f5f8fa",
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
    <div style={{ width: "100%" }}>
      <Box flexDirection={"column"} display="flex" m={1} p={2}>
        <Box display="flex" justifyContent="center">
          <Avatar
            alt={personalInfo.fullName}
            src={personalInfo.pic}
            className={classes.picture}
          />
        </Box>
        <Box flexDirection={"column"} className={classes.detail}>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h4" align={"justify"}>
              {personalInfo.fullName}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h4" align={"justify"}>
              {personalInfo.role}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h5" align={"justify"}>
              {personalInfo.education}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography variant="body1" align={"justify"}>
              {personalInfo.summary}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" align={"justify"} className={classes.role}>
              {personalInfo.lookingFor}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" p={2} flexWrap="wrap">
          <Box m={1}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<GitHubIcon />}
              href={personalInfo.githubAccountUrl}
            >
              Github
            </Button>
          </Box>
          <Box m={1}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<LinkedInIcon />}
              href={personalInfo.linkedInAccountUrl}
            >
              LinkedIn
            </Button>
          </Box>
          <Box m={1}>
            <Button
              variant="contained"
              style={{ textAlign: "center" }}
              href={"https://byousefi.ir/bookshop/"}
            >
              Sample Project
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default withStyles(useStyles)(Home);
