import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MainNavigation } from '@nx-web-mobile-api-demo/navigation/web-feature';
import { Box } from '@mui/material';

const mdTheme = createTheme();

export function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MainNavigation />
      </Box>
    </ThemeProvider>
  );
}

export default App;
