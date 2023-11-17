import { useSignIn } from '@clerk/clerk-react';

export function LoginPage() {
  const { signIn } = useSignIn();

  const signInWith = (strategy) => {
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/',      
    });
  };

  return (
    <div>
      <button onClick={() => signInWith('oauth_atlassian')}>
        Sign in with Atlassian
      </button>
    </div>
  );
}
