import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import ErrorComponent from './components/common/ErrorComponent';
import Homepage from './components/pages/Homepage';
import ProjectSelect from './components/pages/ProjectSelect';
import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';

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
  {
    path: '/sso-callback',
    element: <SSOCallBack />,
  },
]);

export default function SSOCallBack() {
  return <AuthenticateWithRedirectCallback />;
}
