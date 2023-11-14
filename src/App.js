import { Provider } from 'react-redux'
import store from './redux/store/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
