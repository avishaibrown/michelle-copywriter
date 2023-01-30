import { Box, Grid } from "@mui/material";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../utils/constants";

const HomeAbout = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        my: { xs: 5, md: 10 },
      }}
    >
      <Grid container>
        <Grid item xs={12} lg={5} xl={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "right" },
            }}
          >
            <Box
              component="img"
              src={HOME.about.image}
              alt="about michelle"
              sx={{
                maxHeight: { xs: 500, md: 700 },
                maxWidth: { xs: 300, md: 420 },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={7} sx={{ float: { xs: "none", xl: "left" } }}>
          <Typography
            mx={5}
            my={{ xs: 5, sm: 3, lg: 0 }}
            sx={{
              typography: { xs: "h6", sm: "h4", lg: "h3", xl: "h2" },
            }}
          >
            {HOME.about.title}
          </Typography>
          {HOME.about.description.map((item, index) => (
            <Typography
              key={index}
              m={5}
              sx={{
                typography: { xs: "body1", sm: "h6", lg: "h6", xl: "h5" },
              }}
            >
              {item}
            </Typography>
          ))}
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={() => navigate("/about")}
            sx={{ textTransform: "none", ml: 5, minWidth: 200 }}
          >
            {HOME.about.button}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeAbout;
