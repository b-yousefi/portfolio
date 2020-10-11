import React from "react";
import Home from "./components/home";
import Appbar from "./components/appbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import WorkExperiences from "./components/workExperiences";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#3f51b5",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Appbar>
          <div>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/home" />;
              }}
            />
            <Route exact path="/home" component={Home} />
            <Route exact path="/work-experiences" component={WorkExperiences} />
          </div>
        </Appbar>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
