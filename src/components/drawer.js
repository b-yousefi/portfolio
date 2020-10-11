import React, { useEffect } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import WorkIcon from "@material-ui/icons/Work";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { NavLink } from "react-router-dom";

const DrawerMenu = (props) => {
  const { open, toggleDrawer } = props;

  useEffect(() => {
    //do nothing just rerender
  }, [open]);

  const { classes } = props;

  const drawerItem = (title, path, icon) => {
    return (
      <ListItem
        button
        color="inherit"
        component={NavLink}
        to={path}
        onClick={() => toggleDrawer(false)}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    );
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div role="presentation" onKeyDown={() => toggleDrawer(false)}>
        <List>
          {drawerItem("Home", "/home", <HomeIcon />)}
          {drawerItem("Projects", "/projects", <CodeIcon />)}
          {drawerItem("Work Experiences", "/work-experiences", <WorkIcon />)}
          {drawerItem("About me", "/about")}
        </List>
      </div>
    </SwipeableDrawer>
  );
};

const useStyles = (theme) => ({
  drawerPaper: {
    width: "250px",
  },
});

export default withStyles(useStyles)(DrawerMenu);
