import * as React from "react";
import { Container, Grid, Box, Button } from "@mui/material";
import Typography from "../components/Typography";
import Banner from "../components/Banner";
import { HOME } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import HomeServices from "../components/HomeServices";
import CustomizedTimeline from "../components/Timeline";

//TODO: Remove banner, just have photo on left with catchy heading on right
//TODO: Add About section - see onepirate ProductValues.js

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container component="section">
      <Banner
        title={HOME.bannerTitles}
        description={HOME.bannerDescription}
        image="home-photo.jpg"
        buttonText={HOME.bannerButton}
        onButtonClick={() => navigate("/contact")}
      />

      <Box
        component="section"
        sx={{ display: "flex", bgcolor: "#FFF5F8", overflow: "hidden" }}
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
          <Typography variant="h4" marked="center" gutterBottom>
            {HOME.servicesTitle}
          </Typography>
          <HomeServices
            items={HOME.servicesItems}
            largeTiles={false}
            includeDescriptions={false}
          />
        </Container>
      </Box>

      <Grid>
        {HOME.aboutDescription.map((paragraph, index) => (
          <Typography key={index} variant="body1" m={5}>
            {paragraph}
          </Typography>
        ))}
        <Button
          variant="contained"
          onClick={() => navigate("/about")}
          sx={{ textTransform: "none", ml: 5 }}
        >
          {HOME.aboutButton}
        </Button>
      </Grid>
      <Grid sx={{ mt: 8, mb: 4, textAlign: "center" }}>
        <Typography variant="h4" marked="center" gutterBottom>
          {HOME.processTitle}
        </Typography>
        <CustomizedTimeline items={HOME.processSteps} />
      </Grid>
    </Container>
  );
};

export default Home;
