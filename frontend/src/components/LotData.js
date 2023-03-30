import { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, get } from 'firebase/database';

export const LotData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const parkingRef = ref(database, 'parking');
      const snapshot = await get(parkingRef);
      setData(snapshot.val());
    };

    fetchData();
  }, []);

  return data;
};
