import * as React from "react";
import { Container, Grid, Button } from "@mui/material";
import Typography from "../components/Typography";
import Banner from "../components/Banner";
import { HOME } from "../utils/constants";
import { useNavigate } from "react-router-dom";

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
      <Grid>
        {HOME.aboutDescription.map((paragraph) => (
          <Typography variant="body1" m={5}>
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
    </Container>
  );
};

export default Home;
