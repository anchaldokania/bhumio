import React from "react";
import { Link } from "react-router-dom";

import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 140;
const menu = [
  { name: "Home", link: "dashboard" },
  { name: "PDF report", link: "report/pdfreport" },
  { name: " Chart Reports", link: "report/allprojectbudgetplot" },
];

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {menu.map((menu) => (
          <ListItem key={menu.name} disablePadding>
            <Link to={`/${menu.link}`}>
              <ListItemButton>
                <ListItemText primary={menu.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
