import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import { personalInfo } from "../data/personalInfo";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Box flexDirection={"column"} display="flex" m={1} p={2}>
        <Box display="flex" justifyContent="center">
          <Avatar
            alt={personalInfo.fullName}
            src={personalInfo.pic.src}
            style={{ width: 150, height: 150 }}
          />
        </Box>
        <Box flexDirection={"column"}>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h4" align={"center"}>
              {personalInfo.fullName}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h4" align={"center"}>
              {personalInfo.role}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h5" align={"center"}>
              {personalInfo.education}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" paddingLeft={5} paddingRight={5}>
            <Typography variant="body1" align={"justify"}>
              {personalInfo.summary}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" m={2}>
            <Typography variant="h6" align={"center"} color={"#e91e63"}>
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
              color={"info"}
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

export default Home;
