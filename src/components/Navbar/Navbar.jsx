import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { logo } from "../../assets";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#0e346b", padding: "0 16px" }}
    >
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ width: "150px", height: "24px", marginRight: "8px" }}
          />
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button sx={{ color: "#ffffff" }}>Products</Button>
          <Button sx={{ color: "#ffffff" }}>Solutions</Button>
          <Button sx={{ color: "#ffffff" }}>Resources</Button>
          <Button sx={{ color: "#ffffff", paddingRight: "50px" }}>
            Pricing
          </Button>
        </Box>

        <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
          <Button
            sx={{
              backgroundColor: "#f9e2b0",
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
          <Button
            sx={{
              backgroundColor: "#6ab0ff",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            Try Whitespace free
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
