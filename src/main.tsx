import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import './index.css'
import { store } from './store';
import { RouterProvider } from 'react-router-dom';
import {Routes} from "./routes";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={Routes.router} />
  </Provider>,
)
