import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { bullImg } from "../../assets";
import "./Navbar.css";
import { Typography } from "@mui/material";

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="navbar"
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <div className="image-wrapper">
            <img className="navbar-icon" src={bullImg} alt="bull icon" />
          </div>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="brand-name"
          >
            Sensibull
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
