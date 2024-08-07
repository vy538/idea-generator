// src/hooks/useAuth.ts

import { useState, useEffect, useCallback } from 'react';
import { auth } from '../services/firebase';
import { User as FirebaseUser } from 'firebase/auth';
import { checkInviteCode, storeUserData, setInviteCode } from '../services/database';
import { useUserRole } from './useUserRole';

export const useAuth = () => {
  const [user, setUser] = useState<FirebaseUser | null>(() => {
    const savedUser = localStorage.getItem('authUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [hasInviteCode, setHasInviteCode] = useState<boolean>(false);
  const userRole = useUserRole();

  const checkUserStatus = useCallback(async (user: FirebaseUser | null) => {
    if (user) {
      if (userRole === 'admin') {
        setHasInviteCode(true);
      } else {
        const hasInvite = await checkInviteCode(user.uid);
        setHasInviteCode(hasInvite);
      }
      
      // Store user data in the database
      await storeUserData({
        uid: user.uid,
        email: user.email || '',
        name: user.displayName || '',
        role: userRole || 'user',
      });
    } else {
      setHasInviteCode(false);
    }
  }, [userRole]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const serializedUser = JSON.stringify(user);
        localStorage.setItem('authUser', serializedUser);
        setUser(user);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
      checkUserStatus(user);
    });

    return () => unsubscribe();
  }, [checkUserStatus]);

  useEffect(() => {
    if (user) {
      checkUserStatus(user);
    }
  }, [user, userRole, checkUserStatus]);

  const addInviteCode = useCallback(async (inviteCode: string) => {
    if (user) {
      await setInviteCode(user.uid, inviteCode);
      setHasInviteCode(true);
    }
  }, [user]);

  return { user, hasInviteCode, userRole, addInviteCode };
};
