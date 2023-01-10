import * as React from "react";
import { Container } from "@mui/material";
import Typography from "../components/Typography";
import { ABOUT } from "../utils/constants";
import { Box } from "@mui/system";

const About = () => {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }} maxWidth={"md"}>
      <Typography variant="h4" marked="center" align="center" gutterBottom>
        {ABOUT.title}
      </Typography>
      <Typography variant="body1" m={5}>
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
