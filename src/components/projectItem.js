import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { colors } from "../constants/colors";
import Chip from "./chip";

const ProjectItem = (props) => {
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
    <Paper className={classes.root}>
      <Grid
        container
        item
        xs={12}
        direction="column"
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        <Grid item>
          <CardHeader title={props.title} />
        </Grid>
        <Grid item>
          <Carousel>
            {props.images.map((image, indx) => {
              return (
                <CardMedia
                  className={classes.media}
                  image={image}
                  title={props.title}
                  key={indx}
                />
              );
            })}
          </Carousel>
        </Grid>
        <Grid item>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              {createTechStack(props.tech)}
              <Box display="flex" width="100%" alignItems={"center"}>
                <Box flexGrow={1} p={1}>
                  <Button
                    size="small"
                    component={Link}
                    to={{
                      pathname: `/projects/${props.id}`,
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
                {props.sourceCodeLink && (
                  <Box>
                    <IconButton
                      aria-label="go to github account"
                      href={props.sourceCodeLink}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </Box>
          </CardActions>
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyles = (theme) => ({
  root: {
    height: "100%",
  },
  media: {
    minHeight: 180,
    width: "auto",
    backgroundSize: "contain",
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export default withStyles(useStyles)(ProjectItem);
