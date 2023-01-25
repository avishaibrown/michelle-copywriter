import { useEffect } from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import Typography from "../components/Typography";
import { Container } from "@mui/material";
import { PORTFOLIO } from "../utils/constants";

const Portfolio = (props) => {
  const { isHomePage } = props;
  //scroll to top when page is navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      sx={{
        my: !isHomePage && { xs: 20, md: 30 },
        mt: isHomePage && 10,
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
    </Container>
  );
};

export default Portfolio;
