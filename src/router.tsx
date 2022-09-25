import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: 'survey',
        element: <div>survey</div>,
      },
      {
        path: 'generator',
        element: <div>answer generator</div>,
      },
    ],
  },
]);

export default router;
