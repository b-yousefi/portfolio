import React from "react";
import { Grid } from "@mui/material";
import { projects } from "../data/projects";
import { ProjectItem } from "../components/projectItem";
import Project from "../models/project";

const Projects = () => {
  const createProjectItem = (project: Project) => {
    return (
      <Grid key={project.id} item xs={12} md={6}>
        <ProjectItem project={project} />
      </Grid>
    );
  };

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center" p={5}>
        <Grid item container xs={12} md={8} spacing={3} justifyContent="center">
          {projects.map((project) => {
            return createProjectItem(project);
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
