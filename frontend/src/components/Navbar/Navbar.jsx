import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavbarItems } from "../Consts/navbaritems";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
      <List>
        {mainNavbarItems.map((item, index) => (
          <ListItem button key={item.id} onClick={() => navigate(item.route)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "white" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            {/* Add this Link wrapper */}
            T6 Itinerary Planner
          </Link>
        </Typography>
        {!isMobile && (
          <Box sx={{ display: "flex" }}>
            {mainNavbarItems.map((item, index) => (
              <Button
                color="inherit"
                key={item.id}
                onClick={() => navigate(item.route)}
                startIcon={item.icon}
                sx={{ marginLeft: 2, color: "white" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
