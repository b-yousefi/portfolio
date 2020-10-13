import React from "react";

import { projects } from "../data/projects";
import Box from "@material-ui/core/Box";
import Chip from "./chip";
import { colors } from "../constants/colors";
import CardHeader from "@material-ui/core/CardHeader";
import Carousel from "react-material-ui-carousel";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";

const Project = (props) => {
  const projectId = props.match.params.id;
  const project = projects.find((p) => p.id === Number(projectId));
  const { classes } = props;

  const createTechStack = (techs) => {
    return (
      <Box flexDirection="row" display="flex" flexWrap="wrap">
        {techs.map((item, indx) => {
          return (
            <Box style={{ margin: 5 }} key={indx}>
              <Chip title={item} color={colors[indx % colors.length]} />
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <div style={{ padding: 16 }}>
      <Box
        flexDirection={"column"}
        display="flex"
        m={1}
        p={2}
        alignItems="center"
      >
        <Box>
          <CardHeader title={project.name} />
        </Box>
        <Box style={{ width: "100%" }}>
          <Carousel>
            {project.images.map((image, indx) => {
              return (
                <CardMedia
                  className={classes.media}
                  image={image}
                  title={project.name}
                  key={indx}
                />
              );
            })}
          </Carousel>
        </Box>
        <Box>
          <CardContent>
            <Typography variant="body2" component="p">
              {project.summary}
            </Typography>
          </CardContent>
        </Box>
        <Box>{createTechStack(project.technologies)}</Box>
        <Box style={{ alignSelf: "flex-start" }}>
          {project.description.map((item, indx) => {
            return (
              <Box display="flex" p={1} alignItems="center" key={indx}>
                <Box m={1}>
                  <CheckIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="body2" align={"justify"}>
                    {item}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        {project.sourceCodeLink && (
          <Box>
            <IconButton
              aria-label="go to github account"
              href={project.sourceCodeLink}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </div>
  );
};

const useStyles = (theme) => ({
  root: {
    height: "100%",
  },
  media: {
    minHeight: 300,
    width: "auto",
    backgroundSize: "contain",
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export default withStyles(useStyles)(Project);
