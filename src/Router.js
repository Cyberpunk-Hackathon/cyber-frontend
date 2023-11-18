import { createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './components/common/ErrorComponent';
import MainLayout from './components/layouts/MainLayout';
import Homepage from './components/pages/Homepage';
import ProjectSelect from './components/pages/ProjectSelect';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: <ProjectSelect />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <MainLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
]);
