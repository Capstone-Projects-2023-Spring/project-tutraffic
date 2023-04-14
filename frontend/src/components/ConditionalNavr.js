import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const ConditionalNavr = () => {
  const location = useLocation();
  const hideNavrOnRoutes = ['/'];

  if (hideNavrOnRoutes.includes(location.pathname)) {
    return null;
  }

  return <Navigation />;
};

export default ConditionalNavr;