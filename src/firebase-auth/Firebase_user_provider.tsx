import React, { useState } from 'react';
import { FireBaseConfigType } from '../config/firebase_config_type';
import { firebaseUserContext } from './useFirebaseAuth';
import { LoginStatus } from './login_status';
import { FirebaseUserStateType } from './firebase_user_state';

type FirebaseUserProviderProps = {
    config: FireBaseConfigType
    name: string,
    children: React.ReactNode,
}

export const FirebaseUserProvider = ({ config, name, children }: FirebaseUserProviderProps) => {
  const [userStatus, setUser] = useState<FirebaseUserStateType>({ 
        user: null, 
        status: LoginStatus.LoggedOut,
        token: null,
    });
  const { Provider } = firebaseUserContext;
//   const firebaseApp = useFirebase(firebaseConfig, name);

  const value = {
    ...userStatus,
    setUser,
  };

  return (
    <Provider value={ value } >
      {children}
    </Provider>
  );
};