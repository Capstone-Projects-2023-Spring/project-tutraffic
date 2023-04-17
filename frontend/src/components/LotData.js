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
      const parkingData = snapshot.val();
    

      // Use onAuthStateChanged to detect changes in user authentication state
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const usersRef = doc(collection(db, 'users'), user.uid);
          const docSnap = await getDoc(usersRef);

          
          if (docSnap.exists() && docSnap.data().CarSize==='Small') { 
            if (docSnap.exists() && docSnap.data().lotType==='street'){
              const filteredData = Object.values(parkingData).filter(parking => parking.maxsize <= 2
                && parking.street===true);
                setData(filteredData); 
            }else if (docSnap.exists() && docSnap.data().lotType==='lot'){
              const filteredData = Object.values(parkingData).filter(parking => parking.maxsize <= 2
                && parking.street!==true);
                setData(filteredData);
            }else if(docSnap.exists() && docSnap.data().lotType==='both'){
              const filteredData = Object.values(parkingData).filter(parking => parking.maxsize <= 2);
                setData(filteredData);
            }
                    
          } else if(docSnap.exists() && docSnap.data().CarSize==='Average'){
            if(docSnap.exists() && docSnap.data().lotType==='street'){
              const filteredData = Object.values(parkingData).filter(parking => parking.maxsize <= 4 
                && parking.maxsize>=2 && parking.street===true);
              setData(filteredData);
            }if(docSnap.exists() && docSnap.data().lotType==='lot'){
              const filteredData = Object.values(parkingData).filter(parking => parking.maxsize <= 4 
                && parking.maxsize>=2 && parking.street!==true);
              setData(filteredData);
            }else{
              const filteredData = Object.values(parkingData).filter(parking => parking.maxsize <= 4 
                && parking.maxsize>=2);
              setData(filteredData);
            }

          }else if(docSnap.exists() && docSnap.data().CarSize==='Large'){
            if(docSnap.exists() && docSnap.data().lotType==='street'){
              const filteredData = Object.values(parkingData).filter(parking => parking.maxsize >=3 
                &&parking.street===true);
            setData(filteredData);
            }else if (docSnap.exists() && docSnap.data().lotType==='lot'){
              const filteredData = Object.values(parkingData).filter(parking => parking.maxsize >=3 
                &&parking.street!==true);
            setData(filteredData);
            }else{
              const filteredData = Object.values(parkingData).filter(parking => parking.maxsize >=3);
            setData(filteredData);
            }
          }
          else {
            // Set data to unfiltered parkingData
            const filteredData = parkingData;
            setData(filteredData);
          }
        } else {
          // Set data to unfiltered parkingData if user is not authenticated
          const filteredData = parkingData;
          setData(filteredData);
        }
      });
    };


    
    fetchData();
  }, []);

  return data;
};
