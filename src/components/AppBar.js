import {
  Box,
  Link,
  AppBar as MuiAppBar,
  Toolbar,
  Stack,
  Divider,
} from "@mui/material";
import CollapsedMenu from "./CollapsedMenu";
import { mobileDetected } from "../utils/util";

const AppBar = (props) => {
  const { title, image, menuItems } = props;

  return (
    <MuiAppBar position="fixed" sx={{ backgroundColor: "#D2F7FE" }}>
      <Toolbar sx={{ mx: { xs: 0, md: 10 } }}>
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 80, md: 100 },
            maxWidth: { xs: 240, md: 300 },
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
          {mobileDetected() ? (
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
