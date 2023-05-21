import React from "react";
import { Grid } from "@mui/material";
import { WorkItem } from "../components/workItem";

import { works } from "../data/works";

const WorkExperiences = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" p={5}>
      {works.map((work) => {
        return <WorkItem work={work} key={work.id} />;
      })}
    </Grid>
  );
};

export default WorkExperiences;
