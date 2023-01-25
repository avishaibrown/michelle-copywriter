import { Container } from "@mui/material";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../utils/constants";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 10,
      }}
    >
      <Button
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
          "&:hover": {
            border: "4px solid #13579b",
            color: "#13579b",
            backgroundColor: "#D2F7FE",
            cursor: "pointer",
          },
        }}
        onClick={() => navigate("/contact")}
      >
        <Typography
          sx={{ typography: { xs: "body1", sm: "h6", md: "h4" } }}
          component="span"
        >
          {HOME.callToAction.button}
        </Typography>
      </Button>
      <Typography
        sx={{ typography: { xs: "body2", sm: "body1", lg: "h6" }, my: 3 }}
      >
        {HOME.callToAction.subtitle}
      </Typography>
    </Container>
  );
};

export default CallToAction;
