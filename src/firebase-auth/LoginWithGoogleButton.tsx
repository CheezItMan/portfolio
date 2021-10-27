import React, { useEffect, useContext } from 'react';
import { useUser } from './useFirebaseAuth';
import {LoginStatus } from './LoginStatusType';
import {firebaseAppContext} from './firebaseAppProvider';
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut } from 'firebase/auth';

/*
 * Todo:  
 * Later we can abtract out the Login buttons for OAuth so that 
 * useFirebaseAuth can take in a list of authentication methods
 * and it can generate components for each authentication method.
 * The code is mostly the same, just different auth providers.
*/

const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


export type LoginWithGoogleButtonProps = {
  text: string,
}

export const LoginWithGoogleButton = ( { text = "Login with Google", ...otherProps }: LoginWithGoogleButtonProps) => {
  const [ , setUser, status ] = useUser();
  // const userContext = useContext(firebaseUserContext);

  const app = useContext(firebaseAppContext)?.app;
  if (!app) {
    throw Error('LoginWithGoogleButton must be nested inside a Firebase App Provider!');
  }
  const auth = getAuth(app);
  auth.languageCode = 'en';
  
  // TODO:  I suspect this useEffect is unnecessary
  useEffect( () => {
    
    const getRedirectData = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken
          const user = result.user;
          if (!token) throw Error('Invalid Token From Google Authentication!');

          if (setUser !== null) {
            setUser({
              user: user,
              status: LoginStatus.LoggedIn,
              token: token,
            });
          } 
        }
      } catch(error) {
        console.log('Unable to get Redirect result');
        console.log(error);
      }
    }
        
    
    getRedirectData();
  }, [auth, setUser]);

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    setUser({
      user: null,
      status: LoginStatus.Pending,
      token: null,
    });
    try {

      // const result = await signInWithPopup(auth, provider);
      await signInWithRedirect(auth, provider);
      const result = await getRedirectResult(auth);
      if (result) {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken
        const user = result.user;
        if (!token) throw Error('Invalid Token From Google Authentication!');

        if (setUser !== null) {
          setUser({
            user: user,
            status: LoginStatus.LoggedIn,
            token: token,
          });
        }
      }
    } catch (error) { // If they can't login
      console.log('Failed to login');
      console.log(error);
      setUser({
        user: null,
        status: LoginStatus.LoggedOut,
        token: null,
      });
    }
  }

  const handleLogout = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await signOut(auth);
      setUser({
        user: null,
        status: LoginStatus.LoggedOut,
        token: null,
      });
    } catch(error) {
      throw new Error(`Cannot logout: ${error}`);
    }
  }

  if (status === LoginStatus.LoggedIn) {
    return <button {...otherProps} onClick={handleLogout}>Logout</button>
  } else if (status === LoginStatus.LoggedOut) {
    return <button {...otherProps} onClick={handleLogin}>{text}</button>
  } else {
    return <div>Pending...</div>
  }
}