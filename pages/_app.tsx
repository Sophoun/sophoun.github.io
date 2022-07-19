import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

// App theme
export const theme = createTheme({
  palette: {
    primary: {
      light: '#064663',
      main: '#00FF00',
      dark: '#04293A',
      contrastText: '#fff',
    },
    secondary: {
      main: '#041C32'
    }
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
