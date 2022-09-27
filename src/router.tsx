import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Survey from './pages/survey';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: 'survey',
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
