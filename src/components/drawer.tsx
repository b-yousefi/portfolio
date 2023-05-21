import React, { MouseEventHandler, useEffect } from "react";
import {
  List,
  ListItemText,
  ListItemIcon,
  SwipeableDrawer,
  ListItemButton,
} from "@mui/material";
import { Home, Info, Work, Code } from "@mui/icons-material";

interface DrawerMenuProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
  navigateTo: (path: string) => MouseEventHandler<HTMLDivElement>;
}

const DrawerMenu: React.FC<DrawerMenuProps> = (props) => {
  const { open, toggleDrawer, navigateTo } = props;

  useEffect(() => {
    // do nothing, just re-render
  }, [open]);

  const drawerItem = (title: string, path: string, icon?: React.ReactNode) => {
    return (
      <ListItemButton onClick={navigateTo(path)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    );
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
    >
      <List>
        {drawerItem("Home", "/home", <Home />)}
        {drawerItem("Projects", "/projects", <Code />)}
        {drawerItem("Work Experiences", "/work-experiences", <Work />)}
        {drawerItem("About me", "/about", <Info />)}
      </List>
    </SwipeableDrawer>
  );
};

export default DrawerMenu;
