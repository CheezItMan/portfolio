import React, { createContext } from 'react';
import firebase from 'firebase/app';
import useFirebase from './useFirebase';
import { FireBaseConfigType } from '../config/firebase_config_type';

type FirebaseAppProviderProps = {
    config: FireBaseConfigType,
    name: string,
    children: React.ReactNode,
}

type FirebaseAppContextType = {
    app: firebase.FirebaseApp | null,
};

export const firebaseAppContext = createContext<FirebaseAppContextType>({
    app: null,
});

const FirebaseAppProvider = ({ config, name, children }: FirebaseAppProviderProps) => {
    const firebase = useFirebase(config, name).app;
    const appValue = {
        app: firebase,
    }

    return (
        <firebaseAppContext.Provider value={appValue}>
            {children}
        </firebaseAppContext.Provider>
    );
};

export default FirebaseAppProvider;
