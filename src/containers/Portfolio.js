import { useEffect } from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import Typography from "../components/Typography";
import { Container } from "@mui/material";
import { PORTFOLIO } from "../utils/constants";
import CallToAction from "./Home/CallToAction";

const Portfolio = (props) => {
  const { isHomePage } = props;
  //scroll to top when page is navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      sx={{
        mt: isHomePage ? 10 : { xs: 20, md: 30 },
        alignItems: "center",
        textAlign: "center",
      }}
      disableGutters
      maxWidth={false}
    >
      <Typography
        variant="h2"
        marked="center"
        gutterBottom
        sx={{ fontSize: { xs: "3rem", md: "3.75rem" } }}
      >
        {PORTFOLIO.title}
      </Typography>
      <FeaturedProjects projects={PORTFOLIO.projects} />
      {!isHomePage && <CallToAction />}
    </Container>
  );
};

export default Portfolio;
