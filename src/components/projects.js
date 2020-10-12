import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { projects } from "../data/projects";
import ProjectItem from "./projectItem";

const Projects = (props) => {
  const { classes } = props;

  const createProjectItem = (project) => {
    return (
      <Grid key={project.id} item xs={12} md={6}>
        <ProjectItem
          title={project.name}
          description={project.summary}
          images={project.images}
          sourceCodeLink={project.sourceCodeLink}
          id={project.id}
          tech={project.technologies}
        />
      </Grid>
    );
  };

  return (
    <div style={{ padding: 16 }}>
      <Grid container justify={"center"}>
        <Grid item container xs={12} md={8} spacing={3} justify={"center"}>
          {projects.map((project) => {
            return createProjectItem(project);
          })}
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = (theme) => ({
  item: {
    padding: 15,
  },
});

export default withStyles(useStyles)(Projects);
