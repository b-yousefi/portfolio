import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { withStyles } from "@material-ui/core/styles";

const WorkItem = (props) => {
  const { classes, work } = props;

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
        {work.tasks.map((task, indx) => {
          return (
            <Box display="flex" p={1} alignItems="center" key={indx}>
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

const useStyles = (theme) => ({
  item: {
    padding: 15,
  },
  job: {
    paddingLeft: 20,
  },
});

export default withStyles(useStyles)(WorkItem);
