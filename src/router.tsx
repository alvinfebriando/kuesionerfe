import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Generator from './pages/generator';
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
        element: <Generator></Generator>,
      },
    ],
  },
]);

export default router;
