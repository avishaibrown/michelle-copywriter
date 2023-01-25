import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";
import WhatIDo from "./WhatIDo";
import WorkWithMe from "./WorkWithMe";
import CallToAction from "./CallToAction";
import Portfolio from "../Portfolio";
import { Container } from "@mui/material";
import { HOME } from "../../utils/constants";
import HomeAbout from "./HomeAbout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container component="section" disableGutters maxWidth={false}>
      <Hero
        title={HOME.hero.titles}
        description={HOME.hero.description}
        image={HOME.hero.image}
        buttonText={HOME.hero.button}
        onButtonClick={() => navigate("/contact")}
      />
      <HomeAbout />
      <WhatIDo />
      <Portfolio isHomePage={true} />
      <WorkWithMe />
      <CallToAction />
    </Container>
  );
};

export default Home;
