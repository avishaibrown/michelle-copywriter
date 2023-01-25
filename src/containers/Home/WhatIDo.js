import { Box, Container } from "@mui/material";
import Typography from "../../components/Typography";
import HomeServices from "../../components/HomeServices";
import { HOME } from "../../utils/constants";

const WhatIDo = () => {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "#F6F6F6", overflow: "hidden" }}
    >
      <Container
        sx={{
          my: 10,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src="./wallpaper-curvy-lines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Typography
          variant="h2"
          marked="center"
          gutterBottom
          sx={{ fontSize: { xs: "3rem", md: "3.75rem" } }}
        >
          {HOME.whatIDo.title}
        </Typography>
        <HomeServices
          items={HOME.whatIDo.items}
          largeTiles={false}
          includeDescriptions={false}
        />
      </Container>
    </Box>
  );
};

export default WhatIDo;
