import * as React from "react";
import { Container } from "@mui/material";
import Banner from "../components/Banner";
import {
  BANNER_DESCRIPTION,
  BANNER_TITLE,
  MAIN_ACTION_BUTTON,
} from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onMainActionClick = () => {
    navigate("/contact");
  };

  return (
    <Container>
      <Banner
        title={BANNER_TITLE}
        description={BANNER_DESCRIPTION}
        image="MichelleCafe.jpg"
        buttonText={MAIN_ACTION_BUTTON}
        onButtonClick={onMainActionClick}
      />
    </Container>
  );
};

export default Home;
