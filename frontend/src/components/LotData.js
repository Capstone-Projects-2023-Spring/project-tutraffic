import { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, get } from 'firebase/database';

export const useData = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const sercRef = ref(database, 'serc');
      const montRef = ref(database, 'mont');

      const sercSnapshot = await get(sercRef);
      const montSnapshot = await get(montRef);

      setData1(sercSnapshot.val());
      setData2(montSnapshot.val());
    };

    fetchData();
  }, []);

  return [data1, data2];
};
