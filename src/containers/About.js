import { useEffect } from "react";
import { Container, Button } from "@mui/material";
import Typography from "../components/Typography";
import { ABOUT } from "../utils/constants";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  //scroll to top when page is navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container component="section" sx={{ mt: 8, mb: 4, textAlign: "center" }}>
      <Typography variant="h4" marked="center" gutterBottom>
        {ABOUT.title}
      </Typography>
      {ABOUT.description.map((paragraph, index) => (
        <Typography variant="body1" m={5} key={index}>
          {paragraph}
        </Typography>
      ))}
      <Button
        variant="contained"
        onClick={() => navigate("/contact")}
        sx={{ textTransform: "none", mb: 5 }}
      >
        {ABOUT.button}
      </Button>
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
