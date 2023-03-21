import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AccountInfo = () => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        } else {
          setUser(null);
        }
      });
  
      // Clean up the listener on component unmount
      return () => {
        unsubscribe();
      };
    }, []);
  
    if (!user) {
      return <div>Please sign in to view your account information.</div>;
    }
  
    return (
      <div>
        <h1>Account Information</h1>
        <p>Email: {user.email}</p>
        {/* Add more account information fields here */}
      </div>
    );
  };
  
  export default AccountInfo;
  