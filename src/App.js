import Home from "./containers/Home/Home";
import About from "./containers/About";
import Services from "./containers/Services";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { CssBaseline, Container, LinearProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MENU_ITEMS, NAME, FOOTER } from "./utils/constants";
import libreFranklin from "@fontsource/libre-franklin";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8aFz44Hm7ttGLponx1KKErGty3Aw1HyI",
  authDomain: "michelle-copywriter.firebaseapp.com",
  projectId: "michelle-copywriter",
  storageBucket: "michelle-copywriter.appspot.com",
  messagingSenderId: "767829316987",
  appId: "1:767829316987:web:3ca29c63bfe9db6e9559de",
  measurementId: "G-KCEG98EHHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const theme = createTheme({
  typography: {
    fontFamily: '"Libre Franklin", cursive',
  },
  overrides: {
    CssBaseline: {
      "@global": {
        "@font-face": [libreFranklin],
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
        <Container disableGutters maxWidth={false}>
          <AppBar title={NAME} image="title-logo.png" menuItems={MENU_ITEMS} />
          {routes}
          <Footer
            image={FOOTER.image}
            imageAlt={FOOTER.imageAlt}
            copyright={FOOTER.copyright}
          />
        </Container>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
