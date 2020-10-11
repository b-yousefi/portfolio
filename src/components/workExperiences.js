import React from "react";
import { Grid, Typography, Paper, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";

import { works } from "../data/works";

const WorkExperiences = (props) => {
  const { classes } = props;

  const createWorkItem = (work) => {
    return (
      <Grid key={work.id} item md={8} xs={12}>
        <Paper className={classes.item}>
          <Box display="flex" className={classes.job} flexDirection={"column"}>
            <Typography variant="h6" align={"justify"}>
              {work.jobTitle}
            </Typography>
            <Typography variant="subtitle1" align={"justify"}>
              {work.companyName}
            </Typography>
            <Typography
              variant="subtitle1"
              align={"justify"}
              color={"textSecondary"}
            >
              {work.readableStartDate} - {work.readableEndDate}
            </Typography>
            <Typography
              variant="subtitle1"
              align={"justify"}
              color={"textSecondary"}
            >
              {work.location}
            </Typography>
          </Box>
          {work.tasks.map((task) => {
            return (
              <Box display="flex" p={1} alignItems="center">
                <Box m={1}>
                  <CheckIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="body2" align={"justify"}>
                    {task}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Paper>
      </Grid>
    );
  };

  return (
    <div style={{ padding: 16 }}>
      <Grid container xs={12} spacing={2} justify={"center"} m={10}>
        {works.map((work) => {
          return createWorkItem(work);
        })}
      </Grid>
    </div>
  );
};

const useStyles = (theme) => ({
  root: {
    padding: 16,
    margin: "auto",
    maxWidth: 450,
  },
  item: {
    padding: 15,
  },
  job: {
    paddingLeft: 20,
  },
});

export default withStyles(useStyles)(WorkExperiences);
