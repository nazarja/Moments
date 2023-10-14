import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';
import { store } from './store'
import { Provider } from 'react-redux'
import Init from './utils/Init';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <Init>
            <RouterProvider router={router} />
        </Init>
    </Provider>,
)
