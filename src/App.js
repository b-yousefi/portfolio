import React from "react";
import Header from "./components/home";
import Appbar from "./components/appbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
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
            <Route exact path="/home" component={Header} />
          </div>
        </Appbar>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
