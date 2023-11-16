import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from './FirebaseConfig';

interface PrivateRouteProps {
  path: string; 
  element: React.ReactNode;
}

function PrivateRoute({ path, element }: PrivateRouteProps) {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    navigate('/login', { replace: true });
    return null;
  }

  return <Route path={path} element={element} />;
}

export default PrivateRoute;
