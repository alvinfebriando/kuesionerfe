import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Survey from './pages/survey';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Survey></Survey>,
      },
      {
        path: 'generator',
        element: <div>answer generator</div>,
      },
    ],
  },
]);

export default router;
