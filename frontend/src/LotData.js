import { useState, useEffect } from 'react';
import axios from 'axios';

export const useData = () => {
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);

    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const response = await axios.get('https://storage.googleapis.com/parking-test-bucket/serc.json');
                setData1(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setData1(null);
            }
        };
        fetchData1();
    }, []);

    useEffect(() => {
        const fetchData2 = async () => {
            try {
                const response = await axios.get('https://storage.googleapis.com/parking-test-bucket/mong.json');
                setData2(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setData2(null);
            }
        };
        fetchData2();
    }, []);

    return [data1, data2];
};