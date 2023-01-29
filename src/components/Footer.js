import * as React from "react";
import { Box, Typography } from "@mui/material";

const Footer = (props) => {
  const { image, imageAlt, copyright } = props;

  return (
    <Box
      component="footer"
      sx={{ py: 4, textAlign: "center", backgroundColor: "#D2F7FE" }}
    >
      <Box
        component="img"
        alt={imageAlt}
        src={image}
        sx={{
          maxHeight: { xs: 500, md: 800 },
          maxWidth: { xs: 300, md: 480 },
        }}
        mb={2}
      />
      <Typography variant="body2" color="text.secondary" align="center">
        {copyright} {new Date().getFullYear()}. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
