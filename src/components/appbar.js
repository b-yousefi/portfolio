import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import MenuIcon from "@material-ui/icons/Menu";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import DrawerMenu from "./drawer";
import Hidden from "@material-ui/core/Hidden";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import WorkIcon from "@material-ui/icons/Work";
import { personalInfo } from "../data/personalInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(props.open);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon/>
          </IconButton>
          <Hidden xsDown>
            <Button
              color="inherit"
              component={NavLink}
              to="/home"
              startIcon={<HomeIcon />}
            >
              {personalInfo.fullName}
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/projects"
              startIcon={<CodeIcon />}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/work-experiences"
              startIcon={<WorkIcon />}
            >
              Work Experiences
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <DrawerMenu open={isDrawerOpen} toggleDrawer={setIsDrawerOpen} />
      {props.children}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};
