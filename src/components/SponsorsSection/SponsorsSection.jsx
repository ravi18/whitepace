import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import { apple, microsoft, slack, google } from "../../assets";

export default function SponsorsSection() {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 8 }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "3rem" },
          marginBottom: "80px",
        }}
        align="center"
        gutterBottom
      >
        Our sponsors
      </Typography>
      <Grid2 container justifyContent="space-evenly" spacing={2}>
        <Grid2 item>
          <img src={apple} alt="Apple Logo" style={{ height: "40px" }} />
        </Grid2>
        <Grid2 item>
          <img
            src={microsoft}
            alt="Microsoft Logo"
            style={{ height: "40px" }}
          />
        </Grid2>
        <Grid2 item>
          <img src={slack} alt="Slack Logo" style={{ height: "40px" }} />
        </Grid2>
        <Grid2 item>
          <img src={google} alt="Google Logo" style={{ height: "40px" }} />
        </Grid2>
      </Grid2>
    </Box>
  );
}
