import { useSignIn, useSignUp } from '@clerk/clerk-react';
import atlassianIcon from '../../assets/images/AtlassianIcon.svg';
import rightArrow from '../../assets/images/RightArrow.svg';

export function LoginPage() {
  const { signUp } = useSignUp();

  const signInWith = (strategy) => {
    return signUp.authenticateWithRedirect({
      strategy,
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/',
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.signIn}>
        <div style={styles.heading}>CYBERPUNK</div>
        <div style={styles.subHeading}>
          <span style={styles.signInText}>Sign In</span>
          <span style={styles.continueText}>to continue to EstiMate</span>
        </div>
        <div
          style={styles.signInButtonContainer}
          onClick={() => signInWith('oauth_atlassian')}
        >
          <div style={styles.atlassianGroup}>
            <img style={styles.atlassianImg} src={atlassianIcon} />
            <button style={styles.signInBtn}>Sign in with Atlassian</button>
          </div>
          <img src={rightArrow} />
        </div>
        <div style={styles.signUpContainer}>
          <p>
            Don’t have an account ? <span style={styles.signUp}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(238, 238, 238, 0.50)',
    height: '100vh',
  },
  signIn: {
    backgroundColor: '#FFFFFF',
    height: '33vh',
    width: '30vw',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    letterSpacing: '12px',
    fontSize: '30px',
    fontWeight: '700',
  },
  subHeading: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    marginLeft: '30px',
    fontSize: '12px',
    marginBottom: '20px',
  },
  signInText: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
  continueText: {
    fontSize: '14px',
    fontWeight: 'normal',
  },
  signInBtn: {
    backgroundColor: '#D9D9D9',
    fontWeight: '600  ',
    color: '#000000',
    border: 'none',
  },
  signInButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 30px',
    padding: '0px',
    backgroundColor: '#D9D9D9',
    borderRadius: '5px',
    padding: '10px 30px',
    cursor: 'pointer',
    boxShadow: '0px 0px 0px 1px #000',
  },
  atlassianImg: {
    width: '22px',
    height: '21px',
    marginRight: '10px',
  },
  signUpContainer: {
    fontSize: '15px',
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'left',
    marginLeft: '30px',
  },
  signUp: {
    color: '#0052CC',
    cursor: 'pointer',
  },
};
