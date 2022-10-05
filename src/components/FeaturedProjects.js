import * as React from "react";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

const FeaturedProjects = (props) => {
  const { project } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {project.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {project.description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={project.image}
            alt={project.title}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default FeaturedProjects;
