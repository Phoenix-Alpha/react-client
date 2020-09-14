import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import { PersistGate } from 'redux-persist/integration/react'
import theme from 'src/theme';
import routes from 'src/routes';

const App = () => {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <GlobalStyles />
          {routing}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
