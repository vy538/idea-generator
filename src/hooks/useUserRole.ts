// src/hooks/useUserRole.ts

import { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { getDatabase, ref, onValue, set } from 'firebase/database';

export const useUserRole = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.email === process.env.REACT_APP_ADMIN_EMAIL) {
          setRole('admin');
        } else {
          const db = getDatabase();
          const userRef = ref(db, `users/${user.uid}/role`);
          onValue(userRef, (snapshot) => {
            let userRole = snapshot.val();
            if (userRole === null) {
              // If the role is not set in the database, set it to 'user'
              userRole = 'user';
              set(userRef, userRole)
                .catch((error) => console.error("Error setting default role:", error));
            }
            setRole(userRole);
          }, (error) => {
            console.error("Error fetching user role:", error);
            setRole('user'); // Set a default role in case of error
          });
        }
      } else {
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return role;
};