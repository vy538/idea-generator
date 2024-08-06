// src/hooks/useAuth.ts

import { useState, useEffect, useCallback } from 'react';
import { auth } from '../services/firebase';
import { User } from 'firebase/auth';
import { checkInviteCode } from '../services/database';
import { useUserRole } from './useUserRole';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('authUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [hasInviteCode, setHasInviteCode] = useState<boolean>(false);
  const userRole = useUserRole();

  const checkUserStatus = useCallback(async (user: User | null) => {
    
    if (user) {
      if (userRole === 'admin') {
        setHasInviteCode(true);
      } else {
        const inviteCode = await checkInviteCode(user.uid);
        setHasInviteCode(inviteCode);
      }
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

  return { user, hasInviteCode, userRole };
};