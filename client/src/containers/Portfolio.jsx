import * as React from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import { Container, Typography, Grid } from "@mui/material";
import { PORTFOLIO } from "../utils/constants";

//TODO: Get projects from database

const Portfolio = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {PORTFOLIO.title}
      </Typography>
      <Grid container spacing={4}>
        {PORTFOLIO.projects.map((project) => (
          <FeaturedProjects key={project.title} project={project} />
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
