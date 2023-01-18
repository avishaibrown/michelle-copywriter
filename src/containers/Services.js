import { useEffect } from "react";
import HomeServices from "../components/HomeServices";
import Typography from "../components/Typography";
import { Container } from "@mui/material";
import { SERVICES } from "../utils/constants";

//TODO: Continue on Services page adding each medium and description

const Services = () => {
  //scroll to top when page is navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" mb={5}>
        {SERVICES.title}
      </Typography>
      {SERVICES.blurb.map((paragraph, index) => (
        <Typography variant="body1" m={3} key={index}>
          {paragraph}
        </Typography>
      ))}
      <HomeServices
        items={SERVICES.mediums}
        largeTiles={true}
        includeDescriptions={true}
      />
      <Typography variant="body1" m={3} sx={{ fontWeight: "bold" }}>
        {SERVICES.closingRemarks}
      </Typography>
    </Container>
  );
};

export default Services;
