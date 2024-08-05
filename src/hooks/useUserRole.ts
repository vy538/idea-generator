// src/hooks/useUserRole.ts

import { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { getDatabase, ref, onValue } from 'firebase/database';

export const useUserRole = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User email:", user.email);
        console.log("Admin email:", process.env.REACT_APP_ADMIN_EMAIL);
        if (user.email === process.env.REACT_APP_ADMIN_EMAIL) {
          console.log("Setting role to admin");
          setRole('admin');
        } else {
          const db = getDatabase();
          const userRef = ref(db, `users/${user.uid}/role`);
          onValue(userRef, (snapshot) => {
            console.log("Database role:", snapshot.val());
            setRole(snapshot.val());
          });
        }
      } else {
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  console.log("Current role:", role);
  return role;
};