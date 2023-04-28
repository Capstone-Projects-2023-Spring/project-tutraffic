import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export const UserLotData = (userId) => {
  const [userLotType, setLotType] = useState('all');
  const [userCarType, setCarType] = useState(0);
  const [userPriceType, setPriceType] = useState('all');

  useEffect(() => {
    if (!userId) {
      setLotType('all');
      setCarType(0);
      setPriceType('all');
      return;
    }

    const fetchUserData = async () => {
      const userDoc = doc(db, 'users', userId);
      const snapshot = await getDoc(userDoc);
      if (!snapshot.exists()) {
        setLotType('all');
        setCarType(0);
        setPriceType('all');
        return;
      }
      const userData = snapshot.data()

      if (userData.lotType === 'street') {
        setLotType(true);
      } else if (userData.lotType === 'lot') {
        setLotType(false);
      } else {
        setLotType('all');
      }

      if (userData.CarSize === 'Small') {
        setCarType(2);
      } else if (userData.CarSize === 'Average') {
        setCarType(3);
      } else if (userData.CarSize === 'Large') {
        setCarType(5);
      } else {
        setCarType(0);
      }

      if (userData.priceType === 'free') {
        setPriceType(true);
      } else if (userData.priceType === 'notFree') {
        setPriceType(false);
      } else {
        setPriceType('all');
      }
    };

    fetchUserData();
  }, [userId, setLotType, setCarType, setPriceType]);

  return { userLotType, userCarType, userPriceType};
};
