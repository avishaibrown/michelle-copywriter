import Home from "./containers/Home";
import About from "./containers/About";
import Services from "./containers/Services";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { CssBaseline, Container, LinearProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MENU_ITEMS, NAME, COPYRIGHT } from "./utils/constants";
import playfairDisplay from "typeface-playfair-display";

//TODO: Update background

const theme = createTheme({
  palette: {
    background: {
      default: "#F5F5F6",
    },
  },
  typography: {
    fontFamily: '"Playfair Display", cursive',
  },
  overrides: {
    CssBaseline: {
      "@global": {
        "@font-face": [playfairDisplay],
      },
    },
  },
});

const App = () => {
  let routes = (
    <Routes>
      <Route path={MENU_ITEMS[0].link} exact element={<Home />} />
      <Route path={MENU_ITEMS[1].link} element={<About />} />
      <Route path={MENU_ITEMS[2].link} element={<Services />} />
      <Route path={MENU_ITEMS[3].link} element={<Portfolio />} />
      <Route path={MENU_ITEMS[4].link} element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <Suspense fallback={<LinearProgress color="secondary" />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Box
          component="img"
          src="wallpaper.png"
          alt="wallpaper"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.8,
          }}
        /> */}
        <Container maxWidth="lg">
          <Header
            title={NAME}
            image="title-signature.png"
            menuItems={MENU_ITEMS}
          />
          {routes}
          <Footer copyright={COPYRIGHT} />
        </Container>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
