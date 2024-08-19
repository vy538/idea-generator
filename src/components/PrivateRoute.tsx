// src/components/PrivateRoute.tsx

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../hooks/AuthContext';
import LoadingSpinner from './LoadingSpinner';
import { t } from 'i18next';

interface PrivateRouteProps {
  children: React.ReactNode;
  requireInviteCode?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requireInviteCode = false }) => {
  const { user, hasInviteCode, userRole } = useAuthContext();
  const location = useLocation();


  if (user === undefined || userRole === null) {
    return  <LoadingSpinner loadingText={t('mainPage.loading')} />;;
  }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (requireInviteCode && !hasInviteCode && userRole !== 'admin') {
    return <Navigate to="/invite-required" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;