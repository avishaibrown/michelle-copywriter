import Typography from "../components/Typography";
import { Container } from "@mui/material";
import { SERVICES } from "../utils/constants";

//TODO: Continue on Services page adding each medium and description

const Services = () => {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center">
        {SERVICES.title}
      </Typography>
      {SERVICES.blurb.map((paragraph) => (
        <Typography variant="body1" m={5}>
          {paragraph}
        </Typography>
      ))}
    </Container>
  );
};

export default Services;
