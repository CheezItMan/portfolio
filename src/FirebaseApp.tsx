import { FirebaseAppProvider } from '@use-firebase/app';
import { FirebaseAuthProvider } from '@use-firebase/auth';
import App from './App';

const FirebaseApp = () => (
    <FirebaseAppProvider config={config}>
      <FirebaseAuthProvider>
        <App />
      </FirebaseAuthProvider>
    </FirebaseAppProvider>
  );
  
  export default FirebaseApp;