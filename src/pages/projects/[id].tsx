import React from "react";
import { projects } from "../../data/projects";
import Box from "@mui/material/Box";
import Chip from "../../components/chip";
import { colors } from "../../constants/colors";
import CardHeader from "@mui/material/CardHeader";
import Carousel from "react-material-ui-carousel";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/router";
import { Card, CardActionArea } from "@mui/material";

const ProjectPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find((p) => p.id === Number(id));

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

  if (!project) {
    return <div />;
  }
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <CardHeader title={project.name} />
      <CardActionArea style={{padding: 10}}>
        <Carousel
          indicators={true}
          navButtonsAlwaysVisible={true}
        >
          {project.images.map((image, indx) => {
            return (
              <CardMedia
                component="img"
                image={image}
                title={project.name}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "300",
                  height: "200",
                  maxHeight: 400,
                  objectFit: "contain"
                }}
                key={indx}
              />
            );
          })}
        </Carousel>
      </CardActionArea>

      <CardContent>
        <Typography variant="body2" component="p" margin={2}>
          {project.summary}
        </Typography>

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
      </CardContent>
    </Card>
  );
};

export default ProjectPage;
