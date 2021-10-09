import * as firebaseAuth from 'firebase/auth';
import { LoginStatus } from './login_status';

export interface FirebaseUserStateType {
    user: firebaseAuth.User | null,
    status: LoginStatus,
    token: string | null,
  }