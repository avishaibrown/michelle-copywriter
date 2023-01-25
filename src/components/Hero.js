import * as React from "react";
import Button from "../components/Button";
import Typography from "./Typography";
import HeroLayout from "./HeroLayout";
import MovingText from "react-moving-text";

const Hero = (props) => {
  const { title, description, image, buttonText, onButtonClick } = props;

  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${image})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <img style={{ display: "none" }} src={image} alt="increase priority" />

      <Typography
        color="inherit"
        align="center"
        marked="center"
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
        }}
      >
        {title.map((line) => (
          <MovingText
            type="fadeInFromTop"
            duration="1500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            {line}
          </MovingText>
        ))}
      </Typography>
      <Typography
        color="inherit"
        align="center"
        sx={{
          typography: { xs: "h6", md: "h5", lg: "h4" },
          mb: 4,
          mt: { xs: 4, sm: 6, md: 8, lg: 10 },
        }}
      >
        <MovingText
          type="fadeIn"
          duration="5000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          {description}
        </MovingText>
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        onClick={onButtonClick}
        sx={{ minWidth: 200 }}
      >
        {buttonText}
      </Button>
    </HeroLayout>
  );
};

export default Hero;
