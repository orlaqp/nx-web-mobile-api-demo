import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MainNavigation } from '@nx-web-mobile-api-demo/navigation/web-feature';
import { Box } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@nx-web-mobile-api-demo/shared/store';

const mdTheme = createTheme();

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <MainNavigation />
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
