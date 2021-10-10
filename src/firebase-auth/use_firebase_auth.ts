
import { useContext, createContext, Dispatch, SetStateAction } from 'react';
import {User} from '@firebase/auth-types';
import "firebase/auth";
import "firebase/firestore";
import { LoginStatus } from './login_status';
import { FirebaseUserStateType } from './firebase_user_state';


export type UserDataType = {
  user: User | null,
  status: LoginStatus,
};

interface UserContextState extends FirebaseUserStateType {
    setUser: null | Dispatch<SetStateAction<FirebaseUserStateType>>,
};

export const firebaseUserContext = createContext<UserContextState>({
  user: null, 
  status: LoginStatus.LoggedOut,
  setUser: null,
  token: null,
});



export const useUser = () => {
  const userContext = useContext(firebaseUserContext);
  const { user, setUser, status } = userContext;

  if (userContext === undefined) {
    throw new Error('useUser must be defined within FirebaseUserProvider component.')
  }

  return [user, setUser, status] as [User, Dispatch<SetStateAction<FirebaseUserStateType>>, LoginStatus];
}