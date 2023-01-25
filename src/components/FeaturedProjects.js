import { styled, Box, ButtonBase } from "@mui/material";
import Typography from "../components/Typography";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 400,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "8px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const FeaturedProjects = (projects) => {
  const onClickHandler = (e) => {
    e.preventDefault();
    const selectedProject = projects.projects.filter(
      (project) => project.title === e.target.textContent
    );
    if (selectedProject[0].url) window.open(selectedProject[0].url, "_blank");
  };

  return (
    <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
      {projects.projects.map((project) => (
        <ImageIconButton
          key={project.title}
          style={{
            width: project.width,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              backgroundImage: `url(${project.image})`,
            }}
          />
          <ImageBackdrop className="imageBackdrop" />
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "common.white",
            }}
            onClick={(e) => onClickHandler(e)}
          >
            <Typography
              component="h3"
              variant="h4"
              color="inherit"
              className="imageTitle"
            >
              {project.title}
              <div className="imageMarked" />
            </Typography>
          </Box>
        </ImageIconButton>
      ))}
    </Box>
  );
};

export default FeaturedProjects;
