import React from 'react';
import { useData } from './LotData';
import { calculateDistance } from './utils';

const Data = () => {
  const data = useData();
  const latitude = localStorage.getItem('latitude');
  const longitude = localStorage.getItem('longitude');

  return (
    <div className="container mt-4">

      <h2>All Parking Lots data</h2>

      {data ? (
        Object.keys(data).map((key) => {
          const distance = calculateDistance(latitude, longitude, data[key].lat, data[key].lng);
          return (
            <div className="row" key={key}>
              <div className="col mb-4">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">Lot: {data[key].name}</p>
                    <p className="card-text">Spots: {data[key].spots}</p>
                    {latitude && longitude && !isNaN(distance) && (
                      <p className="card-text text-end">{distance.toFixed(2)} mi</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}


    </div>
  );
};

export default Data;
