import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./containers/Home";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CssBaseline, Container, LinearProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MENU_ITEMS, NAME, COPYRIGHT } from "./utils/constants";
import playfairDisplay from "typeface-playfair-display";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

const theme = createTheme({
  palette: {
    background: {
      default: "hotpink",
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
      <Route path={MENU_ITEMS[2].link} element={<Portfolio />} />
      <Route path={MENU_ITEMS[3].link} element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <Suspense fallback={<LinearProgress color="secondary" />}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
      </ApolloProvider>
    </Suspense>
  );
};

export default App;
