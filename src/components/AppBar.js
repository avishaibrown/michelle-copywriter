import {
  Box,
  Link,
  AppBar as MuiAppBar,
  Toolbar,
  Stack,
  Divider,
  useMediaQuery,
} from "@mui/material";
import CollapsedMenu from "./CollapsedMenu";

const AppBar = (props) => {
  const { title, image, menuItems } = props;

  return (
    <MuiAppBar position="fixed" sx={{ backgroundColor: "#D2F7FE" }}>
      <Toolbar sx={{ mx: { xs: 0, md: 3, lg: 5, xl: 10 } }}>
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 60, md: 100 },
            maxWidth: { xs: 180, md: 300 },
            mx: { xs: 0, md: 5 },
            my: 2,
          }}
          alt={title}
          src={image}
        />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {useMediaQuery((theme) => theme.breakpoints.down("lg")) ? (
            <CollapsedMenu menuItems={menuItems} />
          ) : (
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
                  color="#2c292c"
                  sx={{ fontSize: "24px" }}
                >
                  {item.title}
                </Link>
              ))}
            </Stack>
          )}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
