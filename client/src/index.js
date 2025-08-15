import React from "react";
import { store } from "./state/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { theme } from "./theme";
import BackdropContext from "./context/BackdropContext";
import { CssBaseline, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <BackdropContext>
          <App />
        </BackdropContext>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
