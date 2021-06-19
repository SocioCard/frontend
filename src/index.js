import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import ShowPage from './pages/showpage';




const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#721D88',
    },
    secondary: {
      main: '#1641db',
      contrastText: '#fff',
    },
  },
  //fontFamily: Roboto // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ShowPage />
  </ThemeProvider>,
document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
