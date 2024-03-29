import { useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { ABOUT } from "../utils/constants";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  //scroll to top when page is navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      sx={{
        mt: { xs: 20, md: 30 },
        mb: { md: 10 },
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
        sx={{ fontSize: { xs: "3rem", md: "3.75rem" }, mb: 10 }}
      >
        {ABOUT.title}
      </Typography>
      <Grid container mb={{ xs: 2, lg: 10 }}>
        <Grid item xs={12} lg={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "right" },
            }}
          >
            <Box
              component="img"
              alt={ABOUT.title}
              src={ABOUT.image}
              sx={{
                maxHeight: { xs: 500, md: 800 },
                maxWidth: { xs: 300, md: 480 },
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ float: { xs: "none", xl: "left" }, textAlign: "left" }}
          mx={5}
        >
          {ABOUT.description.map((paragraph, index) => (
            <Typography
              sx={{
                typography: { xs: "body1", sm: "h6", lg: "h6", xl: "h5" },
              }}
              mb={{ xs: 3, sm: 5 }}
              mt={{ xs: 5, sm: 5, lg: 0 }}
              key={index}
            >
              {paragraph}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Box
        component="section"
        sx={{ display: "flex", bgcolor: "#F6F6F6", overflow: "hidden" }}
      >
        <Container
          sx={{
            my: { xs: 2, sm: 5, md: 10 },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src="./images/wallpaper-curvy-lines.png"
            alt="curvy lines"
            sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
          />
          {ABOUT.callToAction.map((paragraph, index) => (
            <Typography
              sx={{
                typography: { xs: "body1", sm: "h6", lg: "h6", xl: "h5" },
              }}
              m={{ xs: 3, lg: 5 }}
              key={index}
            >
              {paragraph}
            </Typography>
          ))}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate("/contact")}
            sx={{ textTransform: "none", my: 5 }}
          >
            {ABOUT.button}
          </Button>
        </Container>
      </Box>
    </Container>
  );
};

export default About;
