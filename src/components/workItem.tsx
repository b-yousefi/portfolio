import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Work from "../models/work";

interface WorkItemProps {
   work: Work
}

export const WorkItem: React.FC<WorkItemProps> = ({work}) => {
  return (
    <Grid key={work.id} item md={8} xs={12} padding={2}>
      <Paper  style={{padding:20}}>
        <Box display="flex" flexDirection={"column"}>
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
