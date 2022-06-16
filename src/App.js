import React, { Suspense } from "react";
import { AppProvider } from "context/AppContext";
import { Provider } from "react-redux";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import routes from "config/routes";
import theme from "config/theme";
import Layout from "core/Layout";
import store from "store";
import ErrorBoundry from 'components/ErrorBoundry/ErrorBoundry';
import CssBaseline from '@mui/material/CssBaseline';
import "./i18n";

function Routes() {
  return useRoutes(routes);
}

export default function App() {

  return (
    <ErrorBoundry>
      <Suspense fallback="Loading...">
        <AppProvider
          value={{
            routes,
          }}
        >
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <CssBaseline />
                <Layout>
                  <Routes />
                </Layout>
              </BrowserRouter>
            </ThemeProvider>
          </Provider>
        </AppProvider>
      </Suspense>
    </ErrorBoundry>
  );
}
