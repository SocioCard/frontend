import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Links from './link.js'

import { createMuiTheme, ThemeProvider } from "@material-ui/core";




const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B5DFF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF3868',
      contrastText: '#fff',
    },
  },
  //fontFamily: Roboto // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Links />
  </ThemeProvider>,
document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();