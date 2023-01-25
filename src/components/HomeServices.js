import { Box, Grid } from "@mui/material";
import Typography from "./Typography";

export const HomeServices = (props) => {
  const { items, largeTiles, includeDescriptions } = props;

  return (
    <Box component="section" sx={{ display: "flex", overflow: "hidden" }}>
      <Grid container spacing={5} sx={{ my: "10px" }}>
        {items.map((item, index) => (
          <Grid
            item
            xs={12}
            md={largeTiles ? 6 : 4}
            xl={largeTiles ? 6 : 2.4}
            key={index}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 5,
              }}
            >
              {item.icon}
              <Typography variant="h5" sx={{ my: 5, color: "secondary.main" }}>
                {item.title}
              </Typography>
              {includeDescriptions && (
                <Typography variant="body1">{item.description}</Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeServices;
