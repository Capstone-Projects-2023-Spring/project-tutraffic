import { useState, useEffect } from 'react';
import { database, auth, db } from '../firebase';
import { ref, get } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDoc } from 'firebase/firestore';

export const LotData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const parkingRef = ref(database, 'parking');
      const snapshot = await get(parkingRef);
      const parkingObjects = snapshot.val();
      const streetParking = [];
      const lotParking = [];

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const usersRef = doc(collection(db, 'users'), user.uid);
          const docSnap = await getDoc(usersRef);

          if (docSnap.exists() && docSnap.data().lotType === 'street') {
            for (const value of Object.values(parkingObjects)) {
              if (value.street) {
                streetParking.push(value);
              }
            }
            setData(streetParking);
          } else if (docSnap.exists() && docSnap.data().lotType === 'lot'){
            for (const value of Object.values(parkingObjects)) {
              if (!value.street) {
                lotParking.push(value);
              }
            }
            setData(lotParking);
          }
        } else {
          setData(parkingObjects);
        }
      });
    };

    fetchData();
  }, []);

  return data;
};
