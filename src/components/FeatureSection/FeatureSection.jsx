import React from "react";
import { Box, Typography, Button, Grid2 } from "@mui/material";
import { waveform2 } from "../../assets";

export default function FeatureSection() {
  return (
    <Box sx={{ backgroundColor: "#0e346b" }} color="common.white" py={8} px={2}>
      <Grid2
        container
        spacing={4}
        alignItems="center"
        justifyContent="flex-start"
        textAlign="center"
      >
        {" "}
        <Grid2 item xs={12} md={5} textAlign="center">
          <Box
            component="img"
            src={waveform2}
            alt="Feature image"
            sx={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "8px",
            }}
          />
        </Grid2>
        <Grid2 item xs={12} md={7}>
          <Typography
            variant="h3"
            fontWeight="bold"
            component="h1"
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Your work, <span style={{ color: "#90caf9" }}>everywhere</span> you
            are
          </Typography>
          <Typography variant="body1" mt={2} maxWidth="600px" mx="auto">
            Access your notes from your computer, phone, or tablet by
            synchronizing with various services, including whitespace, Dropbox,
            and OneDrive. The app is available on Windows, macOS, Linux,
            Android, and iOS. A terminal app is also available!
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
            Try Taskey &rarr;
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}
