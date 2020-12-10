import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import config from "./config/config";
import "./App.less";
import Routes from "./routes";
import { AuthProvider } from "./context/Auth";
import { ErrorProvider } from "./context/Error";
import { ApiProvider } from "./context/Api";

const { theme } = config;

const App = () => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Router>
        <ErrorProvider>
          <ApiProvider>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </ApiProvider>
        </ErrorProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
