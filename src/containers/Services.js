import { useEffect, useState } from "react";
import Typography from "../components/Typography";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { SERVICES } from "../utils/constants";
import CallToAction from "./Home/CallToAction";
import Dialog from "../components/Dialog";

const Services = () => {
  const [itemToOpen, setItemToOpen] = useState(null);

  const handleClick = (index) => {
    setItemToOpen(index);
  };

  //scroll to top when page is navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container component="section" sx={{ mt: { xs: 20, md: 30 } }}>
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
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          {SERVICES.mediums.map((item, index) => (
            <Grid item key={index} xs={12} sm={4}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background:
                    "linear-gradient(to right, #D2F7FE 0%, #f2fafc 100%)",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large" onClick={() => handleClick(index)}>
                    {SERVICES.button}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog
          itemToOpen={itemToOpen}
          setItemToOpen={setItemToOpen}
          title={
            itemToOpen || itemToOpen === 0
              ? SERVICES.mediums[itemToOpen].title
              : null
          }
          description={
            itemToOpen || itemToOpen === 0
              ? SERVICES.mediums[itemToOpen].description
              : null
          }
        />
      </Container>
      <Typography
        m={3}
        sx={{
          typography: { xs: "body1", sm: "h6", lg: "h6", xl: "h5" },
        }}
      >
        {SERVICES.closingRemarks}
      </Typography>
      <CallToAction />
    </Container>
  );
};

export default Services;
