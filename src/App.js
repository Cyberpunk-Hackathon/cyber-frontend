import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  useAuth,
} from '@clerk/clerk-react';
import axios from 'axios';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import store from './redux/store/store';

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
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;

const Wrapper = ({ children }) => {
  const { userId, signOut } = useAuth();

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
        params: {
          userId: userId,
        },
      });

      sessionStorage.setItem('token', res.data);
    } catch (error) {
      console.error(error);
      await signOut();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <>{children}</>;
};
