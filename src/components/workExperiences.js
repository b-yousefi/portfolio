import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import WorkItem from "./workItem";

import { works } from "../data/works";

const WorkExperiences = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify={"center"} m={10}>
        {works.map((work) => {
          return <WorkItem work={work} />;
        })}
      </Grid>
    </div>
  );
};

const useStyles = (theme) => ({
  root: {
    padding: 16,
  },
});

export default withStyles(useStyles)(WorkExperiences);
