import React from "react";
import NeueHaas from "../fonts/NeueHaasUnica-Regular.woff2";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";


const neueHaas = {
  fontFamily: 'Neue Haas Unica',
  fontStyle: 'normal',
  
  fontWeight: 400,
  src: `
   local('Neue Haas Unica Regular'), 
  local('Neue-Haas-Unica-Regular'),
  url(${NeueHaas}) format('woff2'),
  `
 
}



function Error() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: '"neue-haas-unica",sans-serif',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [neueHaas],
        },
      },
    },
  });

  return(
    <div>
      <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <h1>404 page not found</h1>
  </MuiThemeProvider>
    </div>
  )
}

export default Error;
