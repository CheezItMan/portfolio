import React, { useEffect } from 'react';
import { useUser } from './useFirebaseAuth';
import {LoginStatus } from './LoginStatusType';
import { getAuth, GithubAuthProvider, signInWithRedirect, getRedirectResult, signOut } from 'firebase/auth';
import './loginWithGithubButton.css'
import { firebaseConfig } from '../config/firebase-config';
import useFirebase from './useFirebase';


const provider = new GithubAuthProvider();
provider.addScope('user:email');

export type LoginWithGithubProps = {
  text: string,
  styling: string
}

export const LoginWithGithubButton = ( { text = "Login with Github", styling }: LoginWithGithubProps) => {
  const [ , setUser, status ] = useUser();

  const { app }  = useFirebase(firebaseConfig);
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
          console.log('Changing status to logged in');
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
      console.log('Changing status to logged out');
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
    return <button className={styling}  onClick={handleLogout}><i className="icon fa fa-github"></i>Logout</button>
  } else if (status === LoginStatus.LoggedOut) {
    return <button className={styling}  onClick={handleLogin}><i className="icon fa fa-github"></i>Login with Github</button>
  } else {
    return <div>Pending...</div>
  }
}