import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { waveform, hero } from "../../assets";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0e346b",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        textAlign: { xs: "center", md: "left" },
        padding: { xs: "40px 16px", md: "80px 32px" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${waveform})`,
          backgroundSize: "cover",
          opacity: 0.1,
          zIndex: 1,
        }}
      />

      <Box sx={{ zIndex: 2, maxWidth: "600px", flex: 1 }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Get More Done with whitepace
        </Typography>
        <Typography sx={{ marginTop: "16px", fontSize: "1rem" }}>
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
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
          Try Whitespace free
        </Button>
      </Box>

      <Box
        component="img"
        src={hero}
        alt="Hero"
        sx={{
          width: { xs: "100%", md: "50%" },
          maxWidth: "700px",
          marginTop: { xs: "40px", md: 0 },
          zIndex: 2,
          flex: 1,
        }}
      />
    </Box>
  );
};

export default HeroSection;
