import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#55BDB3'
    },
    background: {
      default: '#F0F8F8',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderWidth: '2px',
          textTransform: 'capitalize',
        },
        contained: {
          textTransform: 'capitalize',
          color: 'white',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
