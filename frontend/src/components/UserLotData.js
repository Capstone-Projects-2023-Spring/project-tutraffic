import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export const UserLotData = (userId) => {
  const [userLotType, setLotType] = useState(null);
  const [userCarType, setCarType] = useState(null);
  const [userPriceType, setPriceType] = useState(null);

  useEffect(() => {
    if (!userId) {
      setLotType(null);
      setCarType(null);
      setPriceType(null);
      return;
    }

    const fetchUserData = async () => {
      const userDoc = doc(db, 'users', userId);
      const snapshot = await getDoc(userDoc);
      const userData = snapshot.exists() ? snapshot.data() : null;

      if (userData.lotType === 'street') {
        setLotType(true);
      } else if (userData.lotType === 'lot') {
        setLotType(false);
      } else {
        setLotType(null);
      }

      if (userData.CarSize === 'Small') {
        setCarType(2);
      } else if (userData.CarSize === 'Average') {
        setCarType(3);
      } else if (userData.CarSize === 'Large') {
        setCarType(5);
      } else {
        setCarType(null);
      }
      if (userData.priceType === 'free') {
        setPriceType(true);
      } else if (userData.priceType === 'notFree') {
        setPriceType(false);
      } else {
        setPriceType(null);
      }
    };

    fetchUserData();
  }, [userId, setLotType, setCarType, setPriceType]);

  return { userLotType, userCarType, userPriceType};
};
