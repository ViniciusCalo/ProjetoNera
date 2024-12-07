import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useSelector((state) => state.user);

  if (!token) {
    // Redireciona para o login se não estiver autenticado
    return <Navigate to="/register" />;
  }

  if (!allowedRoles.includes(role)) {
    // Redireciona para uma página de acesso negado ou inicial
    return <Navigate to="/register" />;
  }

  return children;
};

export default ProtectedRoute;
