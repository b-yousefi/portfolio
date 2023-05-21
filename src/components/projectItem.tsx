import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { colors } from "../constants/colors";
import Chip from "./chip";
import Project from "../models/project";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";
import { Card, CardActionArea, CardMedia } from "@mui/material";

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const createTechStack = (techs: string[]) => {
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
    <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardHeader title={project.name} />
      <CardActionArea style={{ padding: 10 }}>
        <Carousel>
          {project.images.map((image, indx) => {
            return (
              <CardMedia
                image={image}
                title={project.name}
                key={indx}
                style={{
                  minHeight: 100,
                  width: "auto",
                  backgroundSize: "contain",
                }}
              />
            );
          })}
        </Carousel>
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          {createTechStack(project.technologies)}
          <Box display="flex" width="100%" alignItems={"center"}>
            <Box flexGrow={1} p={1}>
              <Button
                size="small"
                component={Link}
                href={`/projects/${project.id}`}
              >
                Learn More
              </Button>
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
        </Box>
      </CardActions>
    </Card>
  );
};
