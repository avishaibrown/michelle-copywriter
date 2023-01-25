import { useEffect } from "react";
import HomeServices from "../components/HomeServices";
import Typography from "../components/Typography";
import { Container } from "@mui/material";
import { SERVICES } from "../utils/constants";

const Services = () => {
  //scroll to top when page is navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container component="section" sx={{ my: { xs: 20, md: 30 } }}>
      <Typography
        variant="h2"
        marked="center"
        gutterBottom
        textAlign="center"
        sx={{ fontSize: { xs: "3rem", md: "3.75rem" }, mb: 10 }}
      >
        {SERVICES.title}
      </Typography>
      {SERVICES.blurb.map((paragraph, index) => (
        <Typography
          sx={{
            typography: { xs: "body1", sm: "h6", lg: "h6", xl: "h5" },
          }}
          m={5}
          key={index}
        >
          {paragraph}
        </Typography>
      ))}
      <HomeServices
        items={SERVICES.mediums}
        largeTiles={true}
        includeDescriptions={true}
      />
      <Typography
        m={3}
        sx={{
          typography: { xs: "body1", sm: "h6", lg: "h6", xl: "h5" },
        }}
      >
        {SERVICES.closingRemarks}
      </Typography>
    </Container>
  );
};

export default Services;
