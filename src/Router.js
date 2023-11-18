import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'
import ErrorComponent from './components/common/ErrorComponent'
import Homepage from './components/pages/Homepage'
import Predictor from './components/components/Predictor'
import Test from './components/components/Test'

export const router = createBrowserRouter([
  {
    path: '/',
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
    path: '/predictor',
    element: <Predictor />,
  },
  {
    path: '/csv',
    element: <Test />,
  },
])
