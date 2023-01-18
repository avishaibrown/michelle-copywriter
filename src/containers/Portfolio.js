import { useEffect } from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import Typography from "../components/Typography";
import { Container } from "@mui/material";
import { PORTFOLIO } from "../utils/constants";

const Portfolio = () => {
  //scroll to top when page is navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center">
        {PORTFOLIO.title}
      </Typography>
      <FeaturedProjects projects={PORTFOLIO.projects} />
    </Container>
  );
};

export default Portfolio;
