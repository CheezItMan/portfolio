import { useState, useEffect } from 'react';
import { FireBaseConfigType } from '../config/firebase_config_type';
import { initializeApp, getApps } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';


const useFirebase = (config: FireBaseConfigType, name = 'app') => {
  const [app, setApp] = useState(() => { 
    const app = getApps().find((app) => app.name === name)
      || initializeApp(config, name) 

    return app;
  });

  const [db, setDB] = useState<null | Firestore>(null);

  useEffect(() => {
      const newApp = getApps().find((app) => app.name === name)
                        || initializeApp(config, name);
      setApp(() => newApp);
      
  }, [config, name]);

  useEffect(() => {
    const newDB = getFirestore(app);
    setDB(newDB);
  }, [app]);


  return { app, db };
}

export default useFirebase;