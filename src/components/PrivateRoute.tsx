// src/components/PrivateRoute.tsx

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../hooks/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
  requireInviteCode?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requireInviteCode = false }) => {
  const { user, hasInviteCode, userRole } = useAuthContext();
  const location = useLocation();

  console.log("PrivateRoute:", { user: user?.email, hasInviteCode, userRole, requireInviteCode });

  if (user === null) {
    console.log("Redirecting to home: No user");
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If we're still loading the user data, show a loading indicator
  if (user === undefined || userRole === null) {
    return <div>Loading...</div>;
  }

  if (requireInviteCode && !hasInviteCode && userRole !== 'admin') {
    console.log("Redirecting to invite-required: No invite code and not admin");
    return <Navigate to="/invite-required" state={{ from: location }} replace />;
  }

  console.log("Rendering children");
  return <>{children}</>;
};

export default PrivateRoute;