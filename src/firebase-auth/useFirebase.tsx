import { useState, useEffect } from 'react';
import { FireBaseConfigType } from '../config/firebase_config_type';
import { initializeApp, getApps } from 'firebase/app';

const useFirebase = (config: FireBaseConfigType, name: string) => {
  const [app, setApp] = useState(() => { 
    const app = getApps().find((app) => app.name === name)
      || initializeApp(config, name) 

    return app;
  });

  useEffect(() => {
      const newApp = getApps().find((app) => app.name === name)
                        || initializeApp(config, name);
      setApp(() => newApp);
  }, [config, name]);

  return { app };
}

export default useFirebase;