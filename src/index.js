import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import Multilayered from "./publications/Multilayered";
import Opsr from "./publications/Opsr";
import Ears from "./publications/Ears";
import NeuralLod from "./publications/NeuralLod";
import MenuBar from "./components/MenuBar";
import theme from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Router>
      <MenuBar />
      <Switch>
        <Route path="/publications/multilayered" component={Multilayered} />
        <Route path="/publications/opsr" component={Opsr} />
        <Route path="/publications/ears" component={Ears} />
        <Route path="/publications/neural_lod" component={NeuralLod} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.querySelector("#root")
);
