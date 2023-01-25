import Timeline from "../../components/Timeline";
import Typography from "../../components/Typography";
import { Box, Container } from "@mui/material";
import { HOME } from "../../utils/constants";

const WorkWithMe = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        bgcolor: "#F6F6F6",
        overflow: "hidden",
        background: "linear-gradient(to right, #D2F7FE 0%, #f2fafc 100%)",
      }}
    >
      <Container
        sx={{
          my: 10,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          marked="center"
          gutterBottom
          sx={{ fontSize: { xs: "3rem", md: "3.75rem" } }}
        >
          {HOME.process.title}
        </Typography>
        <Timeline items={HOME.process.steps} />
      </Container>
    </Box>
  );
};

export default WorkWithMe;
