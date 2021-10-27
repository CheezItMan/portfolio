import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";

import { useUser } from "../firebase-auth/useFirebaseAuth";
import { useFirebase } from "../firebase-auth";
import { FireBaseConfigType } from '../config/firebase_config_type';

export const useIsSuperAdmin = (config: FireBaseConfigType, appName = 'app') => {
    const [isSuperAdmin, setSuperAdmin] = useState<boolean>(false);
    const { db } = useFirebase(config, appName);
    const [user] = useUser();

    useEffect(() => {
        const checkSuperAdminStatus = async () => {
            if (!user || !db ) {
                setSuperAdmin(false);
                return;
            }

            const docRef = doc(db, "config", "admins");
            const docSnapshot = await getDoc(docRef);
            if (docSnapshot.exists()) {
                console.log('Superadmin Data ', docSnapshot.data());
                
            }   
            // If they are superAdmin then set SuperAdmin to true         
            const data: any = docSnapshot.data();
            const superAdminUser = data.uids.find((uid: string) => uid === user.uid);
            setSuperAdmin(!!superAdminUser);
        }

        if (db && user) {
            checkSuperAdminStatus();
        }
    }, [db, user]);

    if (!user && isSuperAdmin) {
        setSuperAdmin(false);
        return false;
    }

    return isSuperAdmin;
}