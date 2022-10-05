import * as React from "react";
import { Container, Toolbar, Box, Stack, Divider, Link } from "@mui/material";

const Header = (props) => {
  const { title, image, menuItems } = props;

  return (
    <Container disableGutters sx={{ marginBottom: "5vh" }}>
      <Toolbar display={{ xs: "flex", md: "flex-inline" }}>
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 50, md: 80 },
            maxWidth: { xs: 150, md: 240 },
          }}
          alt={title}
          src={image}
        />
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="flex-end"
          ml="auto"
          divider={<Divider orientation="vertical" flexItem />}
        >
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              underline="hover"
              color="inherit"
            >
              {item.title}
            </Link>
          ))}
        </Stack>
      </Toolbar>
    </Container>
  );
};

export default Header;
