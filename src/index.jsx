import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { SnackbarProvider } from 'notistack';
import store from 'store';
import App from 'containers/App';
import LoadingIndicator from 'components/LoadingIndicator';
import makeServer from 'mocks/server';

makeServer();

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <SnackbarProvider
        preventDuplicate
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
      >
        <React.Suspense fallback={<LoadingIndicator />}>
          <App />
        </React.Suspense>
      </SnackbarProvider>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root'),
);
