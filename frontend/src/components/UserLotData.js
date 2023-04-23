import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export const UserLotData = (userId) => {
  const [data, setData] = useState(null);
  const [userLotType, setLotType] = useState(null);
  const [userCarType, setCarType] = useState(null);

  useEffect(() => {

    if (!userId) {
      setLotType(null);
      setCarType(null);
      return;
    }

    const fetchUserData = async () => {
      const userDoc = doc(db, 'users', userId);
      const snapshot = await getDoc(userDoc);
      const userData = snapshot.exists() ? snapshot.data() : null;
      setData(userData);

     if(userData.lotType==='street'){
        setLotType(true);
      }else if(userData.lotType==='lot'){
        setLotType(false);
      } else{
        setLotType(null);
      }
      if(userData.CarSize==='Small'){
        setCarType(2);
      }else if(userData.CarSize==='Average'){
        setCarType(3);
      }else if(userData.CarSize==='Large'){
        setCarType(5);
      }else{
        setCarType(null);
      }
    };
  
    fetchUserData();
  }, [userId]);
  return { userLotType, userCarType };
};


  
  