import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  useAuth,
} from '@clerk/clerk-react';
import axios from 'axios';
import { useEffect , useState} from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import store from './redux/store/store';
import { LoginPage } from './components/pages/LoginPage';


function App() {
  return (
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Wrapper>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </Wrapper>
      </SignedIn>
      <SignedOut>
        <LoginPage />
      </SignedOut>
    </ClerkProvider>
  )
}

export default App

const Wrapper = ({ children }) => {
  const { userId, signOut } = useAuth()
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
        params: {
          userId: userId,
        },
      })

      sessionStorage.setItem('token', res.data)
    } catch (error) {
      console.error(error)
      await signOut()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>{children}</>
  );
};
