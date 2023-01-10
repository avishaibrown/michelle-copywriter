import FeaturedProjects from "../components/FeaturedProjects";
import Typography from "../components/Typography";
import { Container } from "@mui/material";
import { PORTFOLIO } from "../utils/constants";

const Portfolio = () => {
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
