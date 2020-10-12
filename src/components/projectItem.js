import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
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

const ProjectItem = (props) => {
  const { classes } = props;

  const colors = [
    "#e91e63",
    "#d32f2f",
    "#ff6f00",
    "#455a64",
    "#2e7d32",
    "#1b1481",
    "#00838f",
    "#1b5e20",
    "#616161",
    "#47fced",
  ];

  const createTechStack = (techs) => {
    return (
      <Box flexDirection="row" display="flex" flexWrap="wrap">
        {techs.map((item, indx) => {
          return (
            <Box style={{ margin: 5 }} key={indx}>
              <div
                style={{
                  display: "inline-block",
                  padding: "0 25px",
                  height: "30px",
                  fontSize: "16px",
                  lineHeight: "30px",
                  borderRadius: "25px",
                  backgroundColor: colors[indx % colors.length],
                  color: "white",
                }}
              >
                {item}
              </div>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={props.title} subheader={createTechStack(props.tech)} />
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

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </CardActions>
    </Card>
  );
};

const useStyles = (theme) => ({
  root: {
    height: "100%",
  },
  media: {
    height: 180,
    width: "auto",
    backgroundSize: "contain",
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export default withStyles(useStyles)(ProjectItem);
