import React, { useEffect, useContext } from 'react';
import { useUser } from './useFirebaseAuth';
import {LoginStatus } from './login_status';
import {firebaseAppContext} from './Firebase_app_provider';
import { getAuth, GithubAuthProvider, signInWithRedirect, getRedirectResult, signOut } from 'firebase/auth';


const provider = new GithubAuthProvider();
provider.addScope('user:email');

export type LoginWithGithubProps = {
  text: string,
}

export const LoginWithGithubButton = ( { text = "Login with Github", ...otherProps }: LoginWithGithubProps) => {
  const [ , setUser, status ] = useUser();
  // const userContext = useContext(firebaseUserContext);

  const app = useContext(firebaseAppContext)?.app;
  if (!app) {
    throw Error('LoginWithGithubButton must be nested inside a Firebase App Provider!');
  }
  const auth = getAuth(app);
  auth.languageCode = 'en';
  
  useEffect( () => {
    
    const getRedirectData = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken
          const user = result.user;
          if (!token) throw Error('Unable to login with Github!');
          if (setUser !== null) {
            setUser({
              user: user,
              status: LoginStatus.LoggedIn,
              token: token,
            });
            console.log('Logging in');
            console.log({
              user: user,
              status: LoginStatus.LoggedIn,
              token: token,
            });
          } 
        }
      } catch(error) {
        
        console.log('error');
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

      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error);
    }
    try {
      const result = await getRedirectResult(auth);
      if (result) {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken
        const user = result.user;
        if (!token) throw Error('Invalid Token From Github Authentication!');

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
    return <button {...otherProps} onClick={handleLogin}>Login with Github</button>
  } else {
    return <div>Pending...</div>
  }
}