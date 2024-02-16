import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';
import { persistor, store } from './store/storeConfig';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './app/App';
import Loading from './components/UI/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/forms.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
            <App>
                <RouterProvider router={router} />
            </App>
        </PersistGate>
    </Provider>
);
