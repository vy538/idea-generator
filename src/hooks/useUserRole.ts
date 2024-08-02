import { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { getDatabase, ref, onValue } from 'firebase/database';

export const useUserRole = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}/role`);
        onValue(userRef, (snapshot) => {
          setRole(snapshot.val());
        });
      } else {
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return role;
};