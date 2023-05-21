import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import DrawerMenu from "./drawer";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import { personalInfo } from "../data/personalInfo";
import router from "next/router";
import ScrollTop from "./ScrollTop";

interface AppbarProps {
  open: boolean;
  // children: React.ReactNode;
}

export default function Appbar(props: AppbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(props.open);

  const navigateTo = (path: string) => () => {
    router.push(path);
    setIsDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Hidden smDown>
            <Button
              color="inherit"
              onClick={navigateTo("/home")}
              startIcon={<HomeIcon />}
            >
              {personalInfo.fullName}
            </Button>
            <Button
              color="inherit"
              onClick={navigateTo("/projects")}
              startIcon={<CodeIcon />}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              onClick={navigateTo("/work-experiences")}
              startIcon={<WorkIcon />}
            >
              Work Experiences
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <DrawerMenu
        open={isDrawerOpen}
        toggleDrawer={setIsDrawerOpen}
        navigateTo={navigateTo}
      />
      <ScrollTop />
    </React.Fragment>
  );
}
