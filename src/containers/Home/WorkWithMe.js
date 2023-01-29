import CompactTimeline from "../../components/CompactTimeline";
import ExpandedTimeline from "../../components/ExpandedTimeline";
import Typography from "../../components/Typography";
import { Box, Container, useMediaQuery } from "@mui/material";
import { HOME } from "../../utils/constants";

const WorkWithMe = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        bgcolor: "#F6F6F6",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #D2F7FE 0%, #FFFFFF 100%)",
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: { xs: 0, sm: 10 },
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
        {useMediaQuery((theme) => theme.breakpoints.down("sm")) ? (
          <CompactTimeline items={HOME.process.steps} />
        ) : (
          <ExpandedTimeline items={HOME.process.steps} />
        )}
      </Container>
    </Box>
  );
};

export default WorkWithMe;
