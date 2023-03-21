// ConditionalNavr.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navr from './Navr';

const ConditionalNavr = () => {
  const location = useLocation();
  const hideNavrOnRoutes = ['/account/login', '/account/register'];

  if (hideNavrOnRoutes.includes(location.pathname)) {
    return null;
  }

  return <Navr />;
};

export default ConditionalNavr;
