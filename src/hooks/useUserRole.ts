// src/hooks/useUserRole.ts

import { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { getDatabase, ref, onValue } from 'firebase/database';

export const useUserRole = (): 'user' | 'admin' | null => {
  const [role, setRole] = useState<'user' | 'admin' | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.email === process.env.REACT_APP_ADMIN_EMAIL) {
          setRole('admin');
        } else {
          const db = getDatabase();
          const userRef = ref(db, `users/${user.uid}`);
          onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            setRole(userData?.role === 'admin' ? 'admin' : 'user');
          }, (error) => {
            console.error("Error fetching user role:", error);
            setRole('user');
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