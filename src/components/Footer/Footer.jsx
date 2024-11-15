import React from "react";
import { Box, Typography, Button, Grid2, Divider } from "@mui/material";
import { apple2, windows, android } from "../../assets";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0e346b",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Try Whitespace
        </Typography>
        <Typography variant="h5" mb={1}>
          today
        </Typography>
        <Typography variant="body1" mb={4}>
          Get started for free. Add your whole team as your needs grow.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6ab0ff",
            color: "#ffffff",
            fontWeight: "bold",
            marginTop: "24px",
            padding: "12px 24px",
            "&:hover": {
              backgroundColor: "#5a9ce6",
            },
          }}
        >
          Try Taskey free &rarr;
        </Button>
        <Typography mt={2}>On a big team? Contact sales</Typography>
        <Box display="flex" justifyContent="center" gap={4} mt={3}>
          <img
            style={{ width: "50px", height: "50px" }}
            alt="Apple logo"
            src={apple2}
          />
          <img
            style={{ width: "50px", height: "50px" }}
            alt="Windows logo"
            src={windows}
          />
          <img
            style={{ width: "50px", height: "50px" }}
            alt="Android logo"
            src={android}
          />
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "#0e346b", color: "white", py: 10 }}>
        <Grid2
          container
          spacing={4}
          justifyContent="space-between"
          px={{ xs: 2, sm: 4, md: 8 }}
        >
          <Grid2 item xs={12} md={2}>
            <Typography variant="h6" fontWeight="bold">
              Whitespace
            </Typography>
            <Typography variant="body2">
              Whitespace was created for the new ways we live and work. We make
              a better workspace around the world.
            </Typography>
          </Grid2>
          <Grid2 item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold">
              Product
            </Typography>
            <Typography variant="body2">Overview</Typography>
            <Typography variant="body2">Pricing</Typography>
            <Typography variant="body2">Customer stories</Typography>
          </Grid2>
          <Grid2 item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold">
              Resources
            </Typography>
            <Typography variant="body2">Blog</Typography>
            <Typography variant="body2">Guides & tutorials</Typography>
            <Typography variant="body2">Help center</Typography>
          </Grid2>
          <Grid2 item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold">
              Company
            </Typography>
            <Typography variant="body2">About us</Typography>
            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">Media kit</Typography>
          </Grid2>
          <Grid2 item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold">
              Try It Today
            </Typography>
            <Typography variant="body2">
              Get started for free. Add your whole team as your needs grow.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6ab0ff",
                color: "#ffffff",
                fontWeight: "bold",
                marginTop: "24px",
                padding: "12px 24px",
                "&:hover": {
                  backgroundColor: "#5a9ce6",
                },
              }}
            >
              Start Today &rarr;
            </Button>
          </Grid2>
        </Grid2>
        <Divider sx={{ my: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
        <Box textAlign="center">
          <Typography variant="body2">©2021 Whitespace LLC.</Typography>
          <Box display="flex" justifyContent="center" gap={2} mt={1}>
            <Typography variant="body2">English</Typography>
            <Typography variant="body2">Terms & privacy</Typography>
            <Typography variant="body2">Security</Typography>
            <Typography variant="body2">Status</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
