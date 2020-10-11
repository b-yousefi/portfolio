import React, { useEffect } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { NavLink } from "react-router-dom";

const DrawerMenu = (props) => {
  const { open, toggleDrawer } = props;

  useEffect(() => {
    //do nothing just rerender
  }, [open]);

  const { classes } = props;

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
          <ListItem
            button
            color="inherit"
            component={NavLink}
            to="/home"
            onClick={() => toggleDrawer(false)}
          >
            <ListItemIcon>
              <HomeIcon />{" "}
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
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
