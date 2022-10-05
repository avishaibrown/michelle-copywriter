import * as React from "react";
import { Container, Typography } from "@mui/material";
import { ABOUT } from "../utils/constants";
import { Box } from "@mui/system";

const About = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center">
        {ABOUT.title}
      </Typography>
      <Typography variant="body1" mb={3}>
        {ABOUT.description}
      </Typography>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 300 },
            maxWidth: { xs: 300 },
            borderRadius: "100%",
          }}
          alt={ABOUT.title}
          src={ABOUT.image}
        />
      </Container>
    </Container>
  );
};

export default About;
